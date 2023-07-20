type Person = {
  name: string;
  age: number;
  email: string;
}

var person : Person = {
  name: "carlos",
  age: 22,
  email: "carlos.pacheco@digitalfemsa.com"
}

interface Book {
  title : string;
  author : string;
  pages: number;
}

var books : Book[] = [
  {
    title : "Clean Architecture",
    author: "Robert C. Martin",
    pages: 444,
  },
  {
    title : "Clean Code",
    author: "Robert C. Martin",
    pages: 462,
  },
  {
    title: "Fundamentals of Software Architecture",
    author: "Mark Richards, Neal Ford",
    pages: 762
  }
]

function displayBookInfo(book : Book){
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
}

books.forEach(element => {
  displayBookInfo(element);
});