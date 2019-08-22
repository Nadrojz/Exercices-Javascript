const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Liste des entrepreneurs qui sont nés dans les années 70 : \n ");
entrepreneurs.forEach(element => {
  if (element.year > 1970 && element.year < 1980){
  console.log(element.first, element.last + ", néé en : " + element.year)};
});

console.log("");
console.log("");
console.log("Prénom et nom de tous les entrepreneurs : \n ");
entrepreneurs.map (element => {
  console.log(element.first + " " + element.last);
});

console.log("");
console.log("");
console.log("Quel âge aurait chaque entrepreneur aujourd'hui ? : \n ");
entrepreneurs.forEach(element => {
  var age = 2019 - element.year
  console.log(element.first + " " + element.last + " aurait " + age + " ans");
})

console.log("");
console.log("");
console.log("Liste des entrepreneurs par ordre alphabétique dans un array d'objets : \n ");
let entreSorted = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
entreSorted.forEach (entrepreneur => {console.log(entrepreneur.last + " " + entrepreneur.first)});
