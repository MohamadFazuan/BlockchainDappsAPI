import { isEmpty as _isEmpty, isInt } from 'validator';
import Web3 from 'web3';
import isEmpty from 'is-empty';
import { ERR0012, ERR0013 } from "../config/errors.js";

export default function validategetblockhash(data) {
    let errorMsg = {};

    data.height = !isEmpty(data.height) ? data.height : "";

    if(_isEmpty(data.height)) {
        errorMsg.height = ERR0012
    }

    if(!isInt(data.height)){
        errorMsg.height = ERR0013
    }
    

    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}