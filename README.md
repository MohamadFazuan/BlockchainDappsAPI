# Integration Hub v2 development repositories

Integration Hub (IH) is a platform developed by OK Blockchain Centre to ease and fasten the Decentralized App development process. The platform provides an easy and secured integration using JSON API from the client to the blockchain. As of now, clients can access Bitcoin, Bitcoin Cash, Ethereum, and Neo blockchain from the Integration Hub without having any difficulties to deploy the nodes at their side. 

Integration Hub development for phase 4 that include the followings :-

- source code rebase and refactoring by implementing modular code base for maintable codebase upon scaling up on production server.
- implement proper error handling by using a predefined error codes and messages.
- adding proper response status code for each request from client.
- implement proper debug log file with Errors and Stacktrace appended to the log file.
- implement input validation for each request to reduce vulnerability of application.
- remove rpc functions not required as it can change the default configuration of running Blockchain Node server and take control of the Node through Integration Hub API endpoint (apply only for private network blockchain Thor Hammer).
- implement round-robin-like mechanism to schedule large request and redirect it to available Blockchain Node server as BC Node Server is configured to have redundacy.  

**Status: Under Development**

- Clone this repo to contribute
- Install Project Dependencies
  ```c
  $npm install --save
  ```

- Run this Express based Node.js application with below command during development
  ```c 
  $npm run debug 
  ```

# Pre-requisite

1. Express JS Framework
2. NodeJS
3. Docker
4. Docker Compose
5. Make: ``` npm install make -g```

# Installation

1. Clone repository
2. ```cd integration-hub-v2```
3. ```make init```



#### Author:
R&D: Blockchain
