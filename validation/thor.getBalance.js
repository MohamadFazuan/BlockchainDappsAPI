import pkg_validator from 'validator';
const { isEmpty: _isEmpty, isJSON } = pkg_validator;
import Web3 from 'web3';
var web3 = new Web3(process.env.INFURA_URL);
import isEmpty from 'is-empty';
import { ERR0002, ERR0003, ERR0027 } from "../config/errors.js";

export default function validateGetBalance(data) {
    let errorMsg = {};

    data.address = !isEmpty(data.address) ? data.address : "";

    if (_isEmpty(data.address)) {
        errorMsg.address = ERR0002;
    } else if (!web3.utils.isAddress(data.address)) {
        errorMsg.address = ERR0003;
    } else if (isJSON(data.address)) {
        errorMsg.address = ERR0027;
    }

    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}