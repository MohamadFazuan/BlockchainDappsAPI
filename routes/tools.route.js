"use strict";

import { Router } from "express";
const router = Router();
import pkg_winston from 'winston';
const { createLogger } = pkg_winston;
import { setLogConfig } from "../config/logconfig.js";
import { ok } from "../config/resformat.js";
const logger = createLogger(setLogConfig("tools.route.js"));
import { registerToken } from "../controller/bctools/secure.controller.js";
/* GET thorhammer listing. */
router.get("/", function (req, res, next) {
    ok("Welcome to Integration Hub.", res);
});

router.get("/registerToken", registerToken);


export default router;
