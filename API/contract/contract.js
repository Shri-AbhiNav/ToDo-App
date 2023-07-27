const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://frosty-serene-liquid.ethereum-sepolia.discover.quiknode.pro/171fd45453e47b5af1d46fd70b0995ae22f6c8fa/")
const contractAddress = "0x966Fa59fF67006C855A057edB587c4fC1765a694";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
