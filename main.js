// //1
// function bonjour() {
//     console.log("Bonjour");
// }
// bonjour()


// //2
// function addition(a, b) {
//     console.log(a + b);
// }
// addition(2,3)



// // 3
// function coucouP(prenom) {
//     console.log(`Bonjour ${prenom}`);
// }
// coucouP("Oussama")



// //4
// function trois(a, b, c) {
//     console.log(typeof("a", b, "c"));
// }
// trois()



// //1LOGIQUE
// function hasard(params) {
//     let i = 0;
//     let reponseJ;
//     let nombreHasard = Math.round(Math.random() * (20 - 1));
//     let difference;
//     console.log(nombreHasard);
//     while (i != 5) {
//         reponseJ = prompt("Choisi un nombre au hasard.");
//         difference = Math.abs(nombreHasard - reponseJ)
//         console.log(difference);
//         if (difference == 0) {
//             i = 5;
//         }
//         else if (difference == 1) {
//             alert('Burlant');
//             i++
//         }
//         else if (difference == 2) {
//             alert('Chaud');
//             i++
//         }
//         else if (difference <= 5) {
//             alert("Tiède");
//             i++
//         }
//         else if (difference > 5) {
//             alert("Froid");
//             i++
//         }
//     };

//     if (reponseJ == nombreHasard) {
//         alert("Bien joué");
//     }
//     else{
//         alert("Game Over");
//     }
// }

// hasard();


//2LOGIQUE

let tab = ["aBC", "dEF", 10, 20, true, false]
function tableau() {
    tab.forEach((element, index) => {
        if (typeof element === "string") {
            tab[index] = element.charAt(0).toUpperCase() + element.substr(1).toLowerCase();

        } else if (typeof element === "number") {
            tab[index] = Math.pow(element, 2);
        }
        else if (typeof element === "boolean") {
            // element == true ? tab[index] = false : tab[index] = true 
            if (element == true) {
                tab[index] = false
            } else {
                tab[index] = true
            }
        }
    });
}
tableau();
console.log(tab);




// //3LOGIQUE
// let moinMoyenne = [], moyenne = [], plusMoyenne = [];
// function tri(prenom, salaire) {
//     if (salaire < 1600) {
//         moinMoyenne.push(prenom, salaire)

//     } else if (salaire >1600 && salaire < 1800) {
//         moyenne.push(prenom, salaire)
        
//     } else if (salaire > 1800) {
//         plusMoyenne.push(prenom, salaire)
        
//     }
// }
// tri("Ou", 1900)
// console.log(moinMoyenne);
// console.log(moyenne);
// console.log(plusMoyenne);


//4LOGIQUE
function concert(prenom, age) {
    if
}


