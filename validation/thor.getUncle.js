import { isEmpty as _isEmpty, isInt } from 'validator';
import isEmpty from 'is-empty';
import { ERR0010, ERR0011 } from "../config/errors.js";

export default function validateGetUncle(data) {
    let errorMsg = {};

    data.uncleIndex = !isEmpty(data.uncleIndex) ? data.uncleIndex : "";
    data.blockNumber = !isEmpty(data.blockNumber) ? data.blockNumber : "";
    data.blockHash = !isEmpty(data.blockHash) ? data.blockHash : "";

    if(_isEmpty(data.uncleIndex)) {
        errorMsg.uncleIndex = ERR0010
    } else if(!isInt(data.uncleIndex)) {
        errorMsg.uncleIndex = ERR0011
    }
    
    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}