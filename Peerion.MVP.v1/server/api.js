const { Router } = require('express');

// import MiscRoutes from './routes/misc.route';
// import ProductRoutes from './routes/product.route';
// import TransactionRoutes from './routes/transaction.route';
// import UserRoutes from './routes/user.route';
// import errorHandler from './misc/error-handler';
// Configs

// // Misc routes
// routes.use('/misc', MiscRoutes);

// // Products Routes
// routes.use('/products', ProductRoutes);

// // Users Routes
// routes.use('/users', UserRoutes);

// // Transaction Routes
// routes.use('/transactions', TransactionRoutes);

// routes.use(errorHandler);

const Web3 = require('web3');
const Cryptr = require('cryptr');
// const BigNumber = require('bignumber.js');
// const net = require('net');
// const Tx = require('ethereumjs-tx');
// const stripHexPrefix = require('strip-hex-prefix');
const Wallet = require('./models/wallet');

let flag = true; // System flag
const cryptr = new Cryptr('AdBankTokenNetwork');

// /* Transfer tokens from contract to internal wallet */
// app.post('/transferTokens', async (req, res) => {
//   let key = '';
//   if(req.headers['x-api-key'])
//     key = req.headers['x-api-key'];

//   if(key != config.key)
//     return res.send({status: false, msg: 'you are not authorised!'});

//   if(!flag)
//     return res.send({status: false, msg: 'system is turned off!'});

//   if(!req.body.userId || !req.body.tokenAmount || isNaN(req.body.tokenAmount))
//     return res.send({status: false, msg: 'error occurred!'});

//   let user = await Wallet.findOne({userId: req.body.userId});

//   if(!user)
//     return res.send({status: false, msg: 'user doesn\'t exist!'});

//   web3.eth.personal.unlockAccount(app.contract.owner_address, app.contract.password, 0, (err, unlocked) => {
//     if(err)
//       return res.send({status: false, msg: 'unlock failed!'});

//     let tokenAmount = req.body.tokenAmount * Math.pow(10, app.contract.decimals);

//     contractObj.methods.transfer(user.address, tokenAmount).send({
//       from: app.contract.owner_address,
//     }).on('transactionHash', (hash) => {
//       return res.send({status: true, hash: hash});
//     }).on('confirmation', (confirmationNumber, receipt) => {
//     }).on('receipt', (receipt) => {
//     }).on('error', (err) => {
//       return res.send({status: false, msg: err});
//     }).then((done) => {
//       //console.log(done);
//       //return res.send({status: true, hash: done.transactionHash});
//     });
//   });
// });

// /* Withdraw to external public wallet */
// app.post('/withdraw', async (req, res) => {
//   let key = '';
//   if(req.headers['x-api-key'])
//     key = req.headers['x-api-key'];

//   if(key != config.key)
//     return res.send({status: false, msg: 'you are not authorised!'});

//   if(!flag)
//     return res.send({status: false, msg: 'system is turned off!'});

//   if(!req.body.address || !req.body.userId)
//     return res.send({status: false, msg: 'error occurred!'});

//   let user = await Wallet.findOne({userId: req.body.userId});
//   let address = req.body.address;

//   if(!user)
//     return res.send({status: false, msg: 'user doesn\'t exist!'});

//   contractObj.methods.balanceOf(user.address).call({from: app.contract.owner_address})
//     .then(async (result) => {
//     var tokenAmount = new BigNumber(result);

//     if(tokenAmount == 0)
//       return res.send({status: false, msg: 'nothing to withdraw!'});

//     /* Withdraw Tokens */
//     var privateKeyStr = stripHexPrefix(cryptr.decrypt(user.privateKey));

//     var privateKey = new Buffer(privateKeyStr, 'hex');

//     var nonce = await web3.eth.getTransactionCount(user.address).catch((error) => {
//       return res.send({status: false, msg: 'error occurred!'});
//     });

//     var gasPrice = await web3.eth.getGasPrice();

//     var txData = contractObj.methods.transfer(address, tokenAmount).encodeABI();

//     var txParams = {
//         nonce: web3.utils.toHex(nonce),
//         gasPrice: web3.utils.toHex(gasPrice),
//         gasLimit: web3.utils.toHex(400000),
//         from: user.address,
//         to: contractObj._address,
//         value: '0x00',
//         chainId: app.chainId,
//         data: txData
//     };

//     var tx = new Tx(txParams);
//     tx.sign(privateKey);

//     var serializedTx = tx.serialize();

//     web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
//     .on('transactionHash', function(hash){
//       return res.send({status: true, hash: hash});
//     }).on('error', function(err){
//       return res.send({status: false, msg: err});
//     }).then(function(done){
//       //return res.send({status: true, hash: done.transactionHash});
//     });
//   });
// });

// /* Transfer tokens from one wallet to another wallet */
// app.post('/transferTokensInternally', async (req, res) => {
//   let key = '';
//   if(req.headers['x-api-key'])
//     key = req.headers['x-api-key'];

//   if(key != config.key)
//     return res.send({status: false, msg: 'you are not authorised!'});

//   if(!flag)
//     return res.send({status: false, msg: 'system is turned off!'});

//   if(!req.body.fromUserId || !req.body.toUserId || !req.body.tokenAmount)
//     return res.send({status: false, msg: 'incorrect parameters!'});

//   let fromUser = await Wallet.findOne({userId: req.body.fromUserId});
//   if(!fromUser)
//     return res.send({status: false, msg: 'from doesn\'t exist!'});

//   let toUser = await Wallet.findOne({userId: req.body.toUserId});
//   if(!toUser)
//     return res.send({status: false, msg: 'to doesn\'t exist!'});

//   let tokenAmount = req.body.tokenAmount * Math.pow(10, app.contract.decimals);

//   let privateKeyStr = stripHexPrefix(cryptr.decrypt(fromUser.privateKey));

//   let privateKey = new Buffer(privateKeyStr, 'hex');

//   let nonce = await web3.eth.getTransactionCount(fromUser.address).catch((error) => res.send({status: false, msg: 'error occurred!'}));

//   let gasPrice = await web3.eth.getGasPrice();

//   let txData = contractObj.methods.transfer(toUser.address, tokenAmount).encodeABI();

//   let txParams = {
//     nonce: web3.utils.toHex(nonce),
//     gasPrice: web3.utils.toHex(gasPrice),
//     gasLimit: web3.utils.toHex(400000),
//     from: fromUser.address,
//     to: contractObj._address,
//     value: '0x00',
//     chainId: app.chainId,
//     data: txData,,
//   };

//   let tx = new Tx(txParams);
//   tx.sign(privateKey);

//   let serializedTx = tx.serialize();

//   web3.eth.sendSignedTransaction(`0x${  serializedTx.toString('hex')}`)
//     .on('transactionHash', (hash) => {
//     return res.send({status: true, hash: hash});
//   }).on('error', (err) => {
//     return res.send({status: false, msg: err});
//   }).then((done) => {
//     //return res.send({status: true, hash: done.transactionHash});
//   });
// });

// export default routes;
module.exports = config => {
  const web3 = new Web3(
    'https://mainnet.infura.io/v3/d56ce0d6dfe64845854369535e5f719d',
  );
  // const web3 = new Web3('http://127.0.0.1:8545');

  const contractObj = new web3.eth.contract(
    config.contract.abi,
    config.contract.address,
  );
 // contractObj.options.from = config.contract.owner_address;

  const routes = new Router();

  /* Contract Initialization */
  routes.route('/system').post(async (req, res) => {
    let key = '';
    if (req.headers['x-api-key']) key = req.headers['x-api-key'];

    if (key !== config.key)
      return res.send({ status: false, msg: 'you are not authorised!' });

    if (!req.body.action)
      return res.send({ status: false, msg: 'error occurred!' });

    const { action } = req.body;

    if (action !== 'on' && action !== 'off')
      return res.send({ status: false, msg: 'undefined action!' });

    if (action === 'on') {
      flag = true;
      return res.send({ status: true, msg: 'system is turned on!' });
    }
    flag = false;
    return res.send({ status: true, msg: 'system is turned off!' });
  });
  /* Return Owner Token Balance */
  routes.route('/ownerTokenBalance').post(async (req, res) => {
    let key = '';
    if (req.headers['x-api-key']) key = req.headers['x-api-key'];
    if (key !== config.key)
      return res.send({ status: false, msg: 'you are not authorised!' });
    try {
      const wei = await web3.eth.getBalance(req.body.balance);
      const balance = web3.utils.fromWei(wei, 'ether');
      return res.send({ status: true, balance });
    } catch (e) {
      return res.send({ status: false, balance: 0 });
    }
  });
  routes.route('/balance').post(async (req, res) => {
    let key = '';
    if (req.headers['x-api-key']) key = req.headers['x-api-key'];

    if (key !== config.key)
      return res.send({ status: false, msg: 'you are not authorised!' });
    if (!req.body.address)
      return res.send({ status: false, msg: 'error occurred!' });

    const wei = await web3.eth.getBalance(req.body.address);
    const balance = web3.utils.fromWei(wei, 'ether');
    return res.send({ status: true, balance, wei });
  });
  /* Return User Token Balance */
  routes.route('/userTokenBalance').post(async (req, res) => {
    let key = '';
    if (req.headers['x-api-key']) key = req.headers['x-api-key'];
    if (key !== config.key)
      return res.send({ status: false, msg: 'you are not authorised!' });

    if (!req.body.userId)
      return res.send({ status: false, msg: 'error occurred!' });

    const user = await Wallet.findOne({ userId: req.body.userId });

    if (!user) return res.send({ status: false, msg: "user doesn't exist!" });

    contractObj.methods
      .balanceOf(user.address)
      .call({ from: config.contract.owner_address })
      .then(result => {
        const balance = result / 10 ** config.contract.decimals;
        return res.send({ status: true, balance });
      });
    return null;
  });
  /* Create internal wallet for user */
  routes.route('/wallet').post(async (req, res) => {
    let key = '';
    if (req.headers['x-api-key']) key = req.headers['x-api-key'];

    if (key !== config.key)
      return res.send({ status: false, msg: 'you are not authorised!' });

    if (!flag) return res.send({ status: false, msg: 'system is turned off!' });

    if (!req.body.userId)
      return res.send({ status: false, msg: 'error occurred!' });

    let wallet = await Wallet.findOne({ userId: req.body.userId });

    if (!wallet) {
      const address = await web3.eth.personal.newAccount('ABcd12#$');
      if (!address)
        return res.send({
          status: false,
          msg: 'error occurred in creating new account!',
        });
      wallet = await new Wallet({
        userId: req.body.userId,
        address,
        privateKey: cryptr.encrypt(address),
      }).save();
      const unlocked = await web3.eth.personal.unlockAccount(
        wallet.address,
        'ABcd12#$',
        0,
      );
      if (!unlocked) {
        return res.send({
          status: false,
          msg: 'unlock failed!',
        });
      }
    }

    const { _id } = wallet;
    return res.send({
      status: true,
      msg: 'wallet created successfully!',
      walletId: _id,
      address: wallet.address,
    });
    // web3.eth
    //   .sendTransaction({
    //     from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    //     to: wallet.address,
    //     value: web3.utils.toWei('0.1', 'ether'),
    //   })
    //   .on('transactionHash', hash =>
    //     res.send({
    //       status: true,
    //       msg: 'wallet created successfully!',
    //       walletId: wallet._id,
    //     }),
    //   )
    //   .on('error', err => res.send({ status: false, message: err }))
    //   .then(done =>
    //     res.send({
    //       status: true,
    //       msg: 'wallet created successfully!',
    //       walletId: wallet._id,
    //     }),
    //   );
  });

  return routes;
};
