// const web3 = require("web3");
// const eth = require('web3-eth');

var Web3 = require("web3")
const web3 = new Web3("https://cloudflare-eth.com")
var Eth = require('web3-eth');
const eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');
const LOGGER=console.log

const Order = { //보낼 데이터
//    'exchange': '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c',
  //  'maker': '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c',
		//"makerRelayerFee" : 12
		_target_erc1155_contract : '0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4' // 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c' // 0
		 , _minter : '0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed' // 1
		 , _itemid : 'Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL' // 2 
		 , _amount : '3' // 3 s ; // degenerate to =1
		 , _decimals : '1' // 4
		 , _author_royalty : '500' // 5 //		address _to ; // oughta be minter address in case buyer calls
};

const priKey = "0xcaceedbd0912a415744beaea5cf3f2fbca535ca7ccbe0dc780ac005488657132"; //개인키 (maker만 가짐)
const pubKey = "0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed"; //주소(공개키로 쓰임, maker와 taker 모두 가짐(전송교환했다고 가정))
LOGGER( 'signer address' , pubKey )
console.log("=====================================") ; // maker 과정
encoded = web3.eth.abi.encodeParameters(
	[ 'address'
	, 'address'
	, 'string'
	, 'uint256'
	, 'uint256'
	, 'uint256'
	],[ Order._target_erc1155_contract
	, Order._minter
	, Order._itemid
	, Order._amount
	, Order._decimals
	, Order._author_royalty		
])
console.log("keccak256 encoded: ");
console.log( '' , encoded ); //문자열로

hash = web3.utils.sha3(encoded) 
ethereum.sign(hash ).then( resp => {
	signresult = resp 
})

console.log("=====================================");
signatureObject = web3.eth.accounts.sign( web3.utils.sha3(encoded) , priKey); //사인
console.log("sign: ");
console.log(signatureObject);
console.log("====================================="); // maker 과정 끝

console.log("====================================="); // taker 과정
function verifySig (signatureObject, pubKey) {
	const recoverStr = web3.eth.accounts.recover(signatureObject) //사인풀기
//	recover ( signatureObject , senderaddress )
	LOGGER('recoverStr' , recoverStr)
	if (recoverStr == pubKey) { return true }
	else { return false }
}
if( verifySig ( signatureObject , pubKey ) ) {
    console.log("ok");
}
console.log("====================================="); // taker 과정 끝
// const contract = new web3.eth.Contract(
//     [
//         {
//             name: 'testCall',
//             inputs: [
//                 { type: 'bytes32', name: '_hash', internalType: 'bytes32' },
//             ],
//         },
//     ],
//     "0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed",
// );
// encoded = web3.eth.abi.encodeParameters(
//     [
//         {
//             "OrderStruct": {
//                 "exchange": 'address',
//                 "maker": 'address',
//                 "makerRelayerFee": 'uint256',
//             }
//         }
//     ],
//     [
//         {
//             "OrderStruct": {
//                 "exchange": '0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed',
//                 "maker": '0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed',
//                 "makerRelayerFee": '5',
//             }
//         }
//     ]
// )
// hash = web3.utils.keccak256( encoded )
// recoverStr = web3.eth.accounts.recover(signatureObject) //사인풀기
// console.log("recover: " + recoverStr);
// console.log("=====================================");
// decoded = web3.eth.abi.decodeParameters(['address', 'address', 'uint'], encoded); //디코드
// console.log(decoded);
// console.log("=====================================");
[
	{
			"recipient": "0x0000000000000000000000000000000000000001",
			"value": 34
	}
]

["0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4","0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed","Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL","3","1","500"]
// => O
[0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4,0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed,"Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL","3","1","500"]

[{"_target_erc1155_contract":0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4},{"_minter":0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed},{"_itemid":"Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL"},{"_amount":"3"},{"_decimals":"1"},{"_author_royalty":"500"}]
<=
[{"_target_erc1155_contract":0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4}
,{"_minter":0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed}
,{"_itemid":"Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL"}
,{"_amount":"3"}
,{"_decimals":"1"}
,{"_author_royalty":"500"}]

["_target_erc1155_contract",0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4],["_minter",0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed],["_itemid","Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL"],["_amount","3"],["_decimals","1"],["_author_royalty","500"]]
<=
[["_target_erc1155_contract",0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4]
,["_minter",0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed]
,["_itemid","Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL"]
,["_amount","3"]
,["_decimals","1"]
,["_author_royalty","500"]]

[["_target_erc1155_contract","0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4"],["_minter",'0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed'],["_itemid","Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL"],["_amount","3"],["_decimals","1"],["_author_royalty","500"]]
0x5d2a22ccccaf9321f1599f6d5ce29fb40b021556ac45d3ff5a14518f6b5e4f41688cf719533b6cfea9cd561497ff43e646869c6adf0a52eb2683be03bef9b6b81c

[["_target_erc1155_contract","0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4"]
,["_minter",'0xaeC2f4Dd8b08EeF0C71B02F97978106D875464Ed']
,["_itemid","Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL"]
,["_amount","3"]
,["_decimals","1"]
,["_author_royalty","500"]]