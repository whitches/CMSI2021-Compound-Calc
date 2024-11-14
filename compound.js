const balanceBox = document.querySelector("#startingBalance");
balanceBox.addEventListener("input", output);

const rateBox = document.querySelector("#interestRate");
rateBox.addEventListener("input", output);

const compoundBox = document.querySelector("#compoundFrequency");
compoundBox.addEventListener("input", output);

const monthBox = document.querySelector("#months");
monthBox.addEventListener("input", output);

const textOutput = document.querySelector("#textOutput");

function output() {
  const balance = Number(balanceBox.value);
  const rate = Number(rateBox.value);
  const appliedTime = Number(compoundBox.value);
  const months = Number(monthBox.value);

  textOutput.textContent = `Final Balance: ${(
    balance *
    (1 + (rate / 100 / 12) * appliedTime) ** (Math.floor(months) / appliedTime)
  ).toFixed(2)}`;
}
