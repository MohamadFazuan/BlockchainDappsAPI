import express, { json, urlencoded } from "express";
const app = express();
import toolsRoutes from "./routes/tools.route.js";
import thorsRoutes from "./routes/thorshammer.route.js";
import { config } from "dotenv";
import { fail } from "./config/resformat.js";
import { ERR0034 } from "./config/errors.js";
import cors from "cors";
import { setLogConfig } from "./config/logconfig.js";
import { createLogger } from "winston";
import { upload, uploadS3 } from "./controller/bctools/S3logger.js"
import { CronJob } from "cron";
const logger = createLogger(setLogConfig("server.js"));
config();

var minutes = 5,
  the_interval = minutes * 60 * 1000;
setInterval(function () {
  upload();
}, the_interval);

const corOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors(corOptions));

app.use(function (err, req, res, next) {
  if (err instanceof SyntaxError) {
    let a = {
      code: 400,
      data: ERR0034 + err.toString(),
    };
    fail(a, res);
  }
});

// ROUTING
app.use("/api/v2/", toolsRoutes);
app.use("/api/v2/thorshammer/", thorsRoutes);

// Logger if any interrupt/exit occur
const startGracefulShutdown = (err) => {
  logger.error(err.toString());
  upload();
};

// Cron
const job = new CronJob("0 0 * * *", function () {
  const d = new Date();
  const newPath = d.toDateString() + "_integration_hub.debug.log";
  uploadS3(newPath);
});
job.start();

process.on("SIGTERM", startGracefulShutdown); // signal that is sent to request the process terminates
// process.on("SIGINT", startGracefulShutdown); // generated by command ctrl + C and is an interrupt
process.on("unhandledRejection", startGracefulShutdown);
process.on("uncaughtException", startGracefulShutdown);

const server = app.listen(process.env.PORT, function () {
  console.log("Server is running on ports: " + process.env.PORT);
  app.emit("app_started");
});

export default app;
