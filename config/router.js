'use strict'

import { Router } from 'express';
import { fail } from '../config/resformat.js';
import { ERR0022 } from '../config/errors.js';
import { setLogConfig } from '../config/logconfig.js';
import pkg_winston from 'winston';
const { createLogger } = pkg_winston
import { VerifyToken } from '../validation/verify.token.js';

const logger = createLogger(setLogConfig('router.js'))

export function setRouterConfig() {

    const router = Router();
    router.use(async function (req, res, next) {
        let token = req.header('authorization');
        let condition = await VerifyToken(token);
        console.log(condition);
        if (condition == false) {
            logger.error(ERR0022);
            let a = {
                "code": 400,
                "data" : ERR0022
              }
            fail(a, res);
        } else {
            next();
        }
    })

    return router;
}