const keysURL = 'https://twango-dev.github.io/cca-medriven-website/security/keys.json'

function get(url, callback) {
  let request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.send()
  request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
      callback(request)
    }
  }
}

function hasherOnLoad() {

  get(keysURL, function(request) {
    let json = JSON.parse(request.responseText)
    let PSWDSECRET = json['SHA-256-PASSKEY']

    const hashEncryptInput = document.getElementById('hashEncrypt.input')
    const hashEncryptHash = document.getElementById('hashEncrypt.hash')
    const hashEncryptEncrypted = document.getElementById('hashEncrypt.encryptedHash')
    document.getElementById('hashEncrypt').addEventListener('input', function(input) {
      let string = input.target.value

      let hash = CryptoJS.SHA3(string)
      let encrypted = CryptoJS.AES.encrypt(hash, PSWDSECRET).toString()

      hashEncryptInput.innerHTML = string
      hashEncryptHash.innerHTML = hash
      hashEncryptEncrypted.innerHTML = encrypted
    })

    const hashDecryptInput = document.getElementById('hashDecrypt.input')
    const hashDecryptDecryptedHash = document.getElementById('hashDecrypt.hash')
    document.getElementById('hashDecrypt').addEventListener('input', function(input) {
      let string = input.target.value

      let hash = CryptoJS.AES.decrypt(string, PSWDSECRET)

      hashDecryptInput.innerHTML = string
      hashDecryptDecryptedHash.innerHTML = hash

    })
  })
}
