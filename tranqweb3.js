const Web3 = require('web3');
const BN = require('bn.js');

const web3 = new Web3('https://harmony-0-rpc.gateway.pokt.network/');

YOUR_PRIVATE_KEY = ('-------------------')

let hmyMasterAccount = web3.eth.accounts.privateKeyToAccount(YOUR_PRIVATE_KEY);
web3.eth.accounts.wallet.add(hmyMasterAccount);
web3.eth.defaultAccount = hmyMasterAccount.address

const myAddress = web3.eth.defaultAccount;

var address = '0x24ad62502d1c652cc7684081169d04896ac20f30' // swap contract address
var abi = '[{"inputs":[{"type":"address","name":"_factory","internalType":"address"},{"type":"address","internalType":"address","name":"_WETH"}],"type":"constructor","stateMutability":"nonpayable"},{"type":"function","stateMutability":"view","inputs":[],"name":"WETH","outputs":[{"name":"","type":"address","internalType":"address"}]},{"name":"factory","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"type":"function","stateMutability":"view"},{"type":"receive","stateMutability":"payable"},{"type":"function","stateMutability":"nonpayable","inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"name":"tokenB","internalType":"address","type":"address"},{"name":"amountADesired","type":"uint256","internalType":"uint256"},{"type":"uint256","name":"amountBDesired","internalType":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"name":"amountBMin","internalType":"uint256","type":"uint256"},{"type":"address","internalType":"address","name":"to"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"outputs":[{"internalType":"uint256","type":"uint256","name":"amountA"},{"internalType":"uint256","type":"uint256","name":"amountB"},{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"addLiquidity"},{"name":"addLiquidityETH","type":"function","inputs":[{"internalType":"address","type":"address","name":"token"},{"name":"amountTokenDesired","internalType":"uint256","type":"uint256"},{"name":"amountTokenMin","internalType":"uint256","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"type":"address","internalType":"address","name":"to"},{"type":"uint256","name":"deadline","internalType":"uint256"}],"stateMutability":"payable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountETH","internalType":"uint256"},{"type":"uint256","internalType":"uint256","name":"liquidity"}]},{"inputs":[{"name":"tokenA","type":"address","internalType":"address"},{"name":"tokenB","type":"address","internalType":"address"},{"internalType":"uint256","type":"uint256","name":"liquidity"},{"internalType":"uint256","type":"uint256","name":"amountAMin"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"name":"to","type":"address","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}],"name":"removeLiquidity","stateMutability":"nonpayable","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"name":"amountB","internalType":"uint256","type":"uint256"}],"type":"function"},{"name":"removeLiquidityETH","type":"function","outputs":[{"name":"amountToken","internalType":"uint256","type":"uint256"},{"internalType":"uint256","type":"uint256","name":"amountETH"}],"stateMutability":"nonpayable","inputs":[{"name":"token","type":"address","internalType":"address"},{"name":"liquidity","type":"uint256","internalType":"uint256"},{"internalType":"uint256","type":"uint256","name":"amountTokenMin"},{"type":"uint256","name":"amountETHMin","internalType":"uint256"},{"type":"address","internalType":"address","name":"to"},{"name":"deadline","internalType":"uint256","type":"uint256"}]},{"stateMutability":"nonpayable","outputs":[{"internalType":"uint256","type":"uint256","name":"amountA"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"type":"function","name":"removeLiquidityWithPermit","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"name":"tokenB","type":"address","internalType":"address"},{"name":"liquidity","type":"uint256","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"name":"to","type":"address","internalType":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"name":"v","internalType":"uint8","type":"uint8"},{"type":"bytes32","internalType":"bytes32","name":"r"},{"internalType":"bytes32","name":"s","type":"bytes32"}]},{"stateMutability":"nonpayable","outputs":[{"type":"uint256","internalType":"uint256","name":"amountToken"},{"name":"amountETH","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"token","type":"address","internalType":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"name":"amountTokenMin","type":"uint256","internalType":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"type":"address","internalType":"address","name":"to"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"internalType":"uint8","type":"uint8","name":"v"},{"type":"bytes32","internalType":"bytes32","name":"r"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","type":"function"},{"outputs":[{"internalType":"uint256","type":"uint256","name":"amountETH"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","type":"function","inputs":[{"type":"address","name":"token","internalType":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"type":"uint256","internalType":"uint256","name":"amountTokenMin"},{"name":"amountETHMin","type":"uint256","internalType":"uint256"},{"name":"to","internalType":"address","type":"address"},{"internalType":"uint256","type":"uint256","name":"deadline"}],"stateMutability":"nonpayable"},{"outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","type":"function","stateMutability":"nonpayable","inputs":[{"internalType":"address","name":"token","type":"address"},{"name":"liquidity","type":"uint256","internalType":"uint256"},{"name":"amountTokenMin","internalType":"uint256","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"name":"to","internalType":"address","type":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"internalType":"bool","type":"bool","name":"approveMax"},{"name":"v","internalType":"uint8","type":"uint8"},{"name":"r","type":"bytes32","internalType":"bytes32"},{"name":"s","type":"bytes32","internalType":"bytes32"}]},{"outputs":[{"name":"amounts","type":"uint256[]","internalType":"uint256[]"}],"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","type":"uint256","name":"amountOutMin"},{"internalType":"address[]","name":"path","type":"address[]"},{"name":"to","type":"address","internalType":"address"},{"name":"deadline","type":"uint256","internalType":"uint256"}],"type":"function","name":"swapExactTokensForTokens","stateMutability":"nonpayable"},{"type":"function","stateMutability":"nonpayable","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"swapTokensForExactTokens","inputs":[{"type":"uint256","internalType":"uint256","name":"amountOut"},{"type":"uint256","internalType":"uint256","name":"amountInMax"},{"internalType":"address[]","name":"path","type":"address[]"},{"name":"to","internalType":"address","type":"address"},{"name":"deadline","type":"uint256","internalType":"uint256"}]},{"name":"swapExactETHForTokens","stateMutability":"payable","inputs":[{"internalType":"uint256","type":"uint256","name":"amountOutMin"},{"name":"path","type":"address[]","internalType":"address[]"},{"type":"address","internalType":"address","name":"to"},{"name":"deadline","internalType":"uint256","type":"uint256"}],"outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"type":"function"},{"name":"swapTokensForExactETH","outputs":[{"name":"amounts","internalType":"uint256[]","type":"uint256[]"}],"type":"function","stateMutability":"nonpayable","inputs":[{"type":"uint256","internalType":"uint256","name":"amountOut"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"name":"path","type":"address[]","internalType":"address[]"},{"internalType":"address","name":"to","type":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"name":"amounts","internalType":"uint256[]","type":"uint256[]"}],"name":"swapExactTokensForETH","inputs":[{"internalType":"uint256","type":"uint256","name":"amountIn"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"name":"path","type":"address[]","internalType":"address[]"},{"name":"to","internalType":"address","type":"address"},{"internalType":"uint256","type":"uint256","name":"deadline"}]},{"name":"swapETHForExactTokens","type":"function","outputs":[{"name":"amounts","internalType":"uint256[]","type":"uint256[]"}],"stateMutability":"payable","inputs":[{"type":"uint256","internalType":"uint256","name":"amountOut"},{"internalType":"address[]","name":"path","type":"address[]"},{"name":"to","type":"address","internalType":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}]},{"inputs":[{"type":"uint256","internalType":"uint256","name":"amountIn"},{"internalType":"uint256","type":"uint256","name":"amountOutMin"},{"name":"path","type":"address[]","internalType":"address[]"},{"internalType":"address","name":"to","type":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","type":"function","outputs":[],"stateMutability":"nonpayable"},{"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","type":"function","stateMutability":"payable","inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"name":"path","internalType":"address[]","type":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","internalType":"uint256","name":"deadline"}],"outputs":[]},{"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","type":"function","stateMutability":"nonpayable","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"name":"path","internalType":"address[]","type":"address[]"},{"name":"to","internalType":"address","type":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}],"outputs":[]},{"name":"quote","inputs":[{"name":"amountA","type":"uint256","internalType":"uint256"},{"internalType":"uint256","type":"uint256","name":"reserveA"},{"internalType":"uint256","type":"uint256","name":"reserveB"}],"type":"function","stateMutability":"pure","outputs":[{"internalType":"uint256","type":"uint256","name":"amountB"}]},{"stateMutability":"pure","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"type":"function","inputs":[{"type":"uint256","internalType":"uint256","name":"amountIn"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"name":"reserveOut","internalType":"uint256","type":"uint256"}],"name":"getAmountOut"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"name":"reserveOut","internalType":"uint256","type":"uint256"}],"name":"getAmountIn","outputs":[{"type":"uint256","internalType":"uint256","name":"amountIn"}],"type":"function","stateMutability":"pure"},{"inputs":[{"name":"amountIn","type":"uint256","internalType":"uint256"},{"type":"address[]","internalType":"address[]","name":"path"}],"stateMutability":"view","type":"function","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"getAmountsOut"},{"outputs":[{"internalType":"uint256[]","type":"uint256[]","name":"amounts"}],"type":"function","stateMutability":"view","inputs":[{"type":"uint256","internalType":"uint256","name":"amountOut"},{"name":"path","internalType":"address[]","type":"address[]"}],"name":"getAmountsIn"}]'

var MyContract = new web3.eth.Contract(JSON.parse(abi), address);

async function seller(inn, out, path, toaddress, deadline) {
    const gasPrice = await web3.eth.getGasPrice();
    const gasEstimate = await MyContract.methods.swapExactTokensForETH(inn,
        out,
        path,
        toaddress,
        deadline).estimateGas({ from: myAddress });

    MyContract.methods.swapExactTokensForETH(
        inn,
        out,
        path,
        toaddress,
        deadline
    ).send({
        from: myAddress,
        gasPrice: gasPrice,
        gas: gasEstimate
    })
        .then(console.log);
}


const tranq = 4                              // selling 4 tranq
const sellabove = tranq * 0.7
                                  
//sell as long as we can get 70 cents per tranq
const pathx = ['0xb4aa8c8e555b3a2f1bfd04234ff803c011760e59',      // xtranq
    '0xd74433b187cf0ba998ad9be3486b929c76815215',                 // artemis
    '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a'               // wone
]
const toaddx = myAddress                                        //sell to my address
const deadline = 1648951415;                                   //Sun Apr 03 2022 02:03:35 GMT+0000

let tranqNumber = web3.utils.toWei(tranq.toString(), 'ether')
let sellaboveNumber = web3.utils.toWei(sellabove.toString(), 'ether')

seller(tranqNumber, sellaboveNumber, pathx, toaddx, deadline)

setInterval(function () {
    seller(tranqNumber, sellaboveNumber, pathx, toaddx, deadline) //sell every 10 mins
}, 600000)