import { isEmpty as _isEmpty } from 'validator';
import isEmpty from 'is-empty';
import { ERR0014, ERR0015, ERR0016, ERR0017 } from "../config/errors.js";

export default function validateContractSend(data) {
    let errorMsg = {};

    data.gasPrice = !isEmpty(data.gasPrice) ? data.gasPrice : "";
    data.gasLimit = !isEmpty(data.gasLimit) ? data.gasLimit : "";
    data.method = !isEmpty(data.method) ? data.method : "";
    data.from = !isEmpty(data.from) ? data.from : "";

    if(_isEmpty(data.gasPrice)) {
        errorMsg.gasPrice = ERR0014
    }

    if(_isEmpty(data.gasLimit)) {
        errorMsg.gasLimit = ERR0015
    }

    if(_isEmpty(data.method)) {
        errorMsg.method = ERR0016
    }

    if(_isEmpty(data.from)) {
        errorMsg.from = ERR0017
    }


    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}