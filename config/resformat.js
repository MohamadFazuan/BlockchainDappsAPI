"use strict";

import pkg_winston from 'winston';
const { createLogger } = pkg_winston
import { setLogConfig } from '../config/logconfig.js';

const logger = createLogger(setLogConfig('resformat.js'));

export async function ok(values, res) {
    var data = {
        status: 200,
        values: values,
    };
    await logger.info("Responding... : " + JSON.stringify(data));
    res.json(data);
    res.end();
}

export async function fail(values, res) {
    var data = {
        status: values.code,
        error: values.data,
    };
    await logger.info("Responding... : " + JSON.stringify(data));
    res.status(values.code).json(data);
    res.end();
}
