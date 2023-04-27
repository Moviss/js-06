"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;


// const temps = [14, -4, 25, 8, 11];

// console.log(Math.max(1, 6, 78, 76));
//
// console.log(Math.max(...temps));
// console.log(14, -4, 25, 8, 11);

// const copy = [...temps];

// copy.push(900);
//
// console.log(temps);
// console.log(copy);

// const arr1 = [45, 36, 98598];
// const arr2 = [929, 3847478, 78473];
//
// const mergedArrs = [...arr2, ...arr1];
//
// console.log(mergedArrs);

// const obj1 = { a: 1, b: 3 };
// const obj2 = { b: 23, c: 55 };
// const obj3 = { ...obj1, ...obj2, c: 89 };
//
// console.log(obj3);


// function sum(...args) {
//   console.log(args);
// }
//
// sum(1);
// sum(1, 45);
// sum(1, 67, 98);


// function sum(a, b, ...args) {
//   console.log(a);
//   console.log(b);
//   console.log(args);
// }
//
// sum(1);
// sum(1, 45);
// sum(1, 67, 98, 67, 98);

// const title = "Mój wspaniały tytuł!";
//
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
//
// const { title: alterTitle = "Mój wspaniały tytuł!", author, isPublic, rating, pages = 100 } = book;
//
// const accessType = isPublic ? "publiczny" : "zamknięty";
// const message = `Książka ${alterTitle} autorstwa ${author} z oceną ${rating} ma dostęp ${accessType}.`;
// const messageTwo = `Książka ${alterTitle} ma ${pages} stron.`;
//
// console.log(message);
// console.log(messageTwo);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];
//
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
//
// const {
//   name,
//   tag,
//   stats: {
//     followers,
//     views: myView = 87437473
//   }
// } = user;
//
// console.log(name);
// console.log(followers);
// console.log(myView);


// const response = ["user@mail.com", true];
//
// const [email, isActive, oneMoreThing = 'Dodatek'] = response;
//
// console.log(`Użytkownik ma email: ${email} i jest ${isActive ? 'aktywny' : 'nie aktywny'}.`);
//
// // let email, isActive;
// //
// // [email, isActive] = response;
//
// console.log(oneMoreThing);

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;
//
// console.log(colors);

// const [, green,] = rgb;
//
// console.log(green);


// function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
//   // const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // dalsza część kodu
// }
//
// const book = {
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// }
//
// doStuffWithBook(book);




































