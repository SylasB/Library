let library = [];

function book(title, author, pages, read) {
}

const submitBtn = document.getElementById("submitBtn");
const results = document.getElementById("results");
const readBtn = document.getElementById("readYet");
const addBookBtn = document.getElementById("addBookButton");

addBookBtn.addEventListener("click", e => {
const addBookCard = document.getElementsByClassName("createBookCardNone");
    addBookCard.classList.toggle("createBookCardNone");
    addBookCard.classList.toggle("createBookCard");
    console.log('test');
})

submitBtn.addEventListener("click", e => {
const bookCard = document.createElement('div');
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
    pagesNum.textContent = userInputNumPages + ' ' + 'Pages';

    bookCard.appendChild(pagesNum);

const readYet = document.createElement('button');
    readYet.classList.add('notRead');
    readYet.textContent = 'Not Read Yet'
    

    bookCard.appendChild(readYet);
    readYet.onclick = function(){
        this.classList.toggle('readYet');
        this.classList.toggle('notRead');
        if (readYet.classList == 'readYet') {
            this.textContent = 'Read';
        } 
        else {
            this.textContent = 'Not Read'
        }
    };

const trashCard = document.createElement('button');
    trashCard.classList.add('trashCard');
    trashCard.innerHTML = " <img src = \'icons8-trash-can-50.png\' alt = \'Trash can Image\'>";    
    
    bookCard.appendChild(trashCard);
    trashCard.onclick = function() {
        this.parentNode.remove(this);
    }

});

function readToggle() {
  //document.getElementById("readYet").classList.toggle('notRead');
    readBtn.classList.toggle('notRead');
    readBtn.classList.toggle('readYet');
}



//readBtn.addEventListener('click', function(){
    //this.classList.toggle('notRead');
    //this.classList.toggle('readYet');
//})

function addBookToLibrary() {
    
}

//const story = new addBookToLibrary('Tolkein', 'hobbit', '295', 'yes'); 
