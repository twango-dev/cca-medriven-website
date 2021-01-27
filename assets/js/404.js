var secondsUntilRefresh = 5

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

window.onload = async function onLoad() {
    for (let i = secondsUntilRefresh; i > 0; i--) {
      document.getElementById("timeUntilRefresh").innerHTML = i
      await sleep(1000)
    }
    window.location.href = "https://twango-dev.github.io/cca-medriven-website/"
}
