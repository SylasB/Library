let library = [];

function book(title, author, pages, read) {
}

const inputBtn = document.getElementById("authorBtn");
const myText = document.getElementById("authorText");
const results = document.getElementById("results");

inputBtn.addEventListener("click", e => {
const titleName = document.createElement('div');
   titleName.classList.add('titleName');
   titleName.textContent =  'Title'

   results.appendChild(titleName);

const authorName = document.createElement('div');
   authorName.classList.add('authorName');
   authorName.textContent = `Author`;

   titleName.appendChild(authorName);

const pagesNum = document.createElement('div');
    pagesNum.classList.add('pagesNum');
    pagesNum.textContent = '#';

    titleName.appendChild(pagesNum);

const readYet = document.createElement('div');
    readYet.classList.add('readYet');
    readYet.textContent = 'Yes/No';

    titleName.appendChild(readYet);
})

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

function addBookToLibrary() {
    
}

//const story = new addBookToLibrary('Tolkein', 'hobbit', '295', 'yes'); 
