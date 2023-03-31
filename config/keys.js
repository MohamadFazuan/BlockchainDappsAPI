'use strict'

import { config } from 'dotenv';
config();

export const secretOrKey = process.env.SECRETKEY_TOKEN;
