
pragma solidity ^0.8.0;

interface ISales {
		struct Mint_data {
		address _target_erc1155_contract ; // 0
		address _minter ; // 1
		string _itemid ; // 2 es ;
		uint256 _amount; // 3 s ; // degenerate to =1
		uint256 _decimals ; // 4
		uint256 _author_royalty ; // 5 //		address _to ; // oughta be minter address in case buyer calls
	}
	struct Sale_data {
		address _target_erc1155_contract ; // 0
		address _seller ; // 1
		string _itemid ; // 2
		uint256 _amount ; // 3
		uint256 _price ; // 4
		uint256 _starting_time ; // 5
		uint _expiry ; // 6
		address _referer ; // 7
		uint256 _refererfeerate ; // 8
	}
}
interface IUnitVerify is ISales {
	function splitSignature(bytes memory sig) external		pure		returns (uint8, bytes32, bytes32) ;
	function recoverSigner(bytes32 message, bytes memory sig)		external		pure		returns (address);
	function verify_mint_data ( Mint_data memory _mintdata 		, string memory _signature	) external view returns ( address ) ;
}
contract UnitVerify is ISales{
	constructor () {}
	function splitSignature(bytes memory sig)		public		pure		returns (uint8, bytes32, bytes32)
	{		require(sig.length == 65);
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
	function recoverSigner(bytes32 message, bytes memory sig)		public		pure		returns (address)
	{   uint8 v;
		bytes32 r;
		bytes32 s;
		(v, r, s) = splitSignature(sig);
		return ecrecover(message, v, r, s);
	}
    function structloopback  ( Mint_data memory _mintdata ) public view returns ( Mint_data memory) {
        return _mintdata ;
    }
	function verify_mint_data ( Mint_data memory _mintdata 
		, string memory _signature
	) public  view returns ( address ) {
		address signer = _mintdata._minter ;
		bytes32 hashed = keccak256 ( abi.encodePacked (
    		_mintdata._target_erc1155_contract // 0
		, _mintdata._minter  // 1
		, _mintdata._itemid  // 2 es ;
		, _mintdata._amount // 3 s ; // degenerate to = 1
		, _mintdata._decimals  // 4
		, _mintdata._author_royalty  // 5 //		address _to ; // oughta be minter address in case buyer calls
		));
		address signer_recovered = recoverSigner ( bytes32 ( hashed) , bytes (_signature) ) ;
		return signer_recovered ;
	}
/** 	function verify_mint_data ( Mint_data memory _mintdata 
		, string memory _signature
	) public returns ( bool ) {		
	) public returns ( bool ) {
		address signer = _mintdata._minter ;
		bytes32 hashed = keccak256 ( abi.encodePacked ( _mintdata ));
		address signer_recovered = recoverSigner ( hashed , _signature ) ;
		return signer == signer_recovered ;
	}*/

}
