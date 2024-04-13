// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info("1/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse.");

/**
 * Get the hypotenuse of a triangle.
 * @param {number} a The side's length of a triangle
 * @param {number} b The side's length of a triangle
 * @returns {number} The hypotenuse.
 */
function getHypotenuse(a, b) {
    // a**2 + b**2 = c**2;
    // c = Math.sqrt(a**2 + b**2);
    return Math.hypot(a, b)
}

console.log(getHypotenuse(3, 4));
console.log(getHypotenuse(2.75, 8));

/* ------------------------------------------------------*/

console.info("2/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous.");

const user1 = { firstName: "Paul", lastName: "Rick", age: 35 };
const user2 = { firstName: "Samir", lastName: "Ah", age: 22 };
const user3 = { firstName: "Loanne", lastName: "Bourdin", age: 28 };
const user4 = { firstName: "Abdel", lastName: "Dems", age: 44 };

/**
 * Get firstname and lastname from oldest user.
 * @param {object} user1 - user data in object.
 * @param {object} user2 - user data in object.
 * @returns {string} - Get firstname and lastname.
 */
function getOldestUser(user1, user2) {

    const eldest = user1.age > user2.age ? user1 : user2;

    return eldest.firstName + " " + eldest.lastName;
}



console.log(getOldestUser(user1, user2));
console.log(getOldestUser(user3, user4));

/* ------------------------------------------------------*/

console.info("3/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau de nombres, quelqu'en soit la taille.");
/**
 * Get the max value from array
 * @param {array} array  - the array
 * @returns {number} - return max number
 */
function getMaxValue(array) {
    return Math.max(
        ...array
            .map(parseFloat)
            .filter(v => typeof v === "number" && !isNaN(v))
    );
}

// const arrayNumber = array.filter(function(value){
//     return typeof value === "number";
// });
// console.log(arrayNumber);
// return Math.max(...arrayNumber);

console.log(getMaxValue([25, 55, 32, 65]));
console.log(getMaxValue([258, "55", "JeanPaul", 65, "589"]));

/* ------------------------------------------------------*/

console.info("4/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot.");
/**
 * get occurence of texte
 * @param {string} txt the text you want the words occurences from
 * @returns {object} object listing all occurences of word
 */
function countRepeatedOccurenceOfWords(txt) {
    let words = {};
    for (const word of txt.split(' ')) {
        if (words[word] === undefined) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }
    return words;
}

function countRepeatedOccurenceOfWords2(txt) {
    let words = {};
    txt.match(/[\wÀ-ú]+/g).foreach(word => {
        words[word] = (words[word] || 0) + 1;
    });
    return words;
}

console.log(countRepeatedOccurenceOfWords("Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot"));
console.log(countRepeatedOccurenceOfWords("Ceci est une tarte aux pommes pleines de pommes."));

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres.");

function getRandomBetweenValues(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
    // return parseInt(min + Math.floor(Math.random() * (max - min + 1)))
}

console.log(getRandomBetweenValues(3.14, 42));
console.log(getRandomBetweenValues(-5, 7));

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne une chaîne de caractère aléatoire composée de chiffres et de lettres en majuscule et minuscule, de la taille passée en paramètre.");

/**
 * return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}


/**
 * Gets a random value from an array
 * @param {array} array of datas 
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
    return array[getRandomValue(array.length - 1)];

}



function genratePassword(n) {
    let chars = [];
    let password = "";
    for (let i = 48; i <= 57; i++) {
        chars.push(String.fromCharCode(i))

    }
    for (let i = 65; i <= 90; i++) {
        chars.push(String.fromCharCode(i))

    }
    for (let i = 97; i <= 122; i++) {
        chars.push(String.fromCharCode(i))

    }

    for (let j = 0; j < n; j++) {

        password += getRandomArrayValue(chars)
    }

    return password;
}
console.log(genratePassword(5)
);
console.log(genratePassword(10)
);

/* ------------------------------------------------------*/

// console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");

// const newbie = {
//     firstName: "Paul",
//     lastName: "Bismuth",
//     birthdate: "1995-02-14",
//     job: "web developer",
//     city: "Detroit",
//     skills: ["HTML", "CSS"]
// };

/* ------------------------------------------------------*/

// console.info("7/ Implémentez une méthode retournant l'âge de Paul.");

// console.log();

/* ------------------------------------------------------*/

// console.info("8/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");

// console.log();

/* ------------------------------------------------------*/

// console.info("9/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
// console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");

// console.log();

/* ------------------------------------------------------*/

// console.info("10/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
// console.log();
