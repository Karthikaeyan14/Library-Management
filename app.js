const books = [
    { title: 'Ashnner Grover'},
    { title: 'It Ends With Us'},
    { title: 'The Psychology of Money'},
    { title: 'The Midnight Library'},
    { title: 'Colleen Hoover'},
    { title: 'Naruto' },
    { title: 'Emotion Intelligence'},
    { title: 'What do You do with an Idea?'},
    
    
    // Add more book data as needed
];
window.onscroll=()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload=()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

let loginform=document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginform.classList.remove('active');
}

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');

searchInput.addEventListener('input', handleInput);

function handleInput() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm) ||
        String(book.year).includes(searchTerm)
    );

    displaySuggestions(filteredBooks);
}

function displaySuggestions(filteredBooks) {
    suggestionsContainer.innerHTML = '';

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author} (${book.year}) - ${book.genre}`;
            listItem.addEventListener('click', () => {
                searchInput.value = `${book.title} by ${book.author}`;
                suggestionsContainer.style.display = 'none';
            });
            suggestionsContainer.appendChild(listItem);
        });

        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

// Close suggestions when clicking outside the search container
document.addEventListener('click', function (event) {
    const isClickInside = suggestionsContainer.contains(event.target) || searchInput.contains(event.target);

    if (!isClickInside) {
        suggestionsContainer.style.display = 'none';
    }
});
var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides:true,
   autoplay:{
    delay:1500,
    disableOnInteraction:false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1, 
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:1500,
     disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
     },
   });