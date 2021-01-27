const cryptoJS = window.cryptoJS

function encryptAndHash(string, key) {
  let hash = cryptoJS.SHA3(string) // SHA3 Hashing is used
  return cryptoJS.AES.encrypt(hash, key).toString()
}
