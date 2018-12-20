document.addEventListener("DOMContentLoaded", function() {});
                                      // or ,  () => {};
function getBooks() {
  return fetch("http://localhost:3000/books").then(res => res.json())
    //used arrow function because it will implicitly return the value of res instead of haveing to force it to return. And it looks cleaner. the alternative would look like this:
    //            .then(function(res) {return res.json()}).then(showBooks)
  }

function showBooks() {
  //this function will take abject data and inject it into an HTMl template and then place that somewhere is the html body using document.querySelector or findbyID

  

  }





















// const book = {
//   "id": 1,
//   "title": "Picture Perfect",
//   "description": "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint.",
//   "img_url": "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//   }
//
// function initPage(){
//   fetchBooks()
//   showBook()
// }
//
// function fetchBooks(){
//   //console.log("inside of fetchBooks():", defaultState.pageNumber)
//
//   fetch(SERVER_URL).then(function(response){
//     return response.json()
//   })
//
//   .then(function(books) {
//     books.map(showBook)
//   })
// }
//
// function showBook(book){
//   let bookDiv = document.querySelector('#//where the book go?')
//
//   bookDiv.innerHTML += `<h1>${book.title}</h1>
//                         <h3>${book.description}</h3>
//                         <p>${book.img_url}</p> `
// }
