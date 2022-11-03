let library = [];

function book(title, author, pages, read) {
}

const inputBtn = document.getElementById("authorBtn");
const myText = document.getElementById("authorText");
const results = document.getElementById("results");

inputBtn.addEventListener("click", e => {
const bookCard =document.createElement('div');
    bookCard.classList.add('bookCard');

    results.appendChild(bookCard);

const titleName = document.createElement('p');
   titleName.classList.add('titleName');
   titleName.textContent =  'Title'

   bookCard.appendChild(titleName);

const authorName = document.createElement('p');
   authorName.classList.add('authorName');
   authorName.textContent = `Author`;

   bookCard.appendChild(authorName);

const pagesNum = document.createElement('p');
    pagesNum.classList.add('pagesNum');
    pagesNum.textContent = '#s';

    bookCard.appendChild(pagesNum);

const readYet = document.createElement('p');
    readYet.classList.add('readYet');
    readYet.textContent = 'Yes/No';

    bookCard.appendChild(readYet);
})

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Test');

function addBookToLibrary() {
    
}

//const story = new addBookToLibrary('Tolkein', 'hobbit', '295', 'yes'); 
