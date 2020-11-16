// ------------------------------------menu avec une side bar ouvrante/fermante  ----------------------- 
// cherche le class .menu dans HTML et stoker une variable "menu"
const menu = document.querySelector(".menu");
// cherche le class .sous dans HTML et stoker une variable "sous"
const sous = document.querySelector(".sous");
// afficher le value de variable menu et sous
console.log(menu);
console.log(sous);
// Mettre un écouter sur l'élément: on ajoute le class sous1 dans CSS sur le class sous dans HTML
// on appliquer confortement de class "sous1" dans CSS sur HTML quand on click icon "menu"
menu. addEventListener ("click", () => {
    sous.classList.toggle('sous1');
});

// ------------------------------------ Srcoll reveal ----------------------- 
const sr=ScrollReveal( {
    duration : 1500
 });
 ScrollReveal().reveal( '.article',{
    delay : 500});
 

