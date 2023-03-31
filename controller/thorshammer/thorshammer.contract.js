"use strict";

import Web3 from 'web3';
var web3, provider;
import { fail, ok } from '../../config/resformat.js';
import { ERR0001,ERR0009, ERR0003, ERR0024, ERR0026, ERR0040, ERR0042, ERR0047, ERR0046, ERR0045, ERR0044, ERR0043 } from '../../config/errors.js';
import { thorsHealth } from '../provider/ping.js';
import pkg_winston from 'winston';
const { createLogger } = pkg_winston
import { setLogConfig } from '../../config/logconfig.js';

const logger = createLogger(setLogConfig('thorshammer.contract.js'));

// Deploy smart contract using serializeHex 
export async function deploySCHex(req, res) {
    try {
        logger.info(req.params.class + "." + req.params.function + " requested");
        // console.log('Deploy Smart Contract Transaction Hex To The Blockchain');
        provider = await thorsHealth(req, res);
        web3 = new Web3(provider);

        if (req.body.txHashOnly == undefined || req.body.serializedTx == undefined ){
            let a = {
                "code": 400,
                "data": ERR0001 + ERR0009 + " or " + ERR0003
            }
            fail(a, res)
        }else{
        switch (req.body.txHashOnly) {
            case true:
                web3.eth.sendSignedTransaction('0x' + req.body.serializedTx, (err, hash) => {
                    if (err) {
                        let a = {
                            "code": 400,
                            "data": err.toString()
                        }
                        fail(a, res);
                        logger.error(ERR0026, err);
                    } else {
                        ok(hash, res);
                        // console.log('TX hash : ', hash);
                    }
                });
                break;
            case "true":
                web3.eth.sendSignedTransaction('0x' + req.body.serializedTx, (err, hash) => {
                    if (err) {
                        let a = {
                            "code": 400,
                            "data": err.toString()
                        }
                        fail(a, res);
                        logger.error(ERR0026, err);
                    } else {
                        ok(hash, res);
                        // console.log('TX hash : ', hash);
                    }
                });
                break;
            case false:
                web3.eth.sendSignedTransaction('0x' + req.body.serializedTx, (hash) => {
                    // console.log('TX hash : ', hash);
                })
                    .on('receipt', receipt => { ok(receipt, res); })
                    .on('error', err => {
                        let a = {
                            "code": 400,
                            "data": err.toString()
                        }
                        fail(a, res);
                    });
                break;
            case "false":
                web3.eth.sendSignedTransaction('0x' + req.body.serializedTx, (hash) => {
                    // console.log('TX hash : ', hash);
                })
                    .on('receipt', receipt => { ok(receipt, res); })
                    .on('error', err => {
                        let a = {
                            "code": 400,
                            "data": err.toString()
                        }
                        fail(a, res);
                    });
                break;
            default:
                fail("Invalid Value txHashOnly Please Insert Only True or False", res);
        }
        }
    } catch ( err ) {
        logger.error(ERR0026, err);
        let a = {
            "code": 400,
            "data": err.toString()
        }
        fail(a, res);
    }

}

// Call smart contract function after deploy
export async function callSC(req, res) {
    logger.info(req.params.class + "." + req.params.function + " requested");
    try {
      // console.log("Start Get Detail From Smart Contract Function");
      provider = await thorsHealth(req, res);
      web3 = new Web3(provider);
      if (req.body.abi == undefined || req.body.contractAddress == undefined || req.body.param == undefined){
        let a = {
            "code": 400,
            "data": ERR0001 + ERR0042 + " or " + ERR0043 + " or " + ERR0044
        }
        fail(a, res);
      }else{
      var contract = new web3.eth.Contract(
        req.body.abi,
        req.body.contractAddress
      );
  
      var params = JSON.stringify(req.body.param);
      // using call method
      let userMethod =
        "contract.methods." +
        req.body.method +
        "(" +
        params.substring(1, params.length - 1) +
        ")" +
        ".call()";
      var call = await eval(userMethod);
      ok(call, res);
      }
    } catch ( err ) {
      logger.error(ERR0024, err);
      let a = {
        "code": 400,
        "data": err.toString()
    }
      fail(a, res);
    }
  }

// Create encoded ABI for smart contract
export async function encodeABISC(req, res) {
    try {
        logger.info(req.params.class + "." + req.params.function + " requested");
        // console.log('Start Using Encode ABI SC');
        provider = await thorsHealth(req, res);
        web3 = new Web3(provider);
        if ( req.body.abi == undefined || req.body.argument == undefined || req.body.bytecode == undefined){
            let a = {
                "code": 400,
                "data": ERR0001 + ERR0045 + " or " + ERR0046
            }
        }else{
        var contract = new web3.eth.Contract(req.body.abi);
        let userMethod = "contract.deploy({ data: '" + '0x' + req.body.bytecode + "'," + 'arguments: ' + JSON.stringify(req.body.argument) + '}).encodeABI()';
        // console.log('userMethod : ', userMethod)
        var userEncodeAbi = await eval(userMethod);

        ok(userEncodeAbi, res);
        }
    } catch ( err ) {
        logger.error(ERR0040 + "(" + err.toString() + ")");
        let a = {
            "code": 400,
            "data": ERR0040 +":"+ err.toString()
        }
        fail(a, res);
    }
}

// Create encoded ABI for function in smart contract
export async function encodeABIFunctionSC(req, res) {
    try {
        logger.info(req.params.class + "." + req.params.function + " requested");
        // console.log('Start Using Encode ABI Function SC');
        provider = await thorsHealth(req, res);
        web3 = new Web3(provider);
        if( req.body.abi == undefined || req.body.contractAddress == undefined || req.body.param == undefined || req.body.method == undefined){
            let a = {
                "code": 400,
                "data": ERR0001 + ERR0042 + " or " + ERR0043 + " or " + ERR0044 + " or " + ERR0047
            }
        }else{
        var contract = new web3.eth.Contract(req.body.abi, req.body.contractAddress);
        var params = JSON.stringify(req.body.param);

        let userMethod = 'contract.methods.' + req.body.method + '(' + params.substring(1, params.length - 1) + ')' + '.encodeABI()';
        // console.log('userMethod : ', userMethod)
        var userEncodeAbi = await eval(userMethod);

        ok(userEncodeAbi, res);
        }
    } catch ( err ) {
        logger.error(ERR0040 + "(" + err.toString() + ")");
        let a = {
            "code": 400,
            "data": ERR0040 +":"+ err.toString()
        }
        fail(a, res);
    }
}