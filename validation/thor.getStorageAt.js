import { isEmpty as _isEmpty, isInt } from 'validator';
import Web3 from 'web3';
var web3 = new Web3();
import isEmpty from 'is-empty';
import { ERR0002, ERR0003, ERR0005, ERR0009 } from "../config/errors.js";

export default function validateGetBalance(data) {
    let errorMsg = {};

    data.address = !isEmpty(data.address) ? data.address : "";
    data.position = !isEmpty(data.position) ? data.position : "";

    if(_isEmpty(data.address)) {
        errorMsg.address = ERR0002;
    } else if(!web3.utils.isAddress(data.address)) {
        errorMsg.address = ERR0003;
    }

    if(_isEmpty(data.position)) {
        errorMsg.position = ERR0005
    } else if(isInt(data.position)) {
        errorMsg.position = ERR0009
    }

    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}