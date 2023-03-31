import { isEmpty as _isEmpty, isInt } from 'validator';
import Web3 from 'web3';
var web3 = new Web3();
import isEmpty from 'is-empty';
import { ERR0002, ERR0003, ERR0006, ERR0007, ERR0008 } from "../config/errors.js";

export default function validateThorInput(data) {
    let errorMsg = {};

    data.address = !isEmpty(data.address) ? data.address : "";
    data.blockNumber = !isEmpty(data.blockNumber) ? data.blockNumber: "";
    data.blockHash = !isEmpty(data.blockHash) ? data.blockHash: "";

    if(_isEmpty(data.address)) {
        errorMsg.address = ERR0002;
    }
    if(!web3.utils.isAddress(data.address)){
        errorMsg.address = ERR0003;
    }
    if(_isEmpty(data.blockHash)) {
        errorMsg.blockHash = ERR0006;
    }
    if(_isEmpty(data.blockNumber)) {
        errorMsg.blockNumber = ERR0007;
    }
    if(isInt(data.blockNumber)){
        errorMsg.blockNumber = ERR0008;
    }

    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}

