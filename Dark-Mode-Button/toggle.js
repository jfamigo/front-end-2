/* 
    João Francisco Amigo Gimenes
*/

//Selecinando os elementos através do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let section = document.querySelector('section');
let h2 = document.querySelector('h2');
let p = document.querySelector('p');


/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    if (toggleswitch.checked) { //Se verdadeiro, será realizado o código abaixo:

        /* Adiciona as classes do modo escuro nos elementos selecionados pelo query selector*/
        section.classList.add('section-on');
        h2.classList.add('h2-on');
        p.classList.add('p-on');

            
    } else { //Caso não esteja selecionado, é realizado o código abaixo:

        /* Remove as classes adicionadas anteiormente, assim, a página volta para original */
        section.classList.remove('section-on');
        h2.classList.remove('h2-on');
        p.classList.remove('p-on');
        
    }
}