'use strict'

import jwt_decode from 'jwt-decode';
import pkg_jsonwebtoken from 'jsonwebtoken';
const { verify } = pkg_jsonwebtoken;
import { secretOrKey } from "../config/keys.js";

export async function VerifyToken(token) {
    var result = false;
    if (token != null) {
        if (token.startsWith('CERTIFY ')) {
            // Remove Bearer from string
            token = token.slice(8, token.length);
        }
    } else {
        return false;
    }

    if (token) {
        try {
            let decode = jwt_decode(token);

            if (decode.name == 'certiify') {
                result = verify(token, secretOrKey);
                return result;
            }  else {
                return false;
            }

        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
}
