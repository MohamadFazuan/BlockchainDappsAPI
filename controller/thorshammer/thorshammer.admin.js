"use strict";

import Web3 from "web3";
let web3, provider;
import { ok, fail } from "../../config/resformat.js";
import { ERR0001, ERR0002, ERR0003, ERR0004, ERR0005, ERR0040 } from "../../config/errors.js";
import pkg_winston from "winston";
const { createLogger } = pkg_winston;
import { thorsHealth } from "../provider/ping.js";
import { setLogConfig } from "../../config/logconfig.js";

const logger = createLogger(setLogConfig("thorshammer.admin.js"));

// Returns current network ID
export async function getId(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");

    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth.net
      .getId()
      .then((result) => {
        ok(result, res);
      })
      .catch((err) => {
        logger.error("(" + err.toString() + ")");
        let a = {
          "code": 400,
          "data": err.toString(),
        };
        fail(a, res);
      });
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns node listening for peers in boolean
export async function isListening(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth.net
      .isListening()
      .then((result) => {
        ok(result, res);
      })
      .catch((err) => {
        logger.error("(" + err.toString() + ")");
        let a = {
          "code": 400,
          "data": err.toString(),
        };
        fail(a, res);
      });
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns ethereum protocol version
export async function getProtocolVersion(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth
      .getProtocolVersion()
      .then((result) => {
        ok(result, res);
      })
      .catch((err) => {
        logger.error("(" + err.toString() + ")");
        let a = {
          "code": 400,
          "data": err.toString(),
        };
        fail(a, res);
      });
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns syncing status
export async function isSyncing(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth
      .isSyncing()
      .then((result) => {
        ok(result, res);
      })
      .catch((err) => {
        logger.error("(" + err.toString() + ")");
        let a = {
          "code": 400,
          "data": err.toString(),
        };
        fail(a, res);
      });
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns mining status in boolean
export async function isMining(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    web3.eth
      .isMining()
      .then((result) => {
        ok(result, res);
      })
      .catch((err) => {
        logger.error("(" + err.toString() + ")");
        let a = {
          "code": 400,
          "data": err.toString(),
        };
        fail(a, res);
      });
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns storage position of an address
export async function getStorageAt(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);

    if (!req.body.address || !req.body.position) {
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0002 + " or " + ERR0005,
      };
      fail(a, res);
    } else {
      web3.eth
        .getStorageAt(req.body.address, req.body.position)
        .then((result) => {
          ok(result, res);
        })
        .catch((err) => {
          logger.error("(" + err.toString());
          let a = {
            "code": 400,
            "data": err.toString(),
          };
          fail(a, res);
        });
    }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns past logs, matching given options
export async function getPastLogs(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    if (!req.body.address || !req.body.topics) {
      let a = {
        "code": 400,
        "data": ERR0001 + ERR0003 + " or " + ERR0004,
      };
    } else {
      if (req.body.address && req.body.topics) {
        web3.eth
          .getPastLogs({
            address: req.address,
            topics: req.topics,
          })
          .then((result) => {
            // res.json({ result: result });
            ok(result, res);
          })
          .catch((err) => {
            logger.error(err.toString());
            // res.json({ error: err.toString() });
            let a = {
              "code": 400,
              "data": err.toString(),
            };
            fail(a, res);
          });
      }
    }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns chain ID of current connected node
export async function getChainId(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    try {
      web3.eth.getChainId().then((result) => {
        ok(result, res);
      });
    } catch (err) {
      logger.error(err.toString());
      let a = {
        "code": 400,
        "data": err.toString(),
      };
      fail(a, res);
    }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns current client version
export async function getNodeInfo(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    try {
      web3.eth.getNodeInfo().then((result) => {
        ok(result, res);
      });
    } catch (err) {
      logger.error(err.toString());
      let a = {
        "code": 400,
        "data": err.toString(),
      };
      fail(a, res);
    }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}

// Returns list of accounts the node controls
export async function getAccounts(req, res) {
  try {
    logger.info(req.params.class + "." + req.params.function + " requested");
    provider = await thorsHealth(req, res);
    web3 = new Web3(provider);
    try {
      web3.eth.getAccounts().then((result) => {
        ok(result, res);
      });
    } catch (err) {
      logger.error(err.toString());
      let a = {
        "code": 400,
        "data": err.toString(),
      };
      fail(err.toString(), res);
    }
  } catch (err) {
    logger.error(ERR0040 + "(" + err.toString() + ")");
    let a = {
      "code": 400,
      "data": ERR0040 + ":" + err.toString(),
    };
    fail(a, res);
  }
}
