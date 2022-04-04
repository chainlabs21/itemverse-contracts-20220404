// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC1155/IERC1155.sol)
pragma solidity ^0.8.0;
// import "../../utils/introspection/IERC165.sol";
/**
 * @dev Required interface of an ERC1155 compliant contract, as defined in the
 * https://eips.ethereum.org/EIPS/eip-1155[EIP].
 *
 * _Available since v3.1._
 */
interface IERC1155  { // is IERC165

	function _acting_contracts ( address _address ) external view returns ( bool _status) ;
	function set_acting_contracts( address _address , bool _status ) external ;

	function safeTransferFrom (
		address from,
		address to,
		uint256 id,
		uint256 amount,
		bytes calldata data
	) external ;
	function safeBatchTransferFrom (
		address from,
		address to,
		uint256[] calldata ids,
		uint256[] calldata amounts,
		bytes calldata data
	) external;
	function mint (
		address to, //		1 uint256 id,
		string memory _itemhash , // 2
		uint256 amount, // 3
		uint256 __author_royalty , // 4
		uint256 __decimals , // 5
		bytes memory data // 6
	) external returns ( uint256 );

	function mint (
		address to, //		uint256 id,
		string memory _itemhash ,
		uint256 amount,
		bytes memory data
	) external ;
	function mintBatch (
		address to, //			uint256[] memory ids,
		string [] memory _itemhashes ,
		uint256[] memory amounts,
		uint256 [] memory __author_royalty ,
		bytes memory data
	) external returns ( uint256 [] memory ) ;

	function burn (
		address from,
		uint256 id,
		uint256 amount
	)	external ;
	function burnBatch (
		address from,
		uint256[] memory ids,
		uint256[] memory amounts
	) external ;
  event TransferSingle (
			address indexed operator
		, address indexed from
		, address indexed to
		, uint256 id
		, uint256 value ); /**     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.     */
  event TransferBatch(
		address indexed operator,
		address indexed from,
		address indexed to,
		uint256[] ids,
		uint256[] values
  );
	function _itemhash_tokenid ( string memory  ) external view returns (uint256 ) ; // content id mapping ( string => uint256 ) public
	function _tokenid_itemhash ( uint256 ) external view returns ( string memory ) ; // mapping (uint256 => string ) public

	function _token_id_global () external view returns ( uint256 ) ;
	function _author_royalty ( uint256 ) external view  returns ( uint );
	event ApprovalForAll(address indexed account, address indexed operator, bool approved); /**     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to     * `approved`.     */
	event URI(string value, uint256 indexed id);     /**     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.     *     * If an {URI} ev ent was emitted for `id`, the standard     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value     * returned by {IERC1155MetadataURI-uri}.     */    
  function balanceOf(address account, uint256 id) external view returns (uint256); /**     * @dev Returns the amount of tokens of token type `id` owned by `account`.     *     * Requirements:     *     * - `account` cannot be the zero address.     */    
  function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)        external        view        returns (uint256[] memory); /**     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.     *     * Requirements:     *     * - `accounts` and `ids` must have the same length.     */    
  function setApprovalForAll(address operator, bool approved) external; /**     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,     *     * Emits an {ApprovalForAll} ev ent.     *     * Requirements:     *     * - `operator` cannot be the caller.     */    
  function isApprovedForAll(address account, address operator) external view returns (bool);		/**     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.     *     * See {setApprovalForAll}.     */
	function _author ( uint256 ) external view returns ( address ) ;
//	mapping ( uint256=> address ) public _author ; // do struct if more than two
}
/*	function transfer (
			address from 
		, address to
		, uint256 id
		, uint256 amount
	) external ;
function transferSingle (
			address from 
		, address to
		, uint256 id
		, uint256 amount
	) external ;
	function transferBatch (
			address from 
		, address to
		, uint256 [] ids
		, uint256 [] amounts
	) external ;
*/
    /**
     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.
     *
     * Emits a {TransferSingle} eve nt.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - If the caller is not `from`, it must be have been approved to spend ``from``'s tokens via {setApprovalForAll}.
     * - `from` must have a balance of tokens of type `id` of at least `amount`.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.
     *
     * Emits a {TransferBatch} ev ent.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
     * acceptance magic value.
     */
