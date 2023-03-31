"use strict";

import { fail, ok } from '../../config/resformat.js';
import pkg_winston from 'winston';
const { createLogger } = pkg_winston
import pkg_jsonwebtoken from 'jsonwebtoken';
const { sign } = pkg_jsonwebtoken;
import { secretOrKey } from '../../config/keys.js';
import { setLogConfig } from '../../config/logconfig.js';

const logger = createLogger(setLogConfig('secure.controller.js'));

export function registerToken (req, res) {
    logger.info("registerToken called...");

    try {
        const payload = {
            name: "obc",
        };
        sign(
            payload,
            secretOrKey,
            (err, token) => {
                if (err) {
                    fail("Error: " + err.toString(), res);
                }
                const value = {
                    success: true,
                    message: "Authentication successful!",
                    token: token,
                };
                ok(value, res)
            }
        );
    } catch ( err ) {
        fail("Error: " + err.toString());
    }
}

