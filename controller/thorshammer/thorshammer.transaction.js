"use strict";

import Web3 from "web3";
import { thorsHealth } from "../provider/ping.js";
import { ok, fail } from "../../config/resformat.js";
import { ERR0001, ERR0002, ERR0003, ERR0040, ERR0057, ERR0056, ERR0055, ERR0054 } from "../../config/errors.js";
import pkg_winston from "winston";
const { createLogger } = pkg_winston;
import { setLogConfig } from "../../config/logconfig.js";
import isEmpty from "is-empty";
let web3, provider;

const logger = createLogger(setLogConfig("thorshammer.transaction.js"));

// Send sign transaction to network
export async function sendSignedTransaction(req, res) {
  try {
    logger.info("sendSignedTransaction called");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    if (!req.body.serializedTx) {
        let a = {
            "code": 400,
            "data": ERR0001 + ERR0003
        }
        fail(a, res);
    }else{
    if (req.body.serializedTx) {
      web3.eth
        .sendSignedTransaction(req.body.serializedTx)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(a, res);
        });
    }
    // } else {
    //     respoonse.fail(req.body, res)
    // }
    }
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns transaction information matching given transactionHash
export async function getTransaction(req, res) {
  try {
    logger.info("getTransaction called");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    // if (jsonVerify(req.body.transactionHash)) {
    if(!req.body.transactionHash){
        let a = {
            "code": 400,
            "data": ERR0054
        }
    }else{
    if (req.body.transactionHash) {
      web3.eth
        .getTransaction(req.body.transactionHash)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(a, res);
        });
    }
    // } else {
    //     response.fail(req.body, res)
    // }
    }
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
        "code": 400,
        "data": ERR0040 + ":" + err.toString(),
      };
    fail(a, res);
  }
}

// Returns a transaction based on a block hash or number and the transactions index position
export async function getTransactionFromBlock(req, res) {
  try {
    logger.info("getTransactionFromBlock called");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    // if (jsonVerify(req.body.indexNumber) && jsonVerify(req.body.hashString) ) {
    if(!req.body.indexNumber || !req.body.hashString){
        let a = {
            "code": 400,
            "data": ERR0001 + ERR0055 + " or " + ERR0056 
        }
        fail(a, res);
    }else{   
    if (req.body.indexNumber && req.body.hashString) {
      web3.eth
        .getTransactionFromBlock(req.body.hashString, req.body.indexNumber)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(a, res);
        });
    } else if (req.body.number) {
      web3.eth
        .getTransactionFromBlock(req.body.number, req.body.indexNumber)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data":err.toString(),
          };
          fail(err.toString());
        });
    }
    // } else {
    //     response.fail(req.body, res)
    // }
    }
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
        "code": 400,
        "data": ERR0040 + ":" + err.toString(),
      };
    fail(a, res);
  }
}

// Returns transaction receipt matching given transaction hash
export async function getTransactionReceipt(req, res) {
  try {
    logger.info("getTransactionReceipt called");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    // if (jsonVerify(req.body.hash)) {
    
    if(!req.body.hash){
        let a = {
            "code": 400,
            "data": ERR0001 + ERR0057
        }
        fail(a, res);
    }else{
    if (req.body.hash) {
      web3.eth
        .getTransactionReceipt(req.body.hash)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(a, res);
        });
    }
    // } else {
    //     response.fail(req.body, res)
    // }
    }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString());
    let a = {
        "code": 400,
        "data": ERR0040 + ":" + err.toString(),
      };
    fail(a, res);
  }
}

// Returns number of transaction matching given block address
export async function getTransactionCount(req, res) {
  try {
    logger.info("getTransactionCount called");
    provider = await thorsHealth(req, res);
    console.log(provider);
    web3 = new Web3(provider);
    // if (jsonVerify(req.body.address)) {
    if(!req.body.address){
        let a = {
            "code": 400,
            "data": ERR0001 + ERR0002
        }
        fail(a,res);
    }
    if (req.body.address) {
      web3.eth
        .getTransactionCount(req.body.address)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(a, res);
        });
    }
    // } else {
    //     response.fail(req.body, res)
    // }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString());
    let a = {
        "code": 400,
        "data": ERR0040 + ":" + err.toString(),
      };
    fail(a, res);
  }
}
