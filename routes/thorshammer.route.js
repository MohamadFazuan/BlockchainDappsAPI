"use strict";

import pkg_winston from "winston";
const { createLogger } = pkg_winston;
import { fail } from "../config/resformat.js";
import { setLogConfig } from "../config/logconfig.js";
import { setRouterConfig } from "../config/router.js";
import * as redis from "redis";

const logger = createLogger(setLogConfig("thorshammer.routes.js"));

import {
  getId,
  isListening,
  getProtocolVersion,
  isSyncing,
  isMining,
  getChainId,
  getNodeInfo,
  getStorageAt,
} from "../controller/thorshammer/thorshammer.admin.js";
import {
  getPeerCount,
  transactionBlockTimeout,
  transactionConfirmationBlocks,
  transactionPollingTimeout,
  getGasPrice,
  getHashrate,
  getBlockNumber,
  getBalance,
  getCode,
  getBlock,
  getBlockTransactionCount,
  getBlockUncleCount,
  getUncle,
  estimateGas,
  toHex,
  asciiToHex,
  isAddress,
  fromWei,
} from "../controller/thorshammer/thorshammer.nontransaction.js";
import {
  getTransaction,
  getTransactionFromBlock,
  getTransactionReceipt,
  getTransactionCount,
  sendSignedTransaction,
} from "../controller/thorshammer/thorshammer.transaction.js";
import {
  callSC,
  deploySCHex,
  encodeABISC,
  encodeABIFunctionSC
} from "../controller/thorshammer/thorshammer.contract.js";

/* GET thorhammer listing. */
const modRoute = setRouterConfig();

modRoute.get("/:class/:function", async function (req, res) {
  try {
    if (req.params.class === "web3.*.net") {
      switch (req.params.function) {
        case "getId":
          getId(req, res);
          break;
        case "isListening":
          isListening(req, res);
          break;
        case "getPeerCount":
          getPeerCount(req, res);
          break;
        default:
          logger.info("wrong method in class " + req.params.class);
          res.json({
            error: "Method Not Found! Check class and function in url!",
          });
          break;
      }
    } else if (req.params.class === "web3.eth") {
      switch (req.params.function) {
        case "transactionBlockTimeout":
          transactionBlockTimeout(req, res);
          break;
        case "transactionConfirmationBlocks":
          transactionConfirmationBlocks(req, res);
          break;
        case "transactionPollingTimeout":
          transactionPollingTimeout(req, res);
          break;
        case "getProtocolVersion":
          getProtocolVersion(req, res);
          break;
        case "isSyncing":
          isSyncing(req, res);
          break;
        case "isMining":
          isMining(req, res);
          break;
        case "getAccounts":
          isMining(req, res);
          break;
        case "getGasPrice":
          getGasPrice(req, res);
          break;
        case "getHashrate":
          getHashrate(req, res);
          break;
        case "getBlockNumber":
          getBlockNumber(req, res);
          break;
        case "getBalance":
          getBalance(req, res);
          break;
        case "getChainId":
          getChainId(req, res);
          break;
        case "getNodeInfo":
          getNodeInfo(req, res);
          break;
        default:
          logger.info("wrong method in class " + req.params.class);
          res.json({
            error: "Method Not Found! Check class and function in url!",
          });
          break;
      }
    } else {
      logger.info("error on class: Invalid class");
      return res.json({
        error: "Invalid eth class! Please check your eth class in url.",
      });
    }
  } catch ( err ) {
    logger.error(err.toString());
    fail(err.toString(), res);
  }
});

modRoute.post("/:class/:function", async function (req, res) {
  try {
    if (req.params.class === "web3.eth") {
      switch (req.params.function) {
        case "getBalance":
          getBalance(req, res);
          break;
        case "getStorageAt":
          getStorageAt(req, res);
          break;
        case "getCode":
          getCode(req, res);
          break;
        case "getBlock":
          getBlock(req, res);
          break;
        case "getBlockTransactionCount":
          getBlockTransactionCount(req, res);
          break;
        case "getBlockUncleCount":
          getBlockUncleCount(req, res);
          break;
        case "getUncle":
          getUncle(req, res);
          break;
        case "getTransaction":
          getTransaction(req, res);
          break;
        case "getTransactionFromBlock":
          getTransactionFromBlock(req, res);
          break;
        case "getTransactionReceipt":
          getTransactionReceipt(req, res);
          break;
        case "getTransactionCount":
          getTransactionCount(req, res);
          break;
        case "sendSignedTransaction":
          sendSignedTransaction(req, res);
          break;
        case "estimateGas":
          estimateGas(req, res);
          break;
        default:
          logger.info("wrong method in class " + req.params.class);
          res.json({
            error: "Method Not Found! Check class and function in url!",
          });
          break;
      }
    } else if (req.params.class == "contract") {
      switch (req.params.function) {
        case "callSC":
          callSC(req, res);
          break;
        case "deploySCHex":
          deploySCHex(req, res);
          break;
        case "encodeABISC":
          encodeABISC(req, res);
          break;
        case "encodeABIFunctionSC":
          encodeABIFunctionSC(req, res);
          break;
        default:
          logger.info("wrong method in class " + req.params.class);
          res.json({
            error: "Method Not Found! Check class and function in url!",
          });
      }
    } else if (req.params.class === "web3.utils") {
      switch (req.params.function) {
        case "toHex":
          toHex(req, res);
          break;
        case "asciiToHex":
          asciiToHex(req, res);
          break;
        case "isAddress":
          isAddress(req, res);
          break;
        case "fromWei":
          fromWei(req, res);
          break;
        default:
          logger.info("wrong method in class " + req.params.class);
          res.json({
            error: "Method Not Found! Check class and function in url!",
          });
      }
    } else {
      logger.info("error on class: Invalid class");
      return res.json({
        error: "Invalid eth class! Please check your eth class in url.",
      });
    }
  } catch ( err ) {
    logger.error(err.toString());
    fail(err.toString(), res);
  }
});

export default modRoute;
