let library = [];

function book(title, author, pages, read) {
}

const inputBtn = document.getElementById("authorBtn");
const results = document.getElementById("results");

inputBtn.addEventListener("click", e => {
const bookCard =document.createElement('div');
    bookCard.classList.add('bookCard');

    results.appendChild(bookCard);

const titleName = document.createElement('p');
    var userInputTitle = document.getElementById("bookTitle").value;
   titleName.classList.add('titleName');
   titleName.textContent =  userInputTitle;

   bookCard.appendChild(titleName);

const authorName = document.createElement('p');
    var userInputAuthor = document.getElementById("authorText").value;
   authorName.classList.add('authorName');
   authorName.textContent = userInputAuthor;

   bookCard.appendChild(authorName);

const pagesNum = document.createElement('p');
    var userInputNumPages = document.getElementById("numPages").value;
    pagesNum.classList.add('pagesNum');
    pagesNum.textContent = userInputNumPages + ' ' + 'pages';

    bookCard.appendChild(pagesNum);

const readYet = document.createElement('button');
    readYet.classList.add('readYet');
    readYet.textContent = 'Read'
    

    bookCard.appendChild(readYet);
})


function addBookToLibrary() {
    
}

//const story = new addBookToLibrary('Tolkein', 'hobbit', '295', 'yes'); 
