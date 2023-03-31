import pkg_validator from 'validator';
const { isEmpty: _isEmpty, isJSON } = pkg_validator;
import isEmpty from 'is-empty';
import { ERR0007, ERR0008, ERR0027 } from "../config/errors.js";

export default function validateGetBalance(data) {
    let errorMsg = {};

    if (!isEmpty(data.blockNumber)) {
        data.blockNumber = !isEmpty(data.blockNumber) ? data.blockNumber : "";
        if (_isEmpty(data.blockNumber)) {
            errorMsg.blockNumber = ERR0007
        } else if (isInt(data.blockNumber)) {
            errorMsg.blockNumber = ERR0008
        }else if (isJSON(data.blockNumber)){
            errorMsg.blockNumber = ERR0027
        }
    } else if (!isEmpty(data.blockHash)) {
        data.blockHash = !isEmpty(data.blockHash) ? data.blockHash : "";
        if(_isEmpty(data.blockHash)) {
            errorMsg.blockHash = errorMsg.ERR0006
        }
    }


    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}