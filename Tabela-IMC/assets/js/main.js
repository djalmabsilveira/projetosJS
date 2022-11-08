const form = document.querySelector("#imc-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputWeight = event.target.querySelector("#weight");
  const inputHeight = event.target.querySelector("#height");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult("Peso inválido", false);
    return;
  }

  if (!height) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = getImc(weight, height);
  const imcClass = getImcClass(imc);

  const msg = `Seu IMC é ${imc} (${imcClass})`;

  setResult(msg, true);
});

function createParagraph() {
  const paragraph = document.createElement("p");
  return paragraph;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const paragraph = createParagraph();

  if (isValid) {
    paragraph.classList.add("true-result-paragraph");
  } else {
    paragraph.classList.add("false-result-paragraph");
  }

  paragraph.innerHTML = msg;
  result.appendChild(paragraph);
}

function getImc(weight, height) {
  const imc = weight / (height / 100) ** 2;
  return imc.toFixed(2);
}

function getImcClass(imc) {
  const imcClass = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return imcClass[5];
  if (imc >= 34.9) return imcClass[4];
  if (imc >= 29.9) return imcClass[3];
  if (imc >= 24.9) return imcClass[2];
  if (imc >= 18.5) return imcClass[1];
  if (imc < 18.5) return imcClass[0];
}
