import {
  ecrecover,
  pubToAddress,
  hashPersonalMessage,
  toBuffer,
  fromRpcSig,
} from 'ethereumjs-util';

/**
 * Returns true if the signature is valid for the provided message + address.
 * @param {String} address - "0x" prefixed address
 * @param {String} message - The raw (i.e. not hashed) message that was signed
 * @param {String} signature - The signature
 */
function verifySignature(address, message, signature) {
  /*
    web3.js methods for recovering addresses are lacking, so we use ethereumjs-util instead.
    - web3.eth.accounts.recover(message, signature) doesn't handle "—" characters correctly, among other things
    - web3.eth.personal.ecRecover(message, signature) requires a connected wallet :(
  */
  const hash = hashPersonalMessage(toBuffer(message));
  const { v, r, s } = fromRpcSig(signature);
  const pubKey = ecrecover(hash, v, r, s);
  const recoveredAddress = "0x" + pubToAddress(pubKey).toString('hex');

  // Do a case-insensitive match because the case of the address returned by pubToAddress 
  // does not always match the case of the address from the web3 provider.
  return recoveredAddress.toUpperCase() === address.toUpperCase();
}

export default verifySignature;