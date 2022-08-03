// * Array com as opções de jogo
const plays = [

  `pedra`,
  `papel`,
  `tesoura`

];

// * Computador escolhe entre as três opções: pedra, papel ou tesoura
const computerPlay = () => {

  return plays[parseInt(Math.random() * 3)];

};

// * função que o usuário dá um input na palavra e verifica se a palavra é correta (tem que ser uma das três opções). Caso inválida, aparece um alerta 
const userPlay = play => {

  if (plays.includes(play)) {

      return play;

  } else {

      alert(`Opção Inválida`);

  }

};

// * verifica os possíveis resultados para cada opção
const checkUserWins = (userPlay, computerPlay) => {

  // * Usuário ganha jogando pedra
  if(userPlay === `pedra`) {

      switch(computerPlay) {

          case `pedra`:

              break;

          case `papel`:

              computerWins++;
              break;

          case `tesoura`:

              userWins++;
              break;

      };

  // * usuário ganha jogando papel
  } else if(userPlay === `papel`) {

      switch(computerPlay) {

          case `pedra`:

              userWins++;
              break;

          case `papel`:

              break;

          case `tesoura`:

              computerWins++;
              break;

      };

  // * usuário ganha jogando teroura
  } else if(userPlay === `tesoura`) {

      switch(computerPlay) {

          case `pedra`:

              computerWins++;
              break;

          case `papel`:

              userWins++;
              break;

          case `tesoura`:

              break;

      };

  };

};

// * Função para executar o jogo
const playGame = () => {

  // * Captura o input do usuário
  let userPlayed = userPlay(prompt(`Jokenpô! Pedra, Papel ou Tesoura?`));

  let computerPlayed = computerPlay();

  // * função que checa o resultado
  checkUserWins(userPlayed, computerPlayed);

  // * Mostra o round
  alert(`
      Usuário escolheu: ${userPlayed}
      Computador escolheu: ${computerPlayed}

      Pontos do Computador: ${computerWins}
      Pontos do PC: ${userWins}
  `);    

  // * O jogador que ganha duas rodadas é declarado vencedor
  if(userWins >= 2) {

      alert(`Usuário Ganhou`);

  } else if(computerWins >= 2) {

      alert(`Computador Ganhou`);

  };

  // * Se ninguem acerta
  while(userWins < 2 && computerWins < 2) {

      playGame();

  };

}

// * guarda os pontos de cada jogador
let computerWins = 0;
let userWins = 0;

// * Chama a função principal
playGame();