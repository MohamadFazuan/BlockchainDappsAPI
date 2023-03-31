"use strict";

import Web3 from "web3";
import { thorsHealth } from "../provider/ping.js";
let web3, provider;
import { ok, fail } from "../../config/resformat.js";
import { ERR0040, ERR0001, ERR0002, ERR0006, ERR0007, ERR0050, ERR0017, ERR0049, ERR0048, ERR0053, ERR0052 } from "../../config/errors.js";
import pkg_winston from "winston";
const { createLogger } = pkg_winston;
import validateGetBalance from "../../validation/thor.getBalance.js";
import validateGetBlock from "../../validation/thor.getBlock.js";
import { setLogConfig } from "../../config/logconfig.js";
import pkg_axios from "axios";
const { get } = pkg_axios;

const logger = createLogger(setLogConfig("thorshammer.nontransaction.js"));

// Returns number of peers connected
export async function getPeerCount(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth.net
      .getPeerCount()
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
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns the amount of new block pending until first confirmation happen
export async function transactionBlockTimeout(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    try {
      let result = web3.eth.transactionBlockTimeout;
      ok(result, res);
    } catch (err) {
      logger.error(err.toString());
      let a = {
        "code": 400,
        "data": err.toString(),
      };
      fail(a, res);
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

// Returns number of blocks required until a transaction is considered confirmed
export async function transactionConfirmationBlocks(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    try {
      let result = web3.eth.transactionBlockTimeout;
      ok(result, res);
    } catch (err) {
      logger.error(err.toString());
      let a = {
        "code": 400,
        "data": err.toString(),
      };
      fail(a, res);
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

// Return number of seconds Web3 will wait for receipt
export async function transactionPollingTimeout(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    try {
      let result = web3.eth.transactionPollingTimeout;
      ok(result, res);
    } catch (err) {
      logger.error(err.toString());
      let a = {
        "code": 400,
        "data": err.toString(),
      };
      fail(a, res);
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

// Returns current gas price oracle
export async function getGasPrice(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth
      .getGasPrice()
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
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns the number of hashes per second that node mining with
export async function getHashrate(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth
      .getHashrate()
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
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns current block number in node
export async function getBlockNumber(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth
      .getBlockNumber()
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
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString());
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns balance for specific address
export async function getBalance(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    const { errorMsg, isValid } = validateGetBalance(req.body);

    if (!isValid) {
      logger.info(ERR0001 + errorMsg.address);
      let a = {
        "code": 400,
        "data": ERR0001 + errorMsg.address,
      };
      return fail(a, res);
    }

    if(!req.body.address){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0002 
      }
      fail(a, res);
    }else{
    web3.eth
      .getBalance(req.body.address)
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
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
      "code": 400,
      "data": err.toString(),
    };
    fail(a, res);
    // return err;
  }
}

// Returns the code at a specific address
export async function getCode(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    const { errorMsg, isValid } = validateGetBalance(req.body);

    if (!isValid) {
      logger.info(ERR0001 + errorMsg.address);
      let a = {
        "code": 400,
        "data": ERR0001 + ":" + errorMsg.address,
      };
      return fail(a, res);
    }

    if(!req.body.address){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0002 
      }
      fail(a, res);
    }else{
    web3.eth
      .getCode(req.body.address)
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
  } catch (err) {
    logger.error(ERR0040 + ":" + err.toString());
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns the block information for specific blockNumber or blockHash
export async function getBlock(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    const { errorMsg, isValid } = validateGetBlock(req.body.blockNumber);

    if (!isValid) {
      logger.error(
        ERR0001 + errorMsg.blockNumber + " or " + errorMsg.blockHash
      );
      let a = {
        "code": 400,
        "data": ERR0001 + errorMsg.blockNumber + " or " + errorMsg.blockHash,
      };
      fail(a, res);
    }

    if(!req.body.blockNumber || !req.body.blockHash){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0007 + " or " + ERR0006 
      }
      fail(a, res);
    }else{
    if (req.body.blockNumber) {
      web3.eth
        .getBlock(req.body.blockNumber)
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
    } else if (req.body.blockHash) {
      web3.eth
        .getBlock(req.body.blockHash)
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

// Returns get transaction count for specific blockNumber or blockHash
export async function getBlockTransactionCount(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if (!req.body.blockNumber || !req.body.blockHash) {
      let a ={
        "code": 400,
        "data": ERR0001 + ERR0007 + " or " + ERR0006
      }
      fail(a, res);
    } else {
      if (req.body.blockNumber) {
        web3.eth
          .getBlockTransactionCount(req.body.blockNumber)
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
      } else if (req.body.blockHash) {
        web3.eth
          .getBlockTransactionCount(req.body.blockHash)
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

// Returns the number of uncles in a block matching blockHash or blockNumber
export async function getBlockUncleCount(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    const { errorMsg, isValid } = validateGetBlock(req.body.blockNumber);

    if (!isValid) {
      logger.info(ERR0001 + errorMsg.blockNumber + " or " + errorMsg.blockHash);
      let a = {
        "code": 400,
        "data": ERR0001 + errorMsg.blockNumber + " or " + errorMsg.blockhash,
      };
      return fail(a, res);
    }

    if(!req.body.blockNumber || !req.body.blockHash){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0006 + " or " + ERR0007 
      }
      fail(a, res);
    }else{
    if (req.body.blockNumber) {
      web3.eth
        .getBlockUncleCount(req.body.blockNumber)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error(err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(err.toString(), res);
        });
    } else if (req.body.blockHash) {
      web3.eth
        .getBlockUncleCount(req.body.blockHash)
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

// Returns blocks uncle by given index position
export async function getUncle(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if(!req.body.blockNumber || !req.body.blockHash){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0006 + " or " + ERR0007
      }
      fail(a, res);
    }else{
    if (req.body.blockNumber) {
      web3.eth
        .getUncle(req.body.blockNumber, req.body.uncleIndex)
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
    } else if (req.body.blockHash) {
      web3.eth
        .getUncle(req.body.blockHash, req.body.uncleIndex)
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

// Returns fast, standard and low gas price estiamted from ~50 provious transaction
// export async function getGasRate (req, res) {
//   //in Wei
//   try {
//     var max,
//       min,
//       average,
//       list = [],
//       sum = 0,
//       limit = 10;

//     logger.info(req.params.class + "." + req.params.function + " requested");
//     provider = await thorsHealth(req, res);
//     web3 = new Web3(provider);

//     // let blockNumber = await web3.eth.getBlockNumber();
//     // let blockNumber = 541442;
//     let blockNumber = 551288;

//     do {
//       let bitcoreUrl =
//         "http://bitcore.okwave.asia:3000/api/ETH/mainnet/tx?blockHeight=" +
//         blockNumber;

//       let reqBit = await get(bitcoreUrl);

//       reqBit.data.forEach((element) => {
//         list.push(element.gasPrice);
//         sum += element.gasPrice;
//       });

//       blockNumber--;
//     } while (list.length < limit);

//     list.sort(function (a, b) {
//       return a - b;
//     });

//     min = list[0];
//     max = list[limit - 1];
//     average = (list[list.length / 2 - 1] + list[list.length / 2]) / 2;
//     console.log({
//       fast: max,
//       standard: average,
//       slow: min,
//     });
//     ok(
//       {
//         fast: max,
//         standard: average,
//         slow: min,
//       },
//       res
//     );
//   } catch (err) {
//     logger.error(ERR0040 + "(" + err.toString() );
//     fail(ERR0040 + "(" + err.toString() , res);
//   }
// }

// Returns amount of gas used
export async function estimateGas(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if(!req.body.from && !req.body.to && !req.body.data){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0017 + " or " + ERR0048 + " or " + ERR0049
      }
      fail(a, res);
    }else{
    web3.eth
      .estimateGas(req.body)
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
  } catch (err) {
    if (err instanceof SyntaxError) {
      logger.error(ERR0040 + ":" + err.toString());
      let a = {
        "code": 400,
        "data": ERR0040 + ":" + err.toString(),
      };
      fail(a, res);
    }
  }
}

// Convert any given value to HEX
export async function toHex(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if(!req.body.mixed){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0050 
      }
      fail(a, res);
    }else{
      var mixed = req.body.mixed;
      if (req.body.mixed) {
        let result = web3.utils.toHex(mixed.toString());
        ok(result, res);
      }
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

// Returns the HEX rerepresentation of a given ASCII string
export async function asciiToHex(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if(!req.body.string){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0051 
      }
      fail(a, res);
    }else{
      if (req.body.string) {
        let result = web3.utils.asciiToHex(req.body.string);
        ok(result, res);
      }
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

// Check if given address is a valid Ethereum address
export async function isAddress(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if(!req.body.address){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0002 
      }
      fail(a, res);
    }else{
      if (req.body.address) {
        let result = web3.utils.isAddress(req.body.address);
        ok(result, res);
      }
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

// Convert any wei value into ether
export async function fromWei(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if(!req.body.number || !req.body.unit){
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0052 + " or " + ERR0053 
      }
      fail(a, res);
    }else{
      if (req.body.number && req.body.unit) {
        let result = web3.utils.fromWei(
          req.body.number.toString(),
          req.body.unit
        );
        ok(result, res);
      }
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
