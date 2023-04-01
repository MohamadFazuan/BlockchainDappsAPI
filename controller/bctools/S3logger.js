"use strict";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "dotenv";
config();
import {
    existsSync,
    mkdirSync,
    writeFileSync,
    readFileSync,
    copyFileSync,
    unlinkSync,
} from "fs";

const dir = "./logs/";
const file = "./logs/integration_hub.debug.log";

const S3 = new S3Client({
    accessKeyId: process.env.ACCESSKEYID_S3,
    secretAccessKey: process.env.SECRETKEY_S3,
    region: process.env.REGION_S3,
});

export function upload() {
    return new Promise(async (resolve) => {
        if (!existsSync(dir)) {
            mkdirSync(dir);
            writeFileSync(file, " ", function (err, file) {
                if (err) throw err;
            });
            console.log("Integration Hub log file created");
        }

        var params = {
            Bucket: process.env.S3_LOGS,
            Body: readFileSync(file),
            Key: "integration_hub.debug.log",
        };

        S3.send(new PutObjectCommand(params), (err, data) => {
            if (err) {
                resolve("Cannot stored log file");
            } else {
                resolve("Successfully upload logs to S3");
            }
        });
    });
}

export function uploadS3(data) {
    return new Promise(async (resolve) => {
        writeFileSync(dir + data, " ", function (err, data) {
            if (err) throw err;
            console.log("success write");
        });
        copyFileSync(file, dir + data);
        console.log("Integration Hub log file created");

        var params = {
            Bucket: process.env.S3_LOGS,
            Body: readFileSync(dir + data),
            Key: data,
        };

        await S3.send(new PutObjectCommand(params), (err, data) => {
            if (err) {
                resolve("Cannot stored log file");
            } else {
                resolve("Successfully upload logs to S3");
                console.log("Success upload");
            }
        });

        unlinkSync(dir + data);

    });
}