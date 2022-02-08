const addBtn =document.getElementById('addBtn')
const modal = document.getElementById('add-modal')
const backdrop = document.getElementById('backdrop')
const btnCancel = modal.querySelector('.btn--passive')
const btnConfirm = btnCancel.nextElementSibling
const inputs = modal.querySelectorAll('input')
const entryText = document.getElementById('entry-text')

const movies = [];

const updateUi = () => {
    if (movies.length === 0) {
        entryText.style.display = 'block'

    } else {
        entryText.style.display = 'none'
    }
}

const renderMovie = (title, image, rating) => {
    const movieElement = document.createElement('li');
    movieElement.className = 'movie-element'
    movieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${image}" alt="${title}" />
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `
    const listRoot = document.getElementById('movie-list');
    listRoot.append(movieElement)
}

const renderMovies = (movies) => {
    const listRoot = document.getElementById('movie-list');
    listRoot.innerHTML = "";
    movies.map(movie => renderMovie(movie.title, movie.image, movie.rating))
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
   modal.classList.toggle('visible')
   toggleBackdrop();
   clearForm();
}

const backdropClickHandler = () => {
    toggleMovieModal()
}

const cancelClickHandler = () => {
    toggleMovieModal();
}

const addMovieHandler = () => {
    const title = inputs[0].value
    const image = inputs[1].value
    const rating = inputs[2].value

    if (title.trim() === '' || image.trim() === '' || rating.trim() === '' || +rating < 1 || +rating > 5) {
        alert('Please input valid values!')
        return
    }

    const movie = {
        title,
        image,
        rating
    }

    movies.push(movie)
    console.log(movies);
    toggleMovieModal();
    updateUi();
    renderMovies(movies)
}

const clearForm = () => {
    for (const input of inputs) {
        input.value =''
    }
}

addBtn.addEventListener('click', toggleMovieModal )
backdrop.addEventListener('click', backdropClickHandler)
btnCancel.addEventListener('click', cancelClickHandler)
btnConfirm.addEventListener('click',  addMovieHandler)