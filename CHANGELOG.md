Notable changes for each version of a Integration Hub project.

# Changelog
## v1.10.2 (1/3/2022)
### Changed
* Changed ethereum mainnet/rinkeby node into infura 

## v1.10.1 (15/10/2021)
### Changed 
* Changed no-cors to cors 
* Changed logger upload daily via cron

## v1.10.0 (7/7/2021)
### Changed
* Removal Thor V1 API
* Improve performance

## v1.9.0 (19/5/2021)
### Added
* SendSignedTransactionWConfirmation and sendraw transactionwconfirmation with the capability of webhooking the confirmation of sent transaction
* Added getrawtransaction API in btc controller

### Changed
* Changed ethtestnet provider

### Fixed
* Fixed syntax error in eth mainnet/testnet and thorhammer controller
* Fixed error in getBlockTransactionCount
* Fixed error deploySCHex multiple http setheader
* Fixed bug error handling eth thorshammer, mainnet & testnet contract

## v1.8.21 (9/4/2021)
### Added
* Added new API Thors 2.0

## v1.7.21 (29/3/2021)
### Changed
* Remove unused import
* Code linting
* Code styling
* Seperate S3 log between development and production branch

## v1.6.21 (24/3/2021)
### Fixed
* Append error message in response for BTC, ETH testnet, ETH mainnet and THOR API

## v1.6.20
### Fixed
* Fixed missing package

## v1.6.19 (22/2/2021)
### Change
* Add body object option in estimateGas function in ethereum (mainnet and testnet) and thorhammer

## v1.6.18 (18/2/2021)
### Fixed
* Fixed estimateGas in ethereum (mainnet and testnet) and thorhammer

## v1.6.14 (15/2/2021)
### Fixed 
* Fixed getBalance function syntax

## v1.6.13 (11/2/2021)
### Fixed
* Fixed bugs estimateGas in eth mainnet and testnet

## v1.6.12 (9/2/2021)
### Fixed
* Fixed syntax error in neomainnet contract

## v1.6.11 (26/1/2021)
### Added
* Add rinkeby controller
* Add rinkeby in provider switcher
* Add rinkeby dns in environment file

## v1.6.10 (2/11/2020)
### Fixed
* Fixed bugs in neo controller response empty value
* Fixed bugs in bch controller response empty value

## v1.6.9 (26/10/2020)
### Added
* Add case for 'txhashonly' for smart contract function
* Add txhash choice option for deploying smart contract
### Changed 
* Code cleanup

## v1.5.9 (19/10/2020)
### Changed
* Change S3 logs interval for every 5 minutes

## v1.5.8 (12/10/2020)
### Added
* Added new thorhammer smart contract function
* Added S3 log controller
### Fixed
* Fixed bugs in error handling for each controller

## v1.3.7 (5/10/2020)
### Fixed
* Fixed bugs removed whitespaces in environement file 
### Changed
* Change IP address for bitcore to domain name service (dns)

## v1.3.5 (28/9/2020)
### Added 
* Added error handling in every node controller
* Added .gitignore
### Fixed
* Fixed bugs in provider switcher in checking existence of counter file
### Changed
* Build docker for integration hub
* Change IP address for every related node into DNS

## v1.1.2 (14/9/2020)
### Added
* Added provider switcher for integration hub for every node
### Changed
* Seperate btc transacition, non-transaction, and admin function in controller
* Changed environement file with new IP node delete unused variable

## v1.0.0 (1/8/2020)
### Added
* Added function for node health
* Added API for URWallet using Bitcore-node API
### Changed
* Remove encryption from integration hub's last version
* Sepaerate transaction and non-transaction for every node included