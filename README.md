
## Quoteth
Quoteth aims to get users familiar with Ethereum message signatures by asking users to correctly attribute famous quotes to their speakers. All quotes are represented as signed messages, and users are encouraged to use a signature verification tool to check the message and signature against the possible speakers' addresses rather than guess the speaker of each quote.

Quoteth does not use web3.js or require you to run a local blockchain! Instead it uses [ethereumjs-util](https://github.com/ethereumjs/ethereumjs-util) for signature verification.

### Install dependencies
`yarn`

### Run dev server
`yarn start` and visit [http://localhost:3000/](http://localhost:3000/)

### Create production build
`yarn build`
  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
