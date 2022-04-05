// const web3=require('../configweb3-ropsten')
const ethers=require ( 'ethers' )
const LOGGER=console.log
// const encoded = web3.eth.abi.encodeParameters(
const typesarray = 	[	'address'
, 'address' 
, 'string' 
, 'uint256' 
, 'uint256' 
, 'uint256' 
]	
const valuesarray = [		
	'0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4'
, '0xCF529119C86eFF8d139Ce8CFfaF5941DA94bae5b'
, 'Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL'
, '1'
, '0' 
, '500' 
]
let strStructData = ethers.utils.AbiCoder.prototype.encode(	typesarray , valuesarray);
LOGGER( 'strStructData' , strStructData )
let reskeccak = ethers.utils.keccak256( strStructData )
LOGGER ( reskeccak , reskeccak.length ) // => 0xbd2b0ed3a8d58c50ccf996c93f32dedf1c109a92cc0a2ae2df4c2c026e15ba86
// let privatekey = '0x55d9223f095d97f0915993bd73397fcb57668fedbe1a5731d79335e64cb55b6b'
let privatekey = '55d9223f095d97f0915993bd73397fcb57668fedbe1a5731d79335e64cb55b6b'
let wallet = new ethers.Wallet( privatekey )
LOGGER ( 'wallet.address' , wallet.address )
// ethers.Signer.signMessage ( reskeccak ) 
if( true ) { wallet.signMessage( reskeccak ).then(resp => {
	LOGGER ( 'signresult@reskeccak' , resp , resp.length ) // => 0x392e274feb2b376ae6862d0d659c92df2567da9608ce705b641401e32d8917862603f7c65963c381a8dc1d052c9e7518f0611289343047c632bef238ea0da7b41c
//////
	let flatSig = resp
	LOGGER( 'signresult@flatSig' , flatSig , flatSig.length ) // => 0x317619e8e01c6d18ad5486ac8d024d2e4afcd50b72d81c15e7ea5cb03e2bb30d699619885523994a6692fd6d0ed83a75a024ad048633d865a47b02d8bdb48eae1c
	let splitsig = ethers.utils.splitSignature(flatSig)
	LOGGER ( splitsig ) //	let recoveredaddress = wallet.verifyMessage( reskeccak , flatSig )
	let recoveredaddress = ethers.utils.recoverAddress ( reskeccak , flatSig )
	LOGGER ( 'recoveredaddress' , recoveredaddress )
//	let recoveredaddress_01 = ethers.utils.recoverAddress ( flatSig  , reskeccak  )
	//LOGGER ( 'recoveredaddress' , recoveredaddress_01 )
	} )
}
if ( true ) { let messageHashBytes = ethers.utils.arrayify( reskeccak )
	wallet.signMessage(messageHashBytes).then ( resp => {
		let flatSig = resp 
		LOGGER( 'signresult@flatSig' , flatSig , flatSig.length ) // => 0x317619e8e01c6d18ad5486ac8d024d2e4afcd50b72d81c15e7ea5cb03e2bb30d699619885523994a6692fd6d0ed83a75a024ad048633d865a47b02d8bdb48eae1c
		let splitsig = ethers.utils.splitSignature(flatSig)
		LOGGER ( splitsig ) //	let recoveredaddress = wallet.verifyMessage( reskeccak , flatSig )
		let recoveredaddress = ethers.utils.recoverAddress ( reskeccak , flatSig )
		LOGGER ( 'recoveredaddress' , recoveredaddress )
	})
}
// For Solidity, we need the expanded-format of a signature

if( false ) { const encoded // = web3.utils.soliditySha3 ( // web3.utils.abi.encodeParameters(
	= web3.eth.abi.encodeParameters(
	[	'address' // 0
		, 'address' // 1
		, 'string' // 2
		, 'uint256' // 3
		, 'uint256' // 4
		, 'address' // 5
	]	
	,[		'0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4'
		, '0xCF529119C86eFF8d139Ce8CFfaF5941DA94bae5b'
		, 'Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL'
		, '1'
		, '0' 
		, '500' 
 	])
 LOGGER( encoded )
}
if(false ){
	let keccakres=web3.utils.keccak256 ( '12345' )
	LOGGER( '' , keccakres , keccakres.length  ) // => len : 66
}

const scratch=_=>{
const encoded = ethers.utils.keccak256(abiCoder.encode(
	[	'address' // 0
	, 'address' // 1
	, 'string' // 2
	, 'uint256' // 3
	, 'uint256' // 4
	, 'address' // 5
], [ 
		'0x5ae8f88e15ff42d62b5c1288dc7909bdfa5ef4f4'
	, '0xCF529119C86eFF8d139Ce8CFfaF5941DA94bae5b'
	, 'Qmek4YBk9FvxeyVsBnoNhxJPsq6KUbMe7roBW5qsTwvaWL'
	, '1'
	, '0' 
	, '500' 
]
));
}
