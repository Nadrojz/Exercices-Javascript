const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Tous les livres ont ils été empruntés au moins une fois ? : ");

if(books.some(books => books.rented < 1)){
        console.log("Non");
    } else{
        console.log("Oui");
    }

console.log("");
console.log("");
console.log("Livre le plus emprunté :");
let maxRented = Math.max(...books.map(function(books){return books.rented;}))
bookMaxRented = books.find(book => book.rented === maxRented)
console.log(bookMaxRented.title);

console.log("");
console.log("");
console.log("Livre le moins emprunté :");
let minRented = Math.min(...books.map(function(books){return books.rented;}))
bookMinRented = books.find(book => book.rented === minRented)
console.log(bookMinRented.title);

console.log("");
console.log("");
console.log("Trouve le livre avec l'ID: 873495 :");
bookID873495 = books.find(book => book.id === 873495)
console.log(bookID873495.title);


console.log("");
console.log("");
console.log("Supprime le livre avec l'ID: 133712");
bookID133712 = books.findIndex(book => book.id === 133712)
books.splice(bookID133712, 1)
console.log(books);

console.log("");
console.log("");
newBooks = books
console.log("Liste des livres par ordre alphabétique : \n ");
let booksSorted = newBooks.sort((a, b) => a.title.localeCompare(b.title));
booksSorted.forEach (book => {console.log(book.title)});
