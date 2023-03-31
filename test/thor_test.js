'use strict'

import { use, should, request } from 'chai';
import chaiHttp from 'chai-http';
const url = 'localhost:3333/api/v2';
import app from '../server';
use(chaiHttp);
should();

// ETHEREUM TESTNET CONTROLLER
// web3.eth.accounts
// describe('hashMessage', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User cannot enter hashMessage without token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/hashMessage')
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "84d32bb87d46d1b748a3099715ff39adbf68496edd90ee64b07e83f9468a11db",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // console.log(res)
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User can enter hashMessage with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/hashMessage')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "84d32bb87d46d1b748a3099715ff39adbf68496edd90ee64b07e83f9468a11db",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // console.log(res)
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on hashMessage', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/hashMessage')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('create', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter create with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/create')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "6b941b4f65df24cd9b3ad7bde7b4105a38d8f366f0ed46de5db0fe28e7a2d4cfc7f2656c10038497210ef39d9dc7fa7aca7d5f4cf69e723d63bed57482e9d1e20ddad22c7394ac0cf5f104229bd04bd3c6a396131010625490e2334109f6838c",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.body)
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on create', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/create')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('privateKeyToAccount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter privateKeyToAccount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/privateKeyToAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "afca9d36624528a8c26225646500ba7d32b6ff2fd9b17ae0f7f90d9959aa65afbd56cde4c43f18ff8dc2a6866a68c2d11f2c8ad052a631f43e848e5d624c9f79bfa0aef82867484220df577aff7548ddc378a6fba710dcf6aad1639d606b0c61",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on privateKeyToAccount', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/privateKeyToAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('web3.eth.accounts', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User enter error url on class web3.eth.accounts', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.accounts/importRawKeys')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ca356f0c62c140f521c7fdeaa12a22e124c465281732c58df78001c315dc4bf7c0e37c1d1bc2ff65db54e0ffcd0fc208bcccb86ad90411db3b8336066497ed7fa8c56758918d469ffbc0a8b6ecf38c12ff0c48b3ba597e3d53aec5a9af7d39e5e73c9377f08f36b242f34a605e2bc878",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// // web3.eth.personal
// describe('currentProvider', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
// it('User cannot enter currentProvider without token in header', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth.personal/currentProvider')
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: "+err)
//             }
//             // console.log(res)
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//         it('User can enter currentProvider with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/currentProvider')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // console.log(res)
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//     });
// });

// describe('newAccount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter newAccount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/newAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "e0d2cd28fbf1ebe493dde31a0a91a621b4347a07fb75b33f413f6bff823b4f9c",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on newAccount', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/newAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "046f2a392197888ff4077fb3fee835d05696916e21e3be09f46ef9a17eab0ffae988009558b3c0993a19293aa57a3fd3373ec58cfb015e8e5feed667ff20c583",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('sign', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter sign with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/sign')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "42ce1dc00708f1592b477397e14674c8bd4475b05be63fe8db639ba18d332957323a49ef134249b1645ddedad5675915b7502207e864f479ea34a6e944e6da8f402401352f82d5a3aaa1b9ff41b2b3bc69705423eeb920ad07714cff9c90af1b66743f900d9e281cf86ba78c7f74c460",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.body)
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on sign', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/sign')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "42ce1dc00708f1592b477397e14674c8bd4475b05be63fe8db639ba18d332957323a49ef134249b1645ddedad5675915b7502207e864f479ea34a6e944e6da8f402401352f82d5a3aaa1b9ff41b2b3bc69705423eeb920ad07714cff9c90af1b66743f900d9e281cf86ba78c7f74c460",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('ecRecover', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter ecRecover with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/ecRecover')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "f6990087843a9027120b449a39c7d1b17d1661efc6f91518e101f3c3fb7e432e0d373b670e767ba66ce84cc5e5cf3aa950a1f452eb89fd1179c8710c17a0ed06fad39d92c31d0b652f51d29fbbe0d7382e947a5f4189960ba2ee19f221795067af80c3338ae8cbc5dd11f4d839a121c4301134c87b30ace946587d28b55c0a52f27feb1694adf275a707831b77a42384fb20be29ea7a7074623daa4e1455f11b63ad5cc425dadd255d650b5914213445c361e2def05d6be60d979ce69feec8d8",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on ecRecover', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/ecRecover')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "046f2a392197888ff4077fb3fee835d05696916e21e3be09f46ef9a17eab0ffae988009558b3c0993a19293aa57a3fd3373ec58cfb015e8e5feed667ff20c583",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('signTransaction', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter signTransaction with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/signTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "746b91c4f8aedc9d8d8d0d8479026262d4b560eae6b49b55e40232ef023250c933cefd5493c4737b901d8f2fa7b98358a83eccd9c67ccb58950a7be7f0c72674c458fdfd3cb113ca9434b693ad77f1bba369957642c0ef6087229feadbf688a80de3fe899279020074f693344c509e971903e5d3fa291e6db382f2536e9173e10dec2ed784f0c3b0914324c09dc537675df6b749e4254f7d569047dfb696299a14eb6c537c5191b9741bd58ca5af2d2a44ec9f9797bfe6d2fbdeda9698e978bd26e69efcd3d116d869fe4e54f6f4513db3d4cc58487a4e0032acf4c8bab0e953",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.body.result)
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on signTransaction', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/signTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "046f2a392197888ff4077fb3fee835d05696916e21e3be09f46ef9a17eab0ffae988009558b3c0993a19293aa57a3fd3373ec58cfb015e8e5feed667ff20c583",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('unlockAccount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter unlockAccount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/unlockAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "8fbbfa62e8f8753d207e1cb4b50518b96efc7fd02b424dbd35329f2f68121132ddc4e2471e57373507fab29512edda597556bdbac3e9925cd7f5b2b1a72eb97a6ea0035d337aeb2c3bab985bc06973e12433955c0e174bd353e93a98364e1e6d0bea3cd3eca5bbf91672eece009832b6",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on unlockAccount', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/unlockAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "046f2a392197888ff4077fb3fee835d05696916e21e3be09f46ef9a17eab0ffae988009558b3c0993a19293aa57a3fd3373ec58cfb015e8e5feed667ff20c583",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('lockAccount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter lockAccount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/lockAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ff510a753f8dbf0ec533b3638b5cc959d6955da45e46c25b7a226b44664f2788e5aa46f05a5e069e6c40da8cb11c0e92328cea4ee8d9844e49abb7f7d19ed39e",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.body.result)
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on lockAccount', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/lockAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('getAccounts', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getAccounts with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/getAccounts')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//     });
// });

// describe('importRawKey', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User have a code error on importRawKey', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/importRawKey')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ca356f0c62c140f521c7fdeaa12a22e124c465281732c58df78001c315dc4bf7c0e37c1d1bc2ff65db54e0ffcd0fc208bcccb86ad90411db3b8336066497ed7fa8c56758918d469ffbc0a8b6ecf38c12ff0c48b3ba597e3d53aec5a9af7d39e5e73c9377f08f36b242f34a605e2bc878",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on importRawKey', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/importRawKey')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('web3.eth.personal', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User enter error url on class web3.eth.personal', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth.personal/importRawKeys')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ca356f0c62c140f521c7fdeaa12a22e124c465281732c58df78001c315dc4bf7c0e37c1d1bc2ff65db54e0ffcd0fc208bcccb86ad90411db3b8336066497ed7fa8c56758918d469ffbc0a8b6ecf38c12ff0c48b3ba597e3d53aec5a9af7d39e5e73c9377f08f36b242f34a605e2bc878",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// web3.eth
// describe('transactionConfirmationBlocks', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter transactionConfirmationBlocks with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/transactionConfirmationBlocks')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//     });
// });

// describe('transactionBlockTimeout', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter transactionBlockTimeout with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/transactionBlockTimeout')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.text);
//                     res.should.have.property('status', 200);
//                     done()
//                 });
//         });
//     });
// });

// describe('transactionPollingTimeout', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter transactionPollingTimeout with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/transactionPollingTimeout')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     console.log(res.text);
//                     res.should.have.property('status', 200);

//                     done()
//                 });
//         });
//     });
// });

// describe('getHashrate', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getHashrate with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getHashrate')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text);

//                     done()
//                 });
//         });
//     });
// });

// describe('getGasPrice', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getGasPrice with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getGasPrice')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text);

//                     done()
//                 });
//         });
//     });
// });

// // describe('getAccounts', function () {
// //     describe('Test Route with Token', function () {
// //         var token = '';

// //         before(function (done) {
// //             chai.request(url)
// //                 .get('/registerToken')
// //                 .end(function (err, res) {
// //                     var result = JSON.parse(res.text);
// //                     token = result.values.token;
// //                     done();
// //                 });
// //         });
// //         it('User can enter getAccounts with token in header', function (done) {
// //             chai.request(url)
// //                 .post('/thorhammer/web3.eth/getAccounts')
// //                 .set('Authorization', "OBC " + token)
// //                 .send({
// //                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
// //                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
// //                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
// //                 })
// //                 .end(function (err, res) {
// //                     if (err) {
// //                         console.log("Error: " + err)
// //                     }
// //                     res.body.result.should.have.property('encrypteddata');
// //                     done()
// //                 });
// //         });
// //     });
// // });

// describe('getBlockNumber', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getBlockNumber with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getBlockNumber')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text);

//                     done()
//                 });
//         });
//     });
// });

// describe('getBalance', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getBalance with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getBalance')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on getBalance', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getBalance')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('getStorageAt', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getStorageAt with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getStorageAt')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "address": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
//                     "position": 0
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text);

//                     done()
//                 });
//         });
// it('User have error not enough parameter on getStorageAt', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getStorageAt')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getCode', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getCode with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getCode')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "address": "0xceb21b8ce14e287a106bd01f5c92dac970c1efd3"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getCode', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getCode')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getBlock', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getBlock with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getBlock')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "blockNumber": "latest"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlock')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error invalid blockNumber on getBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlock')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error on getBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlock')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getBlockTransactionCount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getBlockTransactionCount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getBlockTransactionCount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "blockNumber": "latest"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getBlockTransactionCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlockTransactionCount')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error invalid blockNumber on getBlockTransactionCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlockTransactionCount')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error on getBlockTransactionCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlockTransactionCount')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getBlockUncleCount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getBlockUncleCount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getBlockUncleCount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "blockNumber": "latest"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getBlockUncleCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlockUncleCount')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error invalid blockNumber on getBlockUncleCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlockUncleCount')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error on getBlockUncleCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getBlockUncleCount')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getUncle', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getUncle with token in header (blockNumber)', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getUncle')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "blockNumber": "latest",
//                     "uncleIndex": "0"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.body)
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User can enter getUncle with token in header (blockHash)', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getUncle')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             console.log(res.body)
//             res.body.result.should.have.property('encrypteddata');
//             done()
//         });
// });
// it('User have error not enough parameter on getUncle', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getUncle')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error invalid blockNumber on getUncle', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getUncle')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error on getUncle', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getUncle')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             console.log(JSON.parse(res.text))
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error not have blockNumber and blockHash on getUncle', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getUncle')
//         .set('Authorization', "OBC " + token)
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getTransaction', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getTransaction with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "transactionHash": "0xc919e0b9dec70ae9fac16af491928806210581a82eca8e25e490ebacee324b68"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getTransaction', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransaction')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "transactionHash": "0xc919e0b9dec70ae9fac16af491928806210581a82eca8e25e490ebacee324b68"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getTransactionFromBlock', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getTransactionFromBlock with token in header (hashString)', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getTransactionFromBlock')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "hashString": "latest",
//                     "indexNumber": "3"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//         it('User can enter getTransactionFromBlock with token in header (number)', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getTransactionFromBlock')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "hashString": "latest",
//                     "indexNumber": "3"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(res.text)
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);

//                     done()
//                 });
//         });
// it('User have error not enough parameter on getTransactionFromBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionFromBlock')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "hashString":"latest",
//             "indexNumber":"3"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error not enough parameter (hashString or number) on getTransactionFromBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionFromBlock')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "hashString":"latest",
//             "indexNumber":"3"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error (hashString) on getTransactionFromBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionFromBlock')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "hashString":"latest",
//             "indexNumber":"3"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error (number) on getTransactionFromBlock', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionFromBlock')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "hashString":"latest",
//             "indexNumber":"3"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getTransactionReceipt', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getTransactionReceipt with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getTransactionReceipt')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "hash": "0xc919e0b9dec70ae9fac16af491928806210581a82eca8e25e490ebacee324b68"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getTransactionReceipt', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionReceipt')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "hash":"0xc919e0b9dec70ae9fac16af491928806210581a82eca8e25e490ebacee324b68"    
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error on getTransactionReceipt', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionReceipt')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "hash":"0xc919e0b9dec70ae9fac16af491928806210581a82eca8e25e490ebacee324b68"    
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             console.log(JSON.stringify(res.text))
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getTransactionCount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getTransactionCount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getTransactionCount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "address": "0xceb21b8ce14e287a106bd01f5c92dac970c1efd3"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have error not enough parameter on getTransactionCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionCount')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "address":"0xceb21b8ce14e287a106bd01f5c92dac970c1efd3"    
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have a node error on getTransactionCount', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getTransactionCount')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "11cfabbf59e0c0a06c024f5803f77276f987cbaecf4aac16751350c0d27a1e1dcc33de6489270390ab4cb6909b1bba6fe52dd55394aedd4df13035ce6f4c99e1",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             console.log(JSON.stringify(res.text))
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('sendTransaction', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         //sendTransaction error cannot enter authentication needed
//         it('User can enter sendTransaction with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sendTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "324fd5a46026f7b6fe4702f2aa52b4d3dce05d90f5e2dcca96bdc97dca147b63920c1683d6d13fcc2dee30acc49ae5471cdffba2b86b4229dfeceaf6ebd3e034b2b3ddecaf1fb6bb5cbc1172feec70bad4307cdd250d567ab5ea79d4cca8d5f65c57a998d1e763c0202245b7dbb1afc8db37769b2df41b0cb626700c449f2de93522a7aed6b5d2677a0168d6e1e91a63",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have a node error on sendTransaction', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sendTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "324fd5a46026f7b6fe4702f2aa52b4d3dce05d90f5e2dcca96bdc97dca147b63920c1683d6d13fcc2dee30acc49ae5471cdffba2b86b4229dfeceaf6ebd3e034b2b3ddecaf1fb6bb5cbc1172feec70bad4307cdd250d567ab5ea79d4cca8d5f65c57a998d1e763c0202245b7dbb1afc8db37769b2df41b0cb626700c449f2de93522a7aed6b5d2677a0168d6e1e91a63",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on sendTransaction', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sendTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('sendSignedTransaction', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         // nonce to low, need new serializedTx
//         it('User can enter sendSignedTransaction with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sendSignedTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "serializedTx": "0xf86c04853e660b780082520894b43f7f7af34c4b214456bd98d468d533865fbb458806f05b59d3b20000801ca00de040fe31ea5a8a275fc704e7fc8f7cdbaa6a44a770027c421773bfa7fd6099a07b0452c6a223b50fe8c4a1280f7782470b1ea277eda4ab18ac2ce20e9f08f342"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('status');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on sendSignedTransaction', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/sendSignedTransaction')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "serializedTx": "0xf86c04853e660b780082520894b43f7f7af34c4b214456bd98d468d533865fbb458806f05b59d3b20000801ca00de040fe31ea5a8a275fc704e7fc8f7cdbaa6a44a770027c421773bfa7fd6099a07b0452c6a223b50fe8c4a1280f7782470b1ea277eda4ab18ac2ce20e9f08f342"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error not enough parameter on sendSignedTransaction', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/sendSignedTransaction')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "serializedTx": "0xf86c04853e660b780082520894b43f7f7af34c4b214456bd98d468d533865fbb458806f05b59d3b20000801ca00de040fe31ea5a8a275fc704e7fc8f7cdbaa6a44a770027c421773bfa7fd6099a07b0452c6a223b50fe8c4a1280f7782470b1ea277eda4ab18ac2ce20e9f08f342"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('sign', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         // Error authentication (password or unlock)
//         it('User can enter sign with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sign')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "42ce1dc00708f1592b477397e14674c8bd4475b05be63fe8db639ba18d332957323a49ef134249b1645ddedad5675915b7502207e864f479ea34a6e944e6da8f402401352f82d5a3aaa1b9ff41b2b3bc69705423eeb920ad07714cff9c90af1b66743f900d9e281cf86ba78c7f74c460",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have a node error on sign', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sign')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "8fbbfa62e8f8753d207e1cb4b50518b96efc7fd02b424dbd35329f2f68121132ddc4e2471e57373507fab29512edda59d4653eb38fc66e219305968ef294461229b34b714d5c16331a4dc969756c5eaf4b18752bdbde0f8ab36df86790dd6157",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on sign', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/sign')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('signTransaction', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         // Error authentication (password or unlock)
//         it('User can enter signTransaction with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/signTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "324fd5a46026f7b6fe4702f2aa52b4d3dce05d90f5e2dcca96bdc97dca147b63920c1683d6d13fcc2dee30acc49ae5471cdffba2b86b4229dfeceaf6ebd3e034b2b3ddecaf1fb6bb5cbc1172feec70bad4307cdd250d567ab5ea79d4cca8d5f65c57a998d1e763c0202245b7dbb1afc8db37769b2df41b0cb626700c449f2de995ab69d10ac0a5227b7ccf9c10c4c6ccf796233997418b81d4fd6c66c607f25e5f100195edb26b2e74a6babae69f05ecebc36dc16e8cd1c9462092203487e3eab2d748355081fc706c73156bcbbc43a0e509ce13540f02c539190194b52334c505bb7f3b6ece2cd00509882c6eec42baee22d9dae3c94f024a0246470f55e5bd",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have a node error on signTransaction', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/signTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "324fd5a46026f7b6fe4702f2aa52b4d3dce05d90f5e2dcca96bdc97dca147b63920c1683d6d13fcc2dee30acc49ae5471cdffba2b86b4229dfeceaf6ebd3e034b2b3ddecaf1fb6bb5cbc1172feec70bad4307cdd250d567ab5ea79d4cca8d5f65c57a998d1e763c0202245b7dbb1afc8db37769b2df41b0cb626700c449f2de995ab69d10ac0a5227b7ccf9c10c4c6ccf796233997418b81d4fd6c66c607f25e5f100195edb26b2e74a6babae69f05ecebc36dc16e8cd1c9462092203487e3eab2d748355081fc706c73156bcbbc43a0e509ce13540f02c539190194b52334c505bb7f3b6ece2cd00509882c6eec42baee22d9dae3c94f024a0246470f55e5bd",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on signTransaction', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/signTransaction')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('call', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter call with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/call')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "18dfadbcd39e66eb1c9d64cb77af407c5e39e943ec97bdfdfbdda19f44fb602b16b192fef17bacb4b45a4572c05c064617c794863de1db1e9d0b6de9553be0ec81a3a313bdf0fbefa09c239d34489abec7cee737b58008c3cf55e239346d016738fd55f29b08aaf19bf78ffc0cc1aa6eea9b9ccdad58d84f7a9afd3822d7b34f97690df6c024da70f317c1e2616fdac8",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have a node error on call', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/call')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "18dfadbcd39e66eb1c9d64cb77af407c5e39e943ec97bdfdfbdda19f44fb602b16b192fef17bacb4b45a4572c05c064617c794863de1db1e9d0b6de9553be0ec81a3a313bdf0fbefa09c239d34489abec7cee737b58008c3cf55e239346d01679263c2d263b8d9fd186cff7f85b337d3",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on call', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/call')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('estimateGas', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter estimateGas with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/estimateGas')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have a node error on estimateGas', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/estimateGas')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on estimateGas', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/estimateGas')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('getWork', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         // error method does not exist/is not available
//         // it('User can enter getWork with token in header', function (done) {
//         //     chai.request(url)
//         //         .post('/thorhammer/web3.eth/getWork')
//         //         .set('Authorization', "OBC " + token)
//         //         .send({
//         //             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//         //             "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//         //             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         //         })
//         //         .end(function (err, res) {
//         //             if (err) {
//         //                 console.log("Error: " + err)
//         //             }
//         //             res.body.result.should.have.property('encrypteddata');
//         //             done()
//         //         });
//         // });
//         it('User have a node error on getWork', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getWork')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "18dfadbcd39e66eb1c9d64cb77af407c5e39e943ec97bdfdfbdda19f44fb602b16b192fef17bacb4b45a4572c05c064617c794863de1db1e9d0b6de9553be0ec81a3a313bdf0fbefa09c239d34489abec7cee737b58008c3cf55e239346d01679263c2d263b8d9fd186cff7f85b337d3",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('getChainId', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getChainId with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getChainId')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getNodeInfo', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getNodeInfo with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getNodeInfo')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getProtocolVersion', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getProtocolVersion with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getProtocolVersion')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('isSyncing', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isSyncing with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/isSyncing')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getCoinbase', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getCoinbase with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getCoinbase')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         // it('User have a node error on getChainId', function (done) {
//         //     chai.request(url)
//         //         .post('/thorhammer/web3.eth/getChainId')
//         //         .set('Authorization', "OBC " + token)
//         //         .send({
//         //             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//         //             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//         //             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         //         })
//         //         .end(function (err, res) {
//         //             if (err) {
//         //                 console.log("Error: " + err)
//         //             }
//         //             JSON.parse(res.text).error.should.exist;
//         //             done()
//         //         });
//         // });
//     });
// });

// describe('isMining', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isMining with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/isMining')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('currentProvider', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter currentProvider with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/currentProvider')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(JSON.parse(res.text))
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         // it('User have a node error on getChainId', function (done) {
//         //     chai.request(url)
//         //         .post('/thorhammer/web3.eth/getChainId')
//         //         .set('Authorization', "OBC " + token)
//         //         .send({
//         //             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//         //             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//         //             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         //         })
//         //         .end(function (err, res) {
//         //             if (err) {
//         //                 console.log("Error: " + err)
//         //             }
//         //             JSON.parse(res.text).error.should.exist;
//         //             done()
//         //         });
//         // });
//     });
// });

// describe('defaultAccount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter defaultAccount (parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "8fbbfa62e8f8753d207e1cb4b50518b96efc7fd02b424dbd35329f2f68121132ddc4e2471e57373507fab29512edda593587447852f68141876538ba82031237",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User can enter defaultAccount (no parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error parameter on defaultAccount', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultAccount')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "8fbbfa62e8f8753d207e1cb4b50518b96efc7fd02b424dbd35329f2f68121132ddc4e2471e57373507fab29512edda59ff5d42bcb8d563c7c279f45983f66cf2",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('defaultBlock', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter defaultBlock (parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultBlock')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "2eea4d67eed17e5b62fad4f42da9495fbdea3360b75ca26a1224d71c42ebafc2",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User can enter defaultBlock (no parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultBlock')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error parameter on defaultBlock', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultBlock')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "144e9deba6839a57091190ffb6f26ca735ebf74ef3f03ef99ea4274e23f0329f",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('defaultHardfork', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter defaultHardfork (parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultHardfork')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "135fa97b8304776bff2f46ebf0cb1dffefdd9c25cf745916a5a3f850275b9e89",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User can enter defaultHardfork (no parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultHardfork')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error parameter on defaultHardfork', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultHardfork')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "333a3002a2da7c324fed4dee51d74223e9b2fde11d3d089beb79fcc6086932fd",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('defaultChain', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter defaultChain (parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultChain')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "b283ff6c0adeddae36c656df8cb59967456977ad2beb09aaf6df3eefbb91ac00",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User can enter defaultChain (no parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultChain')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error parameter on defaultChain', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultChain')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "4b375f12480aa218b24ce9a6466ee943f5231434d56bb35cb4e53225ea9503d5",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('defaultCommon', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter defaultCommon (parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultCommon')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "64cc27f63127f92d0e204403b7c82ddd5d7e523c373a9001862d6ed8d4d6a946b1276227e1a4f71a839b8aafc025d319e98264b49b4974d8757e3ba2c64a6119b98dddcb621ce61858d687e2834ee702dd1640e4a18209a6e5832ea78cf795f936dd826953fab0318132e821898ac48cbc86000daac32f6dabba8f1772115869",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User can enter defaultCommon (no parameter) with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultCommon')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error parameter (hardfork) on defaultCommon', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultCommon')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "64cc27f63127f92d0e204403b7c82ddd5d7e523c373a9001862d6ed8d4d6a946b1276227e1a4f71a839b8aafc025d319e98264b49b4974d8757e3ba2c64a6119b98dddcb621ce61858d687e2834ee702dd1640e4a18209a6e5832ea78cf795f9750790316292a7beea2e8dd661a4fbba",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(JSON.parse(res.text))
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error parameter (baseChain) on defaultCommon', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultCommon')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "64cc27f63127f92d0e204403b7c82ddd5d7e523c373a9001862d6ed8d4d6a946b1276227e1a4f71a839b8aafc025d319e98264b49b4974d8757e3ba2c64a6119b98dddcb621ce61858d687e2834ee7023fd3d1f72fe8974ba3f4ccbae2ea867bcbba91bde5bfcfa777bf3ca8e7b04736",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(JSON.parse(res.text))
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User have error parameter (customChain) on defaultCommon', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultCommon')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "64cc27f63127f92d0e204403b7c82ddd5d7e523c373a9001862d6ed8d4d6a946b1276227e1a4f71a839b8aafc025d31928521a90f44e240a729292f3b671a3ecec8cbc96da408468c069d4ffece289ab",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     console.log(JSON.parse(res.text))
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//         it('User can enter defaultCommon without baseChain and hardfork', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/defaultCommon')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "64cc27f63127f92d0e204403b7c82ddd5d7e523c373a9001862d6ed8d4d6a946b1276227e1a4f71a839b8aafc025d319e98264b49b4974d8757e3ba2c64a611985d65c485a0f86974c306d11596c3090",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//     });
// });

// describe('getPastLogs', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getPastLogs with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/getPastLogs')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
//                     topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getPastLogs', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getPastLogs')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "ff510a753f8dbf0ec533b3638b5cc959d6955da45e46c25b7a226b44664f2788e5aa46f05a5e069e6c40da8cb11c0e921cb6d075e232520e07d795355d3251497a8bf986de56ef7691ad6524362534ed4c4243e41e53d59a3777f805d3d4470d49152ffe4767cbfe901901e0b36519ed254b99d78774d5e77a3c530a8c4b40767feeba370d136d062faee95047227b2d",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
// it('User have error not enough parameter on getPastLogs', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getPastLogs')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('web3.eth', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User enter error url on class web3.eth', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.eth/importRawKeys')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// // web3.*.net
// describe('getPeerCount', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getPeerCount with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.*.net/getPeerCount')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('getId', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter getId with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.*.net/getId')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
// it('User have a node error on getChainId', function (done) {
//     chai.request(url)
//         .post('/thorhammer/web3.eth/getChainId')
//         .set('Authorization', "OBC " + token)
//         .send({
//             "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//             "encrypteddata": "caf8dd44acc957812b3443a027504a18d154d76945fbed97c3b37315979366fe5cee2879caf6a9e5aed5b5e9dc5e485685aaf7f49371262eee3c3f0e515908c34a12844077efe46430151edbce86501982cce95379d25126933693ae2ccec6026f13970153793f97ad553417a987980f",
//             "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//         })
//         .end(function (err, res) {
//             if (err) {
//                 console.log("Error: " + err)
//             }
//             JSON.parse(res.text).error.should.exist;
//             done()
//         });
// });
//     });
// });

// describe('isListening', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isListening with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.*.net/isListening')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

// describe('web3.*.net', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User enter error url on class web3.*.net', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.*.net/importRawKeys')
//                 .set('Authorization', "OBC " + token)
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// web3.utils
// describe('randomHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter randomHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/randomHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "cc80ad0e951d20ac88ac3fd7342638dd",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on randomHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/randomHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('BN', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter BN with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/BN')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "76946785b951aaa28f257e9463b5a6e9",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on BN', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/BN')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('isBN', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isBN with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isBN')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ae1f6500859e1af2d4f95606da9f89a4efaa24e2a3f359ccb80e4a0ab2e1ca0f",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on isBN', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isBN')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('isBigNumber', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isBigNumber with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isBigNumber')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "9b41f34bb2cd32d1c7aad7fb428a6c92",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on isBigNumber', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isBigNumber')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('sha3', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter sha3 with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/sha3')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ee0363179e5c02fc92c4965de85dca24bda25f794cbdd4c7244e36315bd9d2a4",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on sha3', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/sha3')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('isHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "9feeb3b1852bd94e236526ec11cbd7502dda35e098f4c4965a96d44c7e418aa1",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on isHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ab02070f8f4282a8e56709b18ed50598abac30239b519ca69a0b5632c6b5570ba8f732e6886cf488ab4d798bee4601c3921e9192fbc38b64bf8f888a84f6a502",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('isHexStrict', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isHexStrict with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isHexStrict')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "9feeb3b1852bd94e236526ec11cbd7502dda35e098f4c4965a96d44c7e418aa1",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on isHexStrict', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isHexStrict')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('isAddress', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter isAddress with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isAddress')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "1bc019beef1a846b249e5b519a0dfb0c16d646c8b169797bdc24de2f3955548afd256162d7866d9867b6e763559d12ce3d385fdac1ede5d873ffa08dcec3da77",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on isAddress', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/isAddress')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('toChecksumAddress', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter toChecksumAddress with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toChecksumAddress')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "1bc019beef1a846b249e5b519a0dfb0c16d646c8b169797bdc24de2f3955548afd256162d7866d9867b6e763559d12ceaf9a9d7ef4cf983dd8c2e172465c2f1a",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on toChecksumAddress', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toChecksumAddress')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('checkAddressChecksum', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter checkAddressChecksum with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/checkAddressChecksum')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "1bc019beef1a846b249e5b519a0dfb0c5f8cea59de3ce91532c462118e5451c318efd129ea5b05215bcce1300433702b48168bec7337ab498b6aeb1dcd0b830b",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on checkAddressChecksum', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/checkAddressChecksum')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('toHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter toHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "a6755e0763e9e184b82c204a9dfae67a",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on toHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('toBN', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter toBN with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toBN')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "3e6ea6931da2d52c85a23f35458383eedccb34d0d7951c54033b147b3a7e2964",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on toBN', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toBN')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('hexToNumberString', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter hexToNumberString with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToNumberString')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "9feeb3b1852bd94e236526ec11cbd7502dda35e098f4c4965a96d44c7e418aa1",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on hexToNumberString', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToNumberString')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('hexToNumber', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter hexToNumber with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToNumber')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "a040c0de74c492b4e38227b36e8d711f",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on hexToNumber', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToNumber')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('numberToHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter numberToHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/numberToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "573010ffbc0fb533c487b02b55572e7f",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on numberToHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/numberToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('hexToUtf8', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter hexToUtf8 with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToUtf8')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "92e0bf9206be9d92f2c8abb3cc7b9b6035eb7f4329bac94ff6b28b9e321d51ca8672ca6e249a54d160005d486d9dfec8",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on hexToUtf8', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToUtf8')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('hexToAscii', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter hexToAscii with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToAscii')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "92e0bf9206be9d92f2c8abb3cc7b9b6009c4bae0b3d9ed23ea707e2b52e4f6383a487e23737550f1deba43939254f295",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on hexToAscii', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToAscii')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('utf8ToHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter utf8ToHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/utf8ToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "a74e7778168760b5678bff211a98dae74c0efad27e95d99f295adf2f3ddcdbc1",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on utf8ToHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/utf8ToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('asciiToHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter asciiToHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/asciiToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "a74e7778168760b5678bff211a98dae7756f2430829b257b4452bbe8eafb1c40",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on asciiToHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/asciiToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('hexToBytes', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter hexToBytes with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToBytes')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "d987e8545af57bca4eed923227d141f9ee9d652df095ca2cd4ccf1af1ef6e3b7",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on hexToBytes', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/hexToBytes')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('bytesToHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter bytesToHex with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/bytesToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "262dc52aa6aa1f52fb4ee8e754d6c1058bf74a512a554c68b88093479f5f64dfb5f40604f732084098385eda4b10717b",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on bytesToHex', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/bytesToHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('toWei', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter toWei with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toWei')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "708d7c83f8b055e8c5b8e4256a50d9be0ce995e266f5f199ef0c11057f34bd16",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on toWei', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toWei')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('fromWei', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter fromWei with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/fromWei')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "708d7c83f8b055e8c5b8e4256a50d9be0ce995e266f5f199ef0c11057f34bd16",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on fromWei', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/fromWei')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('unitMap', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter unitMap with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/unitMap')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//     });
// });

// describe('padLeft', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter padLeft with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/padLeft')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "01c8284f5272c56acd5776e24962815609491dcdf3d1b469be258ee8f7986df8120848c53bfac3e53568d1d2e759649532d7b53f242ec6308a8eb001cdb10c46",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on padLeft', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/padLeft')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('padRight', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter padRight with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/padRight')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "01c8284f5272c56acd5776e24962815609491dcdf3d1b469be258ee8f7986df8120848c53bfac3e53568d1d2e759649532d7b53f242ec6308a8eb001cdb10c46",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on padRight', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/padRight')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('toTwosComplement', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter toTwosComplement with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toTwosComplement')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "4bde75290de3a47b9b208ee0cc2eb078",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     res.body.result.should.have.property('encrypteddata');
//                     done()
//                 });
//         });
//         it('User have error not enough parameter on toTwosComplement', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/toTwosComplement')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "163128abec98f1e56ce39df4a250eebf",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('web3.utils', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User enter error url on class web3.utils', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/web3.utils/importRawKeys')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "encryptedkey": "sukaHu3eQNOVSYSyiFucQIk9adGdV8W2E5SSjl/ZWxhhtZygjUYCAh+Wr1hr41My8HEF/RKl5X8BqrDekTo8U/9fNs7LsfUbfjLniQMr4lQODTtLqJsLLH2liUT5+RcHFAfrFrGOWGnDXI0R4TOtaDRjOlxXUs1yeOYCtVEmjuk=",
//                     "encrypteddata": "ca356f0c62c140f521c7fdeaa12a22e124c465281732c58df78001c315dc4bf7c0e37c1d1bc2ff65db54e0ffcd0fc208bcccb86ad90411db3b8336066497ed7fa8c56758918d469ffbc0a8b6ecf38c12ff0c48b3ba597e3d53aec5a9af7d39e5e73c9377f08f36b242f34a605e2bc878",
//                     "publickey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHAKueZ3VbziD2lXs3eWwANlnA4KwyJBgx86/mjJ4daj405THZgOwTisbSSlW6ktkrQ/kcwvBTiUAk+BBVX3VPpKxV+7xoScDYx6hFboFP4vUwAI7wbI4v7sv2+tN4AkhU7JAns4owRgJ5Mk/Cuf3m0YGRGS9GfE+CHeEbgd/WkwIDAQAB-----END PUBLIC KEY-----"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     JSON.parse(res.text).error.should.exist;
//                     done()
//                 });
//         });
//     });
// });

// describe('deploySC', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter deploySC with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/contract/deploySC')
//                 .set('Authorization', "OBC " + token)
//                 .send(
//                     {
//                         "address": "0xcE9bfD1C0C1Ba565F9f380342aB1114AD6C40F63",
//                         "privateKey": "0x0a6b69c36770b0e3778f554b3b6e011ecc6645c04d47509d595edb8c79e1cc47",
//                         "argument": ["test", "test 1", "1601520317", "1701520317", ["hmmm"], ["hm22"], ["0x0449859A071F6b654FDe713074728C4FC22F04Fe"]],
//                         "txHashOnly": "true",
//                         "abi": [
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "_voter",
//                                         "type": "string"
//                                     },
//                                     {
//                                         "internalType": "address[]",
//                                         "name": "_optionAddress",
//                                         "type": "address[]"
//                                     }
//                                 ],
//                                 "name": "castVote",
//                                 "outputs": [
//                                     {
//                                         "internalType": "bool",
//                                         "name": "success",
//                                         "type": "bool"
//                                     }
//                                 ],
//                                 "stateMutability": "nonpayable",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "_voteName",
//                                         "type": "string"
//                                     },
//                                     {
//                                         "internalType": "string",
//                                         "name": "_voteDesc",
//                                         "type": "string"
//                                     },
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "_startDate",
//                                         "type": "uint256"
//                                     },
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "_endDate",
//                                         "type": "uint256"
//                                     },
//                                     {
//                                         "internalType": "string[]",
//                                         "name": "_nameOption",
//                                         "type": "string[]"
//                                     },
//                                     {
//                                         "internalType": "string[]",
//                                         "name": "_descOption",
//                                         "type": "string[]"
//                                     },
//                                     {
//                                         "internalType": "address[]",
//                                         "name": "_addOption",
//                                         "type": "address[]"
//                                     }
//                                 ],
//                                 "stateMutability": "nonpayable",
//                                 "type": "constructor"
//                             },
//                             {
//                                 "anonymous": false,
//                                 "inputs": [
//                                     {
//                                         "indexed": false,
//                                         "internalType": "string",
//                                         "name": "message",
//                                         "type": "string"
//                                     }
//                                 ],
//                                 "name": "log",
//                                 "type": "event"
//                             },
//                             {
//                                 "anonymous": false,
//                                 "inputs": [
//                                     {
//                                         "indexed": false,
//                                         "internalType": "address",
//                                         "name": "voter",
//                                         "type": "address"
//                                     }
//                                 ],
//                                 "name": "voterAdded",
//                                 "type": "event"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "name": "candidateAddress",
//                                 "outputs": [
//                                     {
//                                         "internalType": "address",
//                                         "name": "",
//                                         "type": "address"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "name": "candidateDesc",
//                                 "outputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "",
//                                         "type": "string"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "name": "candidateName",
//                                 "outputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "",
//                                         "type": "string"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "address",
//                                         "name": "_optionAddress",
//                                         "type": "address"
//                                     }
//                                 ],
//                                 "name": "countOption",
//                                 "outputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "count_",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [],
//                                 "name": "getCountVoter",
//                                 "outputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "count_",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [],
//                                 "name": "getVoteDetails",
//                                 "outputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "voteName_",
//                                         "type": "string"
//                                     },
//                                     {
//                                         "internalType": "string",
//                                         "name": "voteDesc_",
//                                         "type": "string"
//                                     },
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "startDate_",
//                                         "type": "uint256"
//                                     },
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "endDate_",
//                                         "type": "uint256"
//                                     },
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "time_",
//                                         "type": "uint256"
//                                     },
//                                     {
//                                         "internalType": "string[]",
//                                         "name": "optionName_",
//                                         "type": "string[]"
//                                     },
//                                     {
//                                         "internalType": "string[]",
//                                         "name": "optionDesc_",
//                                         "type": "string[]"
//                                     },
//                                     {
//                                         "internalType": "address[]",
//                                         "name": "optionAddress_",
//                                         "type": "address[]"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [],
//                                 "name": "getVoterList",
//                                 "outputs": [
//                                     {
//                                         "internalType": "string[]",
//                                         "name": "_voters",
//                                         "type": "string[]"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "_voter",
//                                         "type": "string"
//                                     }
//                                 ],
//                                 "name": "getVoterStatus",
//                                 "outputs": [
//                                     {
//                                         "internalType": "bool",
//                                         "name": "voted_",
//                                         "type": "bool"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [],
//                                 "name": "numOption",
//                                 "outputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [],
//                                 "name": "numVoter",
//                                 "outputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [],
//                                 "name": "owner",
//                                 "outputs": [
//                                     {
//                                         "internalType": "address",
//                                         "name": "",
//                                         "type": "address"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             },
//                             {
//                                 "inputs": [
//                                     {
//                                         "internalType": "uint256",
//                                         "name": "",
//                                         "type": "uint256"
//                                     }
//                                 ],
//                                 "name": "voterMail",
//                                 "outputs": [
//                                     {
//                                         "internalType": "string",
//                                         "name": "",
//                                         "type": "string"
//                                     }
//                                 ],
//                                 "stateMutability": "view",
//                                 "type": "function"
//                             }
//                         ],
//                         "bytecode": "60806040523480156200001157600080fd5b5060405162001e5438038062001e54833981810160405281019062000037919062000675565b866000800190805190602001906200005192919062000432565b5085600060010190805190602001906200006d92919062000432565b50846000600201819055508360006003018190555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008090505b815181101562000424576060825167ffffffffffffffff81118015620000ee57600080fd5b506040519080825280602002602001820160405280156200011e5781602001602082028036833780820191505090505b5090506040518060a00160405280600f5481526020018484815181106200014157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1681526020018684815181106200017157fe5b602002602001015181526020018584815181106200018b57fe5b60200260200101518152602001600081525060116000858581518110620001ae57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906200025f92919062000432565b5060608201518160030190805190602001906200027e92919062000432565b50608082015181600401559050508282815181106200029957fe5b6020026020010151818381518110620002ae57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600b838381518110620002f757fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600c8583815181106200036e57fe5b6020026020010151908060018154018082558091505060019003906000526020600020016000909190919091509080519060200190620003b092919062000432565b50600d848381518110620003c057fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906200040292919062000432565b50600f60008154809291906001019190505550508080600101915050620000c9565b5050505050505050620008f4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200047557805160ff1916838001178555620004a6565b82800160010185558215620004a6579182015b82811115620004a557825182559160200191906001019062000488565b5b509050620004b59190620004b9565b5090565b620004de91905b80821115620004da576000816000905550600101620004c0565b5090565b90565b600081519050620004f281620008c0565b92915050565b600082601f8301126200050a57600080fd5b8151620005216200051b82620007cd565b6200079f565b915081818352602084019350602081019050838560208402820111156200054757600080fd5b60005b838110156200057b5781620005608882620004e1565b8452602084019350602083019250506001810190506200054a565b5050505092915050565b600082601f8301126200059757600080fd5b8151620005ae620005a882620007f6565b6200079f565b9150818183526020840193506020810190508360005b83811015620005f85781518601620005dd888262000602565b845260208401935060208301925050600181019050620005c4565b5050505092915050565b600082601f8301126200061457600080fd5b81516200062b62000625826200081f565b6200079f565b915080825260208301602083018583830111156200064857600080fd5b620006558382846200088a565b50505092915050565b6000815190506200066f81620008da565b92915050565b600080600080600080600060e0888a0312156200069157600080fd5b600088015167ffffffffffffffff811115620006ac57600080fd5b620006ba8a828b0162000602565b975050602088015167ffffffffffffffff811115620006d857600080fd5b620006e68a828b0162000602565b9650506040620006f98a828b016200065e565b95505060606200070c8a828b016200065e565b945050608088015167ffffffffffffffff8111156200072a57600080fd5b620007388a828b0162000585565b93505060a088015167ffffffffffffffff8111156200075657600080fd5b620007648a828b0162000585565b92505060c088015167ffffffffffffffff8111156200078257600080fd5b620007908a828b01620004f8565b91505092959891949750929550565b6000604051905081810181811067ffffffffffffffff82111715620007c357600080fd5b8060405250919050565b600067ffffffffffffffff821115620007e557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200080e57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200083757600080fd5b601f19601f8301169050602081019050919050565b6000620008598262000860565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620008aa5780820151818401526020810190506200088d565b83811115620008ba576000848401525b50505050565b620008cb816200084c565b8114620008d757600080fd5b50565b620008e58162000880565b8114620008f157600080fd5b50565b61155080620009046000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636fb26c4a1161008c578063aaebeffc11610066578063aaebeffc14610243578063aef2c9fe14610273578063b28d92ae146102a3578063f10ba0fe146102c1576100cf565b80636fb26c4a146101d75780638da5cb5b146101f5578063a2a8d2ae14610213576100cf565b80630fb37509146100d4578063134c39cc14610104578063281995051461012957806330006281146101475780633a88251a146101775780636d7f9724146101a7575b600080fd5b6100ee60048036038101906100e99190610ea6565b6102df565b6040516100fb91906111ed565b60405180910390f35b61010c6104bd565b60405161012098979695949392919061122a565b60405180910390f35b610131610886565b60405161013e919061130b565b60405180910390f35b610161600480360381019061015c9190610f12565b61088c565b60405161016e9190611208565b60405180910390f35b610191600480360381019061018c9190610f12565b610945565b60405161019e91906111b0565b60405180910390f35b6101c160048036038101906101bc9190610f12565b610981565b6040516101ce9190611208565b60405180910390f35b6101df610a3a565b6040516101ec919061130b565b60405180910390f35b6101fd610a40565b60405161020a91906111b0565b60405180910390f35b61022d60048036038101906102289190610e65565b610a66565b60405161023a91906111ed565b60405180910390f35b61025d60048036038101906102589190610f12565b610a9e565b60405161026a9190611208565b60405180910390f35b61028d60048036038101906102889190610e3c565b610b57565b60405161029a919061130b565b60405180910390f35b6102ab610ba3565b6040516102b891906111cb565b60405180910390f35b6102c9610c8c565b6040516102d6919061130b565b60405180910390f35b60008060020154421180156102f8575060006003015442105b80156103365750600015156012846040516103139190611199565b908152602001604051809103902060000160009054906101000a900460ff161515145b610375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036c906112cb565b60405180910390fd5b60106000815480929190600101919050555060016012846040516103999190611199565b908152602001604051809103902060000160006101000a81548160ff021916908315150217905550600e839080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906103fc929190610c96565b5060008090505b825181101561047d5760016011600085848151811061041e57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600082825401925050819055508080600101915050610403565b507f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516104ab906112eb565b60405180910390a16001905092915050565b6060806000806000606080606060008001600060010160006002015460006003015442600c600d600b878054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057b5780601f106105505761010080835404028352916020019161057b565b820191906000526020600020905b81548152906001019060200180831161055e57829003601f168201915b50505050509750868054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106175780601f106105ec57610100808354040283529160200191610617565b820191906000526020600020905b8154815290600101906020018083116105fa57829003601f168201915b5050505050965082805480602002602001604051908101604052809291908181526020016000905b828210156106fb578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b50505050508152602001906001019061063f565b50505050925081805480602002602001604051908101604052809291908181526020016000905b828210156107de578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b505050505081526020019060010190610722565b5050505091508080548060200260200160405190810160405280929190818152602001828054801561086557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161081b575b50505050509050975097509750975097509750975097509091929394959697565b600f5481565b600c818154811061089957fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561093d5780601f106109125761010080835404028352916020019161093d565b820191906000526020600020905b81548152906001019060200180831161092057829003601f168201915b505050505081565b600b818154811061095257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d818154811061098e57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a325780601f10610a0757610100808354040283529160200191610a32565b820191906000526020600020905b815481529060010190602001808311610a1557829003601f168201915b505050505081565b60105481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000601282604051610a789190611199565b908152602001604051809103902060000160009054906101000a900460ff169050919050565b600e8181548110610aab57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b4f5780601f10610b2457610100808354040283529160200191610b4f565b820191906000526020600020905b815481529060010190602001808311610b3257829003601f168201915b505050505081565b6000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401549050919050565b6060600e805480602002602001604051908101604052809291908181526020016000905b82821015610c83578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c6f5780601f10610c4457610100808354040283529160200191610c6f565b820191906000526020600020905b815481529060010190602001808311610c5257829003601f168201915b505050505081526020019060010190610bc7565b50505050905090565b6000601054905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610cd757805160ff1916838001178555610d05565b82800160010185558215610d05579182015b82811115610d04578251825591602001919060010190610ce9565b5b509050610d129190610d16565b5090565b610d3891905b80821115610d34576000816000905550600101610d1c565b5090565b90565b600081359050610d4a816114ec565b92915050565b600082601f830112610d6157600080fd5b8135610d74610d6f82611353565b611326565b91508181835260208401935060208101905083856020840282011115610d9957600080fd5b60005b83811015610dc95781610daf8882610d3b565b845260208401935060208301925050600181019050610d9c565b5050505092915050565b600082601f830112610de457600080fd5b8135610df7610df28261137b565b611326565b91508082526020830160208301858383011115610e1357600080fd5b610e1e838284611499565b50505092915050565b600081359050610e3681611503565b92915050565b600060208284031215610e4e57600080fd5b6000610e5c84828501610d3b565b91505092915050565b600060208284031215610e7757600080fd5b600082013567ffffffffffffffff811115610e9157600080fd5b610e9d84828501610dd3565b91505092915050565b60008060408385031215610eb957600080fd5b600083013567ffffffffffffffff811115610ed357600080fd5b610edf85828601610dd3565b925050602083013567ffffffffffffffff811115610efc57600080fd5b610f0885828601610d50565b9150509250929050565b600060208284031215610f2457600080fd5b6000610f3284828501610e27565b91505092915050565b6000610f478383610f67565b60208301905092915050565b6000610f5f8383611067565b905092915050565b610f7081611451565b82525050565b610f7f81611451565b82525050565b6000610f90826113c7565b610f9a8185611402565b9350610fa5836113a7565b8060005b83811015610fd6578151610fbd8882610f3b565b9750610fc8836113e8565b925050600181019050610fa9565b5085935050505092915050565b6000610fee826113d2565b610ff88185611413565b93508360208202850161100a856113b7565b8060005b8581101561104657848403895281516110278582610f53565b9450611032836113f5565b925060208a0199505060018101905061100e565b50829750879550505050505092915050565b61106181611463565b82525050565b6000611072826113dd565b61107c8185611424565b935061108c8185602086016114a8565b611095816114db565b840191505092915050565b60006110ab826113dd565b6110b58185611435565b93506110c58185602086016114a8565b6110ce816114db565b840191505092915050565b60006110e4826113dd565b6110ee8185611446565b93506110fe8185602086016114a8565b80840191505092915050565b6000611117601383611435565b91507f496e76616c6964206461746520696e70757421000000000000000000000000006000830152602082019050919050565b6000611157600a83611435565b91507f446f6e6520766f746521000000000000000000000000000000000000000000006000830152602082019050919050565b6111938161148f565b82525050565b60006111a582846110d9565b915081905092915050565b60006020820190506111c56000830184610f76565b92915050565b600060208201905081810360008301526111e58184610fe3565b905092915050565b60006020820190506112026000830184611058565b92915050565b6000602082019050818103600083015261122281846110a0565b905092915050565b6000610100820190508181036000830152611245818b6110a0565b90508181036020830152611259818a6110a0565b9050611268604083018961118a565b611275606083018861118a565b611282608083018761118a565b81810360a08301526112948186610fe3565b905081810360c08301526112a88185610fe3565b905081810360e08301526112bc8184610f85565b90509998505050505050505050565b600060208201905081810360008301526112e48161110a565b9050919050565b600060208201905081810360008301526113048161114a565b9050919050565b6000602082019050611320600083018461118a565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561134957600080fd5b8060405250919050565b600067ffffffffffffffff82111561136a57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561139257600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061145c8261146f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156114c65780820151818401526020810190506114ab565b838111156114d5576000848401525b50505050565b6000601f19601f8301169050919050565b6114f581611451565b811461150057600080fd5b50565b61150c8161148f565b811461151757600080fd5b5056fea2646970667358221220d59954f17c474cfe8b5d302880e1ce60305e6e39db549508116a1d8f28a6dd3064736f6c63430006060033"
//                     }
//                 )
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

// describe('deploySCHex', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter deploySC with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/contract/deploySCHex')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "txHashOnly": "true",
//                     "serializedTx": "f921478214c70386082f79cd90008080b920f460806040523480156200001157600080fd5b5060405162001e5438038062001e54833981810160405281019062000037919062000675565b866000800190805190602001906200005192919062000432565b5085600060010190805190602001906200006d92919062000432565b50846000600201819055508360006003018190555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008090505b815181101562000424576060825167ffffffffffffffff81118015620000ee57600080fd5b506040519080825280602002602001820160405280156200011e5781602001602082028036833780820191505090505b5090506040518060a00160405280600f5481526020018484815181106200014157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1681526020018684815181106200017157fe5b602002602001015181526020018584815181106200018b57fe5b60200260200101518152602001600081525060116000858581518110620001ae57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906200025f92919062000432565b5060608201518160030190805190602001906200027e92919062000432565b50608082015181600401559050508282815181106200029957fe5b6020026020010151818381518110620002ae57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600b838381518110620002f757fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600c8583815181106200036e57fe5b6020026020010151908060018154018082558091505060019003906000526020600020016000909190919091509080519060200190620003b092919062000432565b50600d848381518110620003c057fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906200040292919062000432565b50600f60008154809291906001019190505550508080600101915050620000c9565b5050505050505050620008f4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200047557805160ff1916838001178555620004a6565b82800160010185558215620004a6579182015b82811115620004a557825182559160200191906001019062000488565b5b509050620004b59190620004b9565b5090565b620004de91905b80821115620004da576000816000905550600101620004c0565b5090565b90565b600081519050620004f281620008c0565b92915050565b600082601f8301126200050a57600080fd5b8151620005216200051b82620007cd565b6200079f565b915081818352602084019350602081019050838560208402820111156200054757600080fd5b60005b838110156200057b5781620005608882620004e1565b8452602084019350602083019250506001810190506200054a565b5050505092915050565b600082601f8301126200059757600080fd5b8151620005ae620005a882620007f6565b6200079f565b9150818183526020840193506020810190508360005b83811015620005f85781518601620005dd888262000602565b845260208401935060208301925050600181019050620005c4565b5050505092915050565b600082601f8301126200061457600080fd5b81516200062b62000625826200081f565b6200079f565b915080825260208301602083018583830111156200064857600080fd5b620006558382846200088a565b50505092915050565b6000815190506200066f81620008da565b92915050565b600080600080600080600060e0888a0312156200069157600080fd5b600088015167ffffffffffffffff811115620006ac57600080fd5b620006ba8a828b0162000602565b975050602088015167ffffffffffffffff811115620006d857600080fd5b620006e68a828b0162000602565b9650506040620006f98a828b016200065e565b95505060606200070c8a828b016200065e565b945050608088015167ffffffffffffffff8111156200072a57600080fd5b620007388a828b0162000585565b93505060a088015167ffffffffffffffff8111156200075657600080fd5b620007648a828b0162000585565b92505060c088015167ffffffffffffffff8111156200078257600080fd5b620007908a828b01620004f8565b91505092959891949750929550565b6000604051905081810181811067ffffffffffffffff82111715620007c357600080fd5b8060405250919050565b600067ffffffffffffffff821115620007e557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200080e57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200083757600080fd5b601f19601f8301169050602081019050919050565b6000620008598262000860565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620008aa5780820151818401526020810190506200088d565b83811115620008ba576000848401525b50505050565b620008cb816200084c565b8114620008d757600080fd5b50565b620008e58162000880565b8114620008f157600080fd5b50565b61155080620009046000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636fb26c4a1161008c578063aaebeffc11610066578063aaebeffc14610243578063aef2c9fe14610273578063b28d92ae146102a3578063f10ba0fe146102c1576100cf565b80636fb26c4a146101d75780638da5cb5b146101f5578063a2a8d2ae14610213576100cf565b80630fb37509146100d4578063134c39cc14610104578063281995051461012957806330006281146101475780633a88251a146101775780636d7f9724146101a7575b600080fd5b6100ee60048036038101906100e99190610ea6565b6102df565b6040516100fb91906111ed565b60405180910390f35b61010c6104bd565b60405161012098979695949392919061122a565b60405180910390f35b610131610886565b60405161013e919061130b565b60405180910390f35b610161600480360381019061015c9190610f12565b61088c565b60405161016e9190611208565b60405180910390f35b610191600480360381019061018c9190610f12565b610945565b60405161019e91906111b0565b60405180910390f35b6101c160048036038101906101bc9190610f12565b610981565b6040516101ce9190611208565b60405180910390f35b6101df610a3a565b6040516101ec919061130b565b60405180910390f35b6101fd610a40565b60405161020a91906111b0565b60405180910390f35b61022d60048036038101906102289190610e65565b610a66565b60405161023a91906111ed565b60405180910390f35b61025d60048036038101906102589190610f12565b610a9e565b60405161026a9190611208565b60405180910390f35b61028d60048036038101906102889190610e3c565b610b57565b60405161029a919061130b565b60405180910390f35b6102ab610ba3565b6040516102b891906111cb565b60405180910390f35b6102c9610c8c565b6040516102d6919061130b565b60405180910390f35b60008060020154421180156102f8575060006003015442105b80156103365750600015156012846040516103139190611199565b908152602001604051809103902060000160009054906101000a900460ff161515145b610375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036c906112cb565b60405180910390fd5b60106000815480929190600101919050555060016012846040516103999190611199565b908152602001604051809103902060000160006101000a81548160ff021916908315150217905550600e839080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906103fc929190610c96565b5060008090505b825181101561047d5760016011600085848151811061041e57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600082825401925050819055508080600101915050610403565b507f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516104ab906112eb565b60405180910390a16001905092915050565b6060806000806000606080606060008001600060010160006002015460006003015442600c600d600b878054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057b5780601f106105505761010080835404028352916020019161057b565b820191906000526020600020905b81548152906001019060200180831161055e57829003601f168201915b50505050509750868054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106175780601f106105ec57610100808354040283529160200191610617565b820191906000526020600020905b8154815290600101906020018083116105fa57829003601f168201915b5050505050965082805480602002602001604051908101604052809291908181526020016000905b828210156106fb578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b50505050508152602001906001019061063f565b50505050925081805480602002602001604051908101604052809291908181526020016000905b828210156107de578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b505050505081526020019060010190610722565b5050505091508080548060200260200160405190810160405280929190818152602001828054801561086557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161081b575b50505050509050975097509750975097509750975097509091929394959697565b600f5481565b600c818154811061089957fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561093d5780601f106109125761010080835404028352916020019161093d565b820191906000526020600020905b81548152906001019060200180831161092057829003601f168201915b505050505081565b600b818154811061095257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d818154811061098e57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a325780601f10610a0757610100808354040283529160200191610a32565b820191906000526020600020905b815481529060010190602001808311610a1557829003601f168201915b505050505081565b60105481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000601282604051610a789190611199565b908152602001604051809103902060000160009054906101000a900460ff169050919050565b600e8181548110610aab57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b4f5780601f10610b2457610100808354040283529160200191610b4f565b820191906000526020600020905b815481529060010190602001808311610b3257829003601f168201915b505050505081565b6000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401549050919050565b6060600e805480602002602001604051908101604052809291908181526020016000905b82821015610c83578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c6f5780601f10610c4457610100808354040283529160200191610c6f565b820191906000526020600020905b815481529060010190602001808311610c5257829003601f168201915b505050505081526020019060010190610bc7565b50505050905090565b6000601054905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610cd757805160ff1916838001178555610d05565b82800160010185558215610d05579182015b82811115610d04578251825591602001919060010190610ce9565b5b509050610d129190610d16565b5090565b610d3891905b80821115610d34576000816000905550600101610d1c565b5090565b90565b600081359050610d4a816114ec565b92915050565b600082601f830112610d6157600080fd5b8135610d74610d6f82611353565b611326565b91508181835260208401935060208101905083856020840282011115610d9957600080fd5b60005b83811015610dc95781610daf8882610d3b565b845260208401935060208301925050600181019050610d9c565b5050505092915050565b600082601f830112610de457600080fd5b8135610df7610df28261137b565b611326565b91508082526020830160208301858383011115610e1357600080fd5b610e1e838284611499565b50505092915050565b600081359050610e3681611503565b92915050565b600060208284031215610e4e57600080fd5b6000610e5c84828501610d3b565b91505092915050565b600060208284031215610e7757600080fd5b600082013567ffffffffffffffff811115610e9157600080fd5b610e9d84828501610dd3565b91505092915050565b60008060408385031215610eb957600080fd5b600083013567ffffffffffffffff811115610ed357600080fd5b610edf85828601610dd3565b925050602083013567ffffffffffffffff811115610efc57600080fd5b610f0885828601610d50565b9150509250929050565b600060208284031215610f2457600080fd5b6000610f3284828501610e27565b91505092915050565b6000610f478383610f67565b60208301905092915050565b6000610f5f8383611067565b905092915050565b610f7081611451565b82525050565b610f7f81611451565b82525050565b6000610f90826113c7565b610f9a8185611402565b9350610fa5836113a7565b8060005b83811015610fd6578151610fbd8882610f3b565b9750610fc8836113e8565b925050600181019050610fa9565b5085935050505092915050565b6000610fee826113d2565b610ff88185611413565b93508360208202850161100a856113b7565b8060005b8581101561104657848403895281516110278582610f53565b9450611032836113f5565b925060208a0199505060018101905061100e565b50829750879550505050505092915050565b61106181611463565b82525050565b6000611072826113dd565b61107c8185611424565b935061108c8185602086016114a8565b611095816114db565b840191505092915050565b60006110ab826113dd565b6110b58185611435565b93506110c58185602086016114a8565b6110ce816114db565b840191505092915050565b60006110e4826113dd565b6110ee8185611446565b93506110fe8185602086016114a8565b80840191505092915050565b6000611117601383611435565b91507f496e76616c6964206461746520696e70757421000000000000000000000000006000830152602082019050919050565b6000611157600a83611435565b91507f446f6e6520766f746521000000000000000000000000000000000000000000006000830152602082019050919050565b6111938161148f565b82525050565b60006111a582846110d9565b915081905092915050565b60006020820190506111c56000830184610f76565b92915050565b600060208201905081810360008301526111e58184610fe3565b905092915050565b60006020820190506112026000830184611058565b92915050565b6000602082019050818103600083015261122281846110a0565b905092915050565b6000610100820190508181036000830152611245818b6110a0565b90508181036020830152611259818a6110a0565b9050611268604083018961118a565b611275606083018861118a565b611282608083018761118a565b81810360a08301526112948186610fe3565b905081810360c08301526112a88185610fe3565b905081810360e08301526112bc8184610f85565b90509998505050505050505050565b600060208201905081810360008301526112e48161110a565b9050919050565b600060208201905081810360008301526113048161114a565b9050919050565b6000602082019050611320600083018461118a565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561134957600080fd5b8060405250919050565b600067ffffffffffffffff82111561136a57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561139257600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061145c8261146f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156114c65780820151818401526020810190506114ab565b838111156114d5576000848401525b50505050565b6000601f19601f8301169050919050565b6114f581611451565b811461150057600080fd5b50565b61150c8161148f565b811461151757600080fd5b5056fea2646970667358221220d59954f17c474cfe8b5d302880e1ce60305e6e39db549508116a1d8f28a6dd3064736f6c6343000606003300000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000005f7542bd00000000000000000000000000000000000000000000000000000000656b23bd000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002600000000000000000000000000000000000000000000000000000000000000004746573740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000067465737420310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004686d6d6d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004686d32320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000449859a071f6b654fde713074728c4fc22f04fe1ca0e07e59cb90fb6943118dcb26fd08ac7b1f3f14a128b52009aebb0853409facaba01cdbdf6a4b968e670a25cab972a861213483db870462cc6313c3f7a03a7856f7"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

// describe('callSC', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter deploySC with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/contract/callSC')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "contractAddress": "0x3A758280ee8Dc0Ecb5A5C811AF9A001983DC4079",
//                     "method": "getVoteDetails",
//                     "param": [],
//                     "abi": [
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_optionAddress",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "name": "castVote",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "success",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteName",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteDesc",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_startDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_endDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_nameOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_descOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_addOption",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "constructor"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "string",
//                                 "name": "message",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "log",
//                         "type": "event"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "address",
//                                 "name": "voter",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "voterAdded",
//                         "type": "event"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateAddress",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateDesc",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateName",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "_optionAddress",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "countOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getCountVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoteDetails",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "voteName_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "voteDesc_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "startDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "endDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "time_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionName_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionDesc_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "optionAddress_",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoterList",
//                         "outputs": [
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_voters",
//                                 "type": "string[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "getVoterStatus",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "voted_",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "owner",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "voterMail",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     }
//                 ]
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

// describe('sendSC', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter deploySC with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/contract/sendSC')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "address": "0xcE9bfD1C0C1Ba565F9f380342aB1114AD6C40F63",
//                     "privateKey": "0x0a6b69c36770b0e3778f554b3b6e011ecc6645c04d47509d595edb8c79e1cc47",
//                     "contractAddress": "0x71D8FBFBD8511560dC10c681F7Aa241C32D4119a",
//                     "method": "castVote",
//                     "txHashOnly": "true",
//                     "param": ["Ahmad Albab",["0x0449859A071F6b654FDe713074728C4FC22F04Fe"]],
//                     "abi": [
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_optionAddress",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "name": "castVote",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "success",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteName",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteDesc",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_startDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_endDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_nameOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_descOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_addOption",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "constructor"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "string",
//                                 "name": "message",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "log",
//                         "type": "event"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "address",
//                                 "name": "voter",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "voterAdded",
//                         "type": "event"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateAddress",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateDesc",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateName",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "_optionAddress",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "countOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getCountVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoteDetails",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "voteName_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "voteDesc_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "startDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "endDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "time_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionName_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionDesc_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "optionAddress_",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoterList",
//                         "outputs": [
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_voters",
//                                 "type": "string[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "getVoterStatus",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "voted_",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "owner",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "voterMail",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     }
//                 ]
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

// describe('encodeABISC', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter deploySC with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/contract/encodeABISC')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "argument": ["test", "test 1", "1601520317", "1701520317", ["hmmm"], ["hm22"],["0x0449859A071F6b654FDe713074728C4FC22F04Fe"]],
//                     "abi" : [
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_optionAddress",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "name": "castVote",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "success",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteName",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteDesc",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_startDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_endDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_nameOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_descOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_addOption",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "constructor"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "string",
//                                 "name": "message",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "log",
//                         "type": "event"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "address",
//                                 "name": "voter",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "voterAdded",
//                         "type": "event"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateAddress",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateDesc",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateName",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "_optionAddress",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "countOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getCountVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoteDetails",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "voteName_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "voteDesc_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "startDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "endDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "time_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionName_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionDesc_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "optionAddress_",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoterList",
//                         "outputs": [
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_voters",
//                                 "type": "string[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "getVoterStatus",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "voted_",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "owner",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "voterMail",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     }
//                 ],
//                     "bytecode" : "60806040523480156200001157600080fd5b5060405162001e5438038062001e54833981810160405281019062000037919062000675565b866000800190805190602001906200005192919062000432565b5085600060010190805190602001906200006d92919062000432565b50846000600201819055508360006003018190555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008090505b815181101562000424576060825167ffffffffffffffff81118015620000ee57600080fd5b506040519080825280602002602001820160405280156200011e5781602001602082028036833780820191505090505b5090506040518060a00160405280600f5481526020018484815181106200014157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1681526020018684815181106200017157fe5b602002602001015181526020018584815181106200018b57fe5b60200260200101518152602001600081525060116000858581518110620001ae57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906200025f92919062000432565b5060608201518160030190805190602001906200027e92919062000432565b50608082015181600401559050508282815181106200029957fe5b6020026020010151818381518110620002ae57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600b838381518110620002f757fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600c8583815181106200036e57fe5b6020026020010151908060018154018082558091505060019003906000526020600020016000909190919091509080519060200190620003b092919062000432565b50600d848381518110620003c057fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906200040292919062000432565b50600f60008154809291906001019190505550508080600101915050620000c9565b5050505050505050620008f4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200047557805160ff1916838001178555620004a6565b82800160010185558215620004a6579182015b82811115620004a557825182559160200191906001019062000488565b5b509050620004b59190620004b9565b5090565b620004de91905b80821115620004da576000816000905550600101620004c0565b5090565b90565b600081519050620004f281620008c0565b92915050565b600082601f8301126200050a57600080fd5b8151620005216200051b82620007cd565b6200079f565b915081818352602084019350602081019050838560208402820111156200054757600080fd5b60005b838110156200057b5781620005608882620004e1565b8452602084019350602083019250506001810190506200054a565b5050505092915050565b600082601f8301126200059757600080fd5b8151620005ae620005a882620007f6565b6200079f565b9150818183526020840193506020810190508360005b83811015620005f85781518601620005dd888262000602565b845260208401935060208301925050600181019050620005c4565b5050505092915050565b600082601f8301126200061457600080fd5b81516200062b62000625826200081f565b6200079f565b915080825260208301602083018583830111156200064857600080fd5b620006558382846200088a565b50505092915050565b6000815190506200066f81620008da565b92915050565b600080600080600080600060e0888a0312156200069157600080fd5b600088015167ffffffffffffffff811115620006ac57600080fd5b620006ba8a828b0162000602565b975050602088015167ffffffffffffffff811115620006d857600080fd5b620006e68a828b0162000602565b9650506040620006f98a828b016200065e565b95505060606200070c8a828b016200065e565b945050608088015167ffffffffffffffff8111156200072a57600080fd5b620007388a828b0162000585565b93505060a088015167ffffffffffffffff8111156200075657600080fd5b620007648a828b0162000585565b92505060c088015167ffffffffffffffff8111156200078257600080fd5b620007908a828b01620004f8565b91505092959891949750929550565b6000604051905081810181811067ffffffffffffffff82111715620007c357600080fd5b8060405250919050565b600067ffffffffffffffff821115620007e557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200080e57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200083757600080fd5b601f19601f8301169050602081019050919050565b6000620008598262000860565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620008aa5780820151818401526020810190506200088d565b83811115620008ba576000848401525b50505050565b620008cb816200084c565b8114620008d757600080fd5b50565b620008e58162000880565b8114620008f157600080fd5b50565b61155080620009046000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636fb26c4a1161008c578063aaebeffc11610066578063aaebeffc14610243578063aef2c9fe14610273578063b28d92ae146102a3578063f10ba0fe146102c1576100cf565b80636fb26c4a146101d75780638da5cb5b146101f5578063a2a8d2ae14610213576100cf565b80630fb37509146100d4578063134c39cc14610104578063281995051461012957806330006281146101475780633a88251a146101775780636d7f9724146101a7575b600080fd5b6100ee60048036038101906100e99190610ea6565b6102df565b6040516100fb91906111ed565b60405180910390f35b61010c6104bd565b60405161012098979695949392919061122a565b60405180910390f35b610131610886565b60405161013e919061130b565b60405180910390f35b610161600480360381019061015c9190610f12565b61088c565b60405161016e9190611208565b60405180910390f35b610191600480360381019061018c9190610f12565b610945565b60405161019e91906111b0565b60405180910390f35b6101c160048036038101906101bc9190610f12565b610981565b6040516101ce9190611208565b60405180910390f35b6101df610a3a565b6040516101ec919061130b565b60405180910390f35b6101fd610a40565b60405161020a91906111b0565b60405180910390f35b61022d60048036038101906102289190610e65565b610a66565b60405161023a91906111ed565b60405180910390f35b61025d60048036038101906102589190610f12565b610a9e565b60405161026a9190611208565b60405180910390f35b61028d60048036038101906102889190610e3c565b610b57565b60405161029a919061130b565b60405180910390f35b6102ab610ba3565b6040516102b891906111cb565b60405180910390f35b6102c9610c8c565b6040516102d6919061130b565b60405180910390f35b60008060020154421180156102f8575060006003015442105b80156103365750600015156012846040516103139190611199565b908152602001604051809103902060000160009054906101000a900460ff161515145b610375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036c906112cb565b60405180910390fd5b60106000815480929190600101919050555060016012846040516103999190611199565b908152602001604051809103902060000160006101000a81548160ff021916908315150217905550600e839080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906103fc929190610c96565b5060008090505b825181101561047d5760016011600085848151811061041e57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600082825401925050819055508080600101915050610403565b507f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516104ab906112eb565b60405180910390a16001905092915050565b6060806000806000606080606060008001600060010160006002015460006003015442600c600d600b878054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057b5780601f106105505761010080835404028352916020019161057b565b820191906000526020600020905b81548152906001019060200180831161055e57829003601f168201915b50505050509750868054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106175780601f106105ec57610100808354040283529160200191610617565b820191906000526020600020905b8154815290600101906020018083116105fa57829003601f168201915b5050505050965082805480602002602001604051908101604052809291908181526020016000905b828210156106fb578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b50505050508152602001906001019061063f565b50505050925081805480602002602001604051908101604052809291908181526020016000905b828210156107de578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b505050505081526020019060010190610722565b5050505091508080548060200260200160405190810160405280929190818152602001828054801561086557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161081b575b50505050509050975097509750975097509750975097509091929394959697565b600f5481565b600c818154811061089957fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561093d5780601f106109125761010080835404028352916020019161093d565b820191906000526020600020905b81548152906001019060200180831161092057829003601f168201915b505050505081565b600b818154811061095257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d818154811061098e57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a325780601f10610a0757610100808354040283529160200191610a32565b820191906000526020600020905b815481529060010190602001808311610a1557829003601f168201915b505050505081565b60105481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000601282604051610a789190611199565b908152602001604051809103902060000160009054906101000a900460ff169050919050565b600e8181548110610aab57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b4f5780601f10610b2457610100808354040283529160200191610b4f565b820191906000526020600020905b815481529060010190602001808311610b3257829003601f168201915b505050505081565b6000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401549050919050565b6060600e805480602002602001604051908101604052809291908181526020016000905b82821015610c83578382906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c6f5780601f10610c4457610100808354040283529160200191610c6f565b820191906000526020600020905b815481529060010190602001808311610c5257829003601f168201915b505050505081526020019060010190610bc7565b50505050905090565b6000601054905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610cd757805160ff1916838001178555610d05565b82800160010185558215610d05579182015b82811115610d04578251825591602001919060010190610ce9565b5b509050610d129190610d16565b5090565b610d3891905b80821115610d34576000816000905550600101610d1c565b5090565b90565b600081359050610d4a816114ec565b92915050565b600082601f830112610d6157600080fd5b8135610d74610d6f82611353565b611326565b91508181835260208401935060208101905083856020840282011115610d9957600080fd5b60005b83811015610dc95781610daf8882610d3b565b845260208401935060208301925050600181019050610d9c565b5050505092915050565b600082601f830112610de457600080fd5b8135610df7610df28261137b565b611326565b91508082526020830160208301858383011115610e1357600080fd5b610e1e838284611499565b50505092915050565b600081359050610e3681611503565b92915050565b600060208284031215610e4e57600080fd5b6000610e5c84828501610d3b565b91505092915050565b600060208284031215610e7757600080fd5b600082013567ffffffffffffffff811115610e9157600080fd5b610e9d84828501610dd3565b91505092915050565b60008060408385031215610eb957600080fd5b600083013567ffffffffffffffff811115610ed357600080fd5b610edf85828601610dd3565b925050602083013567ffffffffffffffff811115610efc57600080fd5b610f0885828601610d50565b9150509250929050565b600060208284031215610f2457600080fd5b6000610f3284828501610e27565b91505092915050565b6000610f478383610f67565b60208301905092915050565b6000610f5f8383611067565b905092915050565b610f7081611451565b82525050565b610f7f81611451565b82525050565b6000610f90826113c7565b610f9a8185611402565b9350610fa5836113a7565b8060005b83811015610fd6578151610fbd8882610f3b565b9750610fc8836113e8565b925050600181019050610fa9565b5085935050505092915050565b6000610fee826113d2565b610ff88185611413565b93508360208202850161100a856113b7565b8060005b8581101561104657848403895281516110278582610f53565b9450611032836113f5565b925060208a0199505060018101905061100e565b50829750879550505050505092915050565b61106181611463565b82525050565b6000611072826113dd565b61107c8185611424565b935061108c8185602086016114a8565b611095816114db565b840191505092915050565b60006110ab826113dd565b6110b58185611435565b93506110c58185602086016114a8565b6110ce816114db565b840191505092915050565b60006110e4826113dd565b6110ee8185611446565b93506110fe8185602086016114a8565b80840191505092915050565b6000611117601383611435565b91507f496e76616c6964206461746520696e70757421000000000000000000000000006000830152602082019050919050565b6000611157600a83611435565b91507f446f6e6520766f746521000000000000000000000000000000000000000000006000830152602082019050919050565b6111938161148f565b82525050565b60006111a582846110d9565b915081905092915050565b60006020820190506111c56000830184610f76565b92915050565b600060208201905081810360008301526111e58184610fe3565b905092915050565b60006020820190506112026000830184611058565b92915050565b6000602082019050818103600083015261122281846110a0565b905092915050565b6000610100820190508181036000830152611245818b6110a0565b90508181036020830152611259818a6110a0565b9050611268604083018961118a565b611275606083018861118a565b611282608083018761118a565b81810360a08301526112948186610fe3565b905081810360c08301526112a88185610fe3565b905081810360e08301526112bc8184610f85565b90509998505050505050505050565b600060208201905081810360008301526112e48161110a565b9050919050565b600060208201905081810360008301526113048161114a565b9050919050565b6000602082019050611320600083018461118a565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561134957600080fd5b8060405250919050565b600067ffffffffffffffff82111561136a57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561139257600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061145c8261146f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156114c65780820151818401526020810190506114ab565b838111156114d5576000848401525b50505050565b6000601f19601f8301169050919050565b6114f581611451565b811461150057600080fd5b50565b61150c8161148f565b811461151757600080fd5b5056fea2646970667358221220d59954f17c474cfe8b5d302880e1ce60305e6e39db549508116a1d8f28a6dd3064736f6c63430006060033"
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

// describe('encodeABIFunctionSC', function () {
//     describe('Test Route with Token', function () {
//         var token = '';

//         before(function (done) {
//             chai.request(url)
//                 .get('/registerToken')
//                 .end(function (err, res) {
//                     var result = JSON.parse(res.text);
//                     token = result.values.token;
//                     done();
//                 });
//         });
//         it('User can enter deploySC with token in header', function (done) {
//             chai.request(url)
//                 .post('/thorhammer/contract/encodeABIFunctionSC')
//                 .set('Authorization', "OBC " + token)
//                 .send({
//                     "contractAddress": "0xFF3821A29c484c42DFa245b842C05154E4baAB8a",
//                     "method": "castVote",
//                     "param": ["Ahmad 222 ",["0x0449859A071F6b654FDe713074728C4FC22F04Fe"]],
//                     "abi": [
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_optionAddress",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "name": "castVote",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "success",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteName",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "_voteDesc",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_startDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "_endDate",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_nameOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_descOption",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "_addOption",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "nonpayable",
//                         "type": "constructor"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "string",
//                                 "name": "message",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "log",
//                         "type": "event"
//                     },
//                     {
//                         "anonymous": false,
//                         "inputs": [
//                             {
//                                 "indexed": false,
//                                 "internalType": "address",
//                                 "name": "voter",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "voterAdded",
//                         "type": "event"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateAddress",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateDesc",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "candidateName",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "_optionAddress",
//                                 "type": "address"
//                             }
//                         ],
//                         "name": "countOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getCountVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "count_",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoteDetails",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "voteName_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "voteDesc_",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "startDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "endDate_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "time_",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionName_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "optionDesc_",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "address[]",
//                                 "name": "optionAddress_",
//                                 "type": "address[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "getVoterList",
//                         "outputs": [
//                             {
//                                 "internalType": "string[]",
//                                 "name": "_voters",
//                                 "type": "string[]"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "_voter",
//                                 "type": "string"
//                             }
//                         ],
//                         "name": "getVoterStatus",
//                         "outputs": [
//                             {
//                                 "internalType": "bool",
//                                 "name": "voted_",
//                                 "type": "bool"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numOption",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "numVoter",
//                         "outputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [],
//                         "name": "owner",
//                         "outputs": [
//                             {
//                                 "internalType": "address",
//                                 "name": "",
//                                 "type": "address"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     },
//                     {
//                         "inputs": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "name": "voterMail",
//                         "outputs": [
//                             {
//                                 "internalType": "string",
//                                 "name": "",
//                                 "type": "string"
//                             }
//                         ],
//                         "stateMutability": "view",
//                         "type": "function"
//                     }
//                 ]
//                 })
//                 .end(function (err, res) {
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     // res.body.result.should.have.property('encrypteddata');
//                     res.should.have.property('status', 200);
//                     console.log(res.text)
//                     done()
//                 });
//         });
//     });
// });

describe('toHex', function () {
    describe('Test Route with Token', function () {
        var token = '';

        before(function (done) {
            request(url)
                .get('/registerToken')
                .end(function (err, res) {
                    var result = JSON.parse(res.text);
                    token = result.values.token;
                    done();
                });
        });
        it('User can enter deploySC with token in header', function (done) {
            request(url)
                .post('/thorhammer/web3.utils/toHex')
                .set('Authorization', "OBC " + token)
                .send({
                    "mixed":"assalamualaikum"
                })
                .end(function (err, res) {
                    if (err) {
                        console.log("Error: " + err)
                    }
                    // res.body.result.should.have.property('encrypteddata');
                    res.should.have.property('status', 200);
                    console.log(res.text)
                    done()
                });
        });
    });
});

describe('asciiToHex', function () {
    describe('Test Route with Token', function () {
        var token = '';

        before(function (done) {
            request(url)
                .get('/registerToken')
                .end(function (err, res) {
                    var result = JSON.parse(res.text);
                    token = result.values.token;
                    done();
                });
        });
        it('User can enter deploySC with token in header', function (done) {
            request(url)
                .post('/thorhammer/web3.utils/asciiToHex')
                .set('Authorization', "OBC " + token)
                .send({
                    "string": "assalamualaikum"
                })
                .end(function (err, res) {
                    if (err) {
                        console.log("Error: " + err)
                    }
                    // res.body.result.should.have.property('encrypteddata');
                    res.should.have.property('status', 200);
                    console.log(res.text)
                    done()
                });
        });
    });
});

describe('isAddress', function () {
    describe('Test Route with Token', function () {
        var token = '';

        before(function (done) {
            request(url)
                .get('/registerToken')
                .end(function (err, res) {
                    var result = JSON.parse(res.text);
                    token = result.values.token;
                    done();
                });
        });
        it('User can enter deploySC with token in header', function (done) {
            request(url)
                .post('/thorhammer/web3.utils/isAddress')
                .set('Authorization', "OBC " + token)
                .send({
                    "address":"0xc1912fee45d61c87cc5ea59dae31190fffff232d"
                })
                .end(function (err, res) {
                    if (err) {
                        console.log("Error: " + err)
                    }
                    // res.body.result.should.have.property('encrypteddata');
                    res.should.have.property('status', 200);
                    console.log(res.text)
                    done()
                });
        });
    });
});

describe('fromWei', function () {
    describe('Test Route with Token', function () {
        var token = '';

        before(function (done) {
            request(url)
                .get('/registerToken')
                .end(function (err, res) {
                    var result = JSON.parse(res.text);
                    token = result.values.token;
                    done();
                });
        });
        it('User can enter deploySC with token in header', function (done) {
            request(url)
                .post('/thorhammer/web3.utils/fromWei')
                .set('Authorization', "OBC " + token)
                .send({
                    "number":"1",
                    "unit":"ether"
                })
                .end(function (err, res) {
                    if (err) {
                        console.log("Error: " + err)
                    }
                    // res.body.result.should.have.property('encrypteddata');
                    res.should.have.property('status', 200);
                    console.log(res.text)
                    done()
                });
        });
    });
});