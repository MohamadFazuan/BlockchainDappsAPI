var hoststhors = process.env.THORS_URL.split(",");
import pkg_request from 'request';
const { post } = pkg_request;
import pkg_axios from 'axios';
const { post: _post } = pkg_axios;
import Web3 from 'web3';
import Promise from 'promise';
import isreach from 'is-reachable';
var countThors = 0;

export async function thorsHealth(req, res) {
  var listen,
    block,
    breakloop = false,
    reachable,
    hostname;
  return new Promise( async (resolve) => {
    do {
      hostname = hoststhors[countThors];
      console.log(hostname);
      reachable =  await isreach(hostname);
      if (reachable === true) {
        try {
          var web3 = new Web3(hostname);
          listen =  await web3.eth.net.isListening();
          block =  await web3.eth.getBlockNumber();
          
          if (listen === true && block !== null) {
            breakloop = true;
          }
        } catch (err) {
          countThors++;
          if (countThors > hoststhors.length - 1) countThors = 0;
        }
      } else {
        countThors++;
        if (countThors > hoststhors.length - 1) countThors = 0;
      }
    } while (breakloop === false)
    resolve(hostname);
    countThors++;
    if (countThors > hoststhors.length - 1) countThors = 0;
  })
}