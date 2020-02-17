var ethereumUtil = require('ethereumjs-util')
// put private key here
var privateKey = "0x6af685c4de99d44c620ccd9464d19bdeb62a750b9ae49b1740fb28d68a0e5c7d"
console.log("public key: " + ethereumUtil.bufferToHex(ethereumUtil.privateToPublic(privateKey)))
console.log("address: " + ethereumUtil.bufferToHex(ethereumUtil.privateToAddress(privateKey)))
