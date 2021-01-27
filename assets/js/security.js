const cryptoJS = window.cryptoJS

function encryptAndHash(string, key) {
  let hash = cryptoJS.SHA3(string) // SHA3 Hashing is used
  return cryptoJS.AES.encrypt(hash, key).toString()
}

function get(url) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
      return JSON.parse(request.responseText)
    } else {
      return null
    }
  }
  request.open('GET', url, true)
  request.send()
}

window.onload = async function onLoad() {

}
