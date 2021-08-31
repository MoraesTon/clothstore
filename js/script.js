//'json' part

let api = [
  {
    "id": "01",
    "type": "Roupa feminina",
    "productName": "Jaqueta Feminina",
    "productColor": "Preta",
    "value": "R$ 450,00",
    "productSizes": ["XP", "P", "M", "G", "XG"],
    "details": "Jaqueta feminina em material sintético na cor preta.",
    "fit": "O tamanho XP veste x, o tamanho P veste p..."
  },
  {
    "id": "02",
    "type": "Roupa feminina",
    "productName": "Jaqueta Feminina",
    "productColor": "Sarge",
    "value": "R$ 450,00",
    "productSizes": ["XP", "P", "M", "G", "XG"],
    "details": "Jaqueta feminina em material sintético na cor preta.",
    "fit": "O tamanho XP veste x, o tamanho P veste p..."
  }
]

// Interactive part of the code;

let thumbs = document.querySelectorAll('.ico');
const mainImg = document.querySelector('.main-img');

for(let t = 0; t < thumbs.length; t++) {

  thumbs[0];
  thumbs[t].addEventListener('mouseover', () => {
    function setImg() {
      mainImg.setAttribute('src', `./assets/img${t}.jpg`);
    }
    switch (t) {
      case 0:
        setTimeout(setImg, 500);
        break;
      case 1:
        setTimeout(setImg, 500);
        break;
      case 2:
        setTimeout(setImg, 500);
        break;
      case 3:
        setTimeout(setImg, 500);
        break
      case 4:
        setTimeout(setImg, 500);
        break
    }
  });
}

// Modeling class to create an render an element on page

class Product {
  constructor (id, type, productName, productColor, value, productSizes, details, fit) {
    this.id = id;
    this.type = type;
    this.productName = productName;
    this.productColor = productColor;
    this.value = value;
    this.productSizes = productSizes;
    this.details = details;
    this.fit = fit;
  }
}

let result = {...api[0]};
const p = document.querySelector('#root');

const jaqueta = new Product(result.id, result.type, result.productName, result.productColor, result.value, result.productSizes, result.details, result.fit);

let imprimeProduto = function (produto) {
  return `
  <p><strong>Meu Produto</strong><br>
    ${produto.productName}<p>
  <p><strong>${produto.value}</strong><p>
  <p>Cor: ${produto.productColor}<p>

  <p>Tamanhos: ${produto.productSizes}<p>

  <p>Detalhes: ${produto.details}<p>

  <p>Medidas: ${produto.fit}<p>
  
  `
}