const price = document.querySelector(".price");
const phrase = document.querySelector(".phrase");
const url = "https://goldwebscraper.onrender.com/ouro";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const formatedData = `R$${data.cotacao.toString().replace(".", ",")}`;
    price.textContent = formatedData;
  })
  .catch((err) => {
    phrase.textContent = "Erro no servidor. Contate os developers!";
    phrase.style.color = "red";
    console.log(err);
  });
