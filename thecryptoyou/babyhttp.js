const ethers = require("ethers")
const Web3 = require('web3');
const erc20 = require('./erc20_abi')
const moment = require('moment')
const Mint_abi = require('./mintabi')
const safaABI = require('./safa')
const markabi = require('./mark')
const HavaABI=require('./hav')
const Rabi = require('./Rabi')
const express = require('express')
const app = express()


const web3 = new Web3('https://temp2.china.bsc.node.web3rpc.com');
const Open_cardToken = '0x0A32f45a6897d8f4Bf8aD0a45030b49517caf72b';
const Babytoken='0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657';
const Marktoken='0x9447e3eD2A23572F7Be359216321f7e67B364BaC';
var Opencontract =new web3.eth.Contract(Mint_abi,Open_cardToken);
var Erccontract  =new web3.eth.Contract(erc20,Babytoken);
var despcontract  =new web3.eth.Contract(markabi,Marktoken);
var havacontract  =new web3.eth.Contract(HavaABI,Marktoken);
 



app.listen(8000, () => { 
    console.log('BABYhtpp服务器启动')
})

app.get("/balanceOf",(req,res)=>{

    let from=req.query.from
    var resule=Erccontract.methods.balanceOf(from).call()
    resule.then( function( result ) {
     
      res.send(web3.utils.fromWei(result,'ether'));
      }).catch(function (error){
      res.send("no")
      })
  
  })
  
app.get("/pendingRewardOfUser",(req,res)=>{

let from=req.query.from
var resule=havacontract.methods.pendingRewardOfUser(from).call()
resule.then( function( result ) {

res.send(web3.utils.fromWei(result,'ether'));
}).catch(function (error){
res.send("no")
})

})
app.get("/stakeInfoOfUser",(req,res)=>{

    let from=req.query.from
    var resule=havacontract.methods.stakeInfoOfUser(from).call()
    resule.then( function( result ) {
    
    res.send(result[0]);
    }).catch(function (error){
    res.send("no")
    })
    
    })
    
app.get("/pendingRewardOfNFT",(req,res)=>{

    let tokenid=req.query.tokenid
    var resule=havacontract.methods.pendingRewardOfNFT(tokenid).call()
    resule.then( function( result ) {
    
    res.send(web3.utils.fromWei(result,'ether'));
    }).catch(function (error){
    res.send("no")
    })
    
    })
app.get("/allowance",(req,res)=>{

let from=req.query.from
console.log(from)
var resule=Erccontract.methods.allowance(from,Open_cardToken).call()
resule.then( function( result ) {
    console.log(result)
    res.send(web3.utils.fromWei(result,'ether'));
    }).catch(function (error){
    res.send("no")
    })

})


app.get("/desp",(req,res)=>{

 
    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    var noce=req.query.noce
    var iniv=req.query.iniv



  

    var transfer =Opencontract.methods.breed(iniv);
    var encodedABI=transfer.encodeABI()
    console.log("===编码后的ABI===")
    console.log(encodedABI)
    console.log("===编码后的ABI===")
    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: '0x0A32f45a6897d8f4Bf8aD0a45030b49517caf72b',
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: encodedABI
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
      console.log(signed)
      var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
      tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
      });
      tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
      });
  
      tran.on('receipt', receipt => {
        console.log('reciept');
       
      });    
      tran.on('error', console.error);
    });

})

app.get("/approve",(req,res)=>{

 
    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    var noce=req.query.noce



  

    var transfer =Erccontract.methods.approve(Open_cardToken,web3.utils.toWei("250",'ether'));
    var encodedABI=transfer.encodeABI()
    console.log("===编码后的ABI===")
    console.log(encodedABI)
    console.log("===编码后的ABI===")
    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: Babytoken,
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: encodedABI
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
      console.log(signed)
      var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
      tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
      });
      tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
      });
  
      tran.on('receipt', receipt => {
        console.log('reciept');
       
      });    
      tran.on('error', console.error);
    });

})

app.get("/GetNoce",(req,res)=>{

    var from=req.query.from
    console.log(from)
    var resule=web3.eth.getTransactionCount(from, 'pending') 
    resule.then( function( result ) {
      console.log(result)
      res.send(result.toString());
      }).catch(function (error){
        console.log(error)
      res.send("no")
      })
  
  })
  

app.get("/tokenbalanceOf",(req,res)=>{

    let from=req.query.from
    let contract=req.query.contract
    console.log(from,contract)
    var Erccontract  =new web3.eth.Contract(Rabi,contract);
    var resule=Erccontract.methods.balanceOf(from).call()
    resule.then( function( result ) {
        
        res.send(result);
        }).catch(function (error){
        res.send("no")
        })

})
    

app.get("/byindex",(req,res)=>{

    let from=req.query.from
    let contract=req.query.contract
    let i =req.query.i
    var Erccontract  =new web3.eth.Contract(Rabi,contract);
    var resule=Erccontract.methods.tokenOfOwnerByIndex(from,i).call()
    resule.then( function( result ) {
        console.log(result)
        
     
      res.send(result);
      }).catch(function (error){
          console.log(error)
      res.send("no")
      })
  
  })


  app.get("/safeTransferFrom",(req,res)=>{

 
    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    let from=req.query.from
    let to=req.query.to
    let tokenid=req.query.tokenid
    var noce=req.query.noce
    let contract=req.query.contract
  

    var pcontract  =new web3.eth.Contract(safaABI,contract);

    var transfer =pcontract.methods.safeTransferFrom(from,to,tokenid);
    var encodedABI=transfer.encodeABI()
    console.log("===编码后的ABI===")
    console.log(encodedABI)
    console.log("===编码后的ABI===")
    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: contract,
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: encodedABI
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
      console.log(signed)
      var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
      tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
      });
      tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
      });
  
      tran.on('receipt', receipt => {
        console.log('reciept');
       
      });    
      tran.on('error', console.error);
    });

})

app.get("/cunru",(req,res)=>{

 
    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    var noce=req.query.noce
    var tokenid=req.query.tokenid
    var contract=req.query.contract
 



  

    var transfer =despcontract.methods.deposit(tokenid);
    var encodedABI=transfer.encodeABI()
    console.log("===编码后的ABI===")
    console.log(encodedABI)
    console.log("===编码后的ABI===")
    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: contract,
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: encodedABI
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
      console.log(signed)
      var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
      tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
      });
      tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
      });
  
      tran.on('receipt', receipt => {
        console.log('reciept');
       
      });    
      tran.on('error', console.error);
    });

})
app.get("/approve",(req,res)=>{

 
    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    var noce=req.query.noce
    var contract=req.query.contract
    var pcontract  =new web3.eth.Contract(safaABI,contract);

  

    var transfer =pcontract.methods.setApprovalForAll('0x9447e3ed2a23572f7be359216321f7e67b364bac','1');
    var encodedABI=transfer.encodeABI()
    console.log("===编码后的ABI===")
    console.log(encodedABI)
    console.log("===编码后的ABI===")
    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: contract,
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: encodedABI
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
      console.log(signed)
      var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
      tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
      });
      tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
      });
  
      tran.on('receipt', receipt => {
        console.log('reciept');
       
      });    
      tran.on('error', console.error);
    });

})

app.get("/my",(req,res)=>{
    
    var resule=havacontract.methods.pendingRewardOfUser('0xFC4C99a58E9257D387C197B97529e6e847B0A159').call()
    resule.then( function( result ) {
    
    res.send(web3.utils.fromWei(result,'ether'));
    }).catch(function (error){
    res.send("no")
    })
    
    })

app.get("/HarvestAll",(req,res)=>{


    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    var noce=req.query.noce
 



    


    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: '0x9447e3eD2A23572F7Be359216321f7e67B364BaC',
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: '0x8ed955b9'
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
        console.log(signed)
        var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
        tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
        });
        tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
        });
    
        tran.on('receipt', receipt => {
        console.log('reciept');
        
        });    
        tran.on('error', console.error);
    });

})

app.get("/withdrawAll",(req,res)=>{

 
    let gas=req.query.gas
    let gaslimt=req.query.gaslimt
    let pri=req.query.pri
    var noce=req.query.noce
 



  

    var transfer =havacontract.methods.withdrawAll();
    var encodedABI=transfer.encodeABI()
    console.log("===编码后的ABI===")
    console.log(encodedABI)
    console.log("===编码后的ABI===")
    gas=web3.utils.toWei(gas,'gwei')

    var tx = {
        to: '0x9447e3eD2A23572F7Be359216321f7e67B364BaC',
        gas: gaslimt,
        gasPrice:gas,
        nonce:noce,
        data: encodedABI
    };
    console.log(tx)
    web3.eth.accounts.signTransaction(tx, pri).then(signed => {
      console.log(signed)
      var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
      tran.on('confirmation', (confirmationNumber, receipt) => {
        console.log('confirmation: ' + confirmationNumber);
      });
      tran.on('transactionHash', hash => {
        console.log('hash');
        console.log(hash)
        res.send(hash)
      });
  
      tran.on('receipt', receipt => {
        console.log('reciept');
       
      });    
      tran.on('error', console.error);
    });

})
