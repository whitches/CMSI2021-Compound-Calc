const balBox = document.querySelector("#stBal");
balBox.addEventListener("input", output);

const rateBox = document.querySelector("#intRate");
rateBox.addEventListener("input", output);

const compBox = document.querySelector("#cmpFreq");
compBox.addEventListener("input", output);

const monBox = document.querySelector("#months");
monBox.addEventListener("input", output);

const textOutput = document.querySelector("#textOutput");

function output() {
  const bal = Number(balBox.value);
  const rate = Number(rateBox.value);
  const apptime = Number(compBox.value);
  const months = Number(monBox.value);

  const apps = Math.floor(months / apptime);

  textOutput.textContent = `Final Balance: ${(
    bal *
    (1 + rate / 100 / 12 / apptime) ** (Math.floor(months) / apptime)
  ).toFixed(2)}, n = ${12 / apptime}, t = ${apptime}`;
}
