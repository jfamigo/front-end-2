//  Cria a variável form para o formulário (selecionada do DOM) 
const form = document.querySelector('form');

// Cria a variável CardDiv para a div que receberá os dados informados no form (div catalogue do DOM). 
const cardDiv = document.querySelector('.catalogue');

// Criação de um array vazio que servirá para a adição dos cards
const bookCard = [];

// Adicionando o event de submit que serve para conseguirmos adicionar mais de um card sem apagar o ultimo
form.addEventListener('submit', function (event) {

  // O método Object.fromEntries() transforma um array em um objeto.
  // objeto FormData será preenchido com as chaves/valores atuais do formulário usando a propriedade name/value, e Transforma em um novo objeto. 
  const info = Object.fromEntries(new FormData(form).entries());

  // Invoca a função no momento do evento submit
  addBook(info)

  // Não deixa que a página seja carregada (resetada) quando clicado no botão Enviar 
  event.preventDefault();
});

// Cria uma função para adicionar os cartões a variável cardDiv 
function addBook(info) {

  // adiciona os valores ao array vazio, que coletamos no obj do form.
  bookCard.push(info)

  // Modificando o conteúdo HTML
  cardDiv.innerHTML = "";

  bookCard.forEach((bookInfo) => {

    const cards = document.createElement('div');
    cards.innerHTML =
      `
    <div class="container books-card">

        <!-- Cartão de Retorno do Livro -->
        <div class="container book-card">

          <div class="container card-top">

            <div class="details">
              <h2 class="name"> ${bookInfo.bookName}</h2>
              <span> <br><br> Id# ${bookInfo.bookId}</span>
            </div>

            <div class="container img-card">
              <img class="urlImg" src="${bookInfo.urlImg}" alt="Imagem do Livro">
            </div>
          </div>

          <div class="container card-info">
            <div class="container information">
              <h3>Informações:</h3>
              <ul>
                <li>Editora: ${bookInfo.publisher}</li>
                <li>Autor(a): ${bookInfo.author}</li>
                <li>Páginas: ${bookInfo.pages} </li>
                <li>Lançamento: ${bookInfo.release} </li>
              </ul>
            </div>
            <div class="container rate">
              <h3>Avaliação:</h3>
              <ul>
                <li>${bookInfo.rate}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `
    // Adiciona a classe da div (card)
    cards.setAttribute('class', 'cards');

    // Adiciona que o card é filho do cardDiv
    cardDiv.appendChild(cards);
  })
}