
pragma solidity ^0.8.0;

interface IVerifySig {
	function isValidData(bytes memory sig) external view returns(address) ;
	function recoverSigner(bytes32 message, bytes memory sig) external	pure	returns (address);
	function splitSignature(bytes memory sig)		external	pure	returns (uint8, bytes32, bytes32) ;
}
contract VerifySig {
  function getsigneraddress (bytes memory sig) public view returns(address){
		return isValidData ( sig ) ;
	}
	function verifysignature ( bytes memory _signature , address _signer ) public view returns ( bool ){
		return _signer == getsigneraddress ( _signature ) ;
	}
	function isValidData(bytes memory sig) public view returns(address) {
		bytes32 message = keccak256(abi.encodePacked( "\x19Ethereum Signed Message:\n32", msg.sender));
		return recoverSigner(message, sig);
	}
	function recoverSigner(bytes32 message, bytes memory sig)
		public
		pure
		returns (address)
	{
		uint8 v;
		bytes32 r;
		bytes32 s;
		(v, r, s) = splitSignature(sig);
		return ecrecover(message, v, r, s);
	}
	function splitSignature(bytes memory sig)
		public
		pure
		returns (uint8, bytes32, bytes32)
	{
		require(sig.length == 65);
		bytes32 r;
		bytes32 s;
		uint8 v;
		assembly {
				// first 32 bytes, after the length prefix
				r := mload(add(sig, 32))
				// second 32 bytes
				s := mload(add(sig, 64))
				// final byte (first byte of the next 32 bytes)
				v := byte(0, mload(add(sig, 96)))
		}
		return (v, r, s);
	}
}
