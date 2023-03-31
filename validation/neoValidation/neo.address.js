import { isEmpty as _isEmpty } from 'validator';
import isEmpty from 'is-empty';
import { ERR0002, ERR0003 } from "../config/errors.js";

export default function validateAddress(data) {
    let errorMsg = {};

    data.address = !isEmpty(data.address) ? data.address : "";

    if (_isEmpty(data.address)) {
        errorMsg.address = ERR0002;
    } else if (!web3.utils.isAddress(data.address)) {
        errorMsg.address = ERR0003;
    }

    return {
        errorMsg,
        isValid: isEmpty(errorMsg)
    }
}