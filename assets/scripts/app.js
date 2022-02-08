const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const btnCancel = modal.querySelector(".btn--passive");
const btnConfirm = btnCancel.nextElementSibling;
const inputs = modal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const showBackdrop = () => {
  backdrop.classList.add("visible");
};

const closeBackdrop = () => {
  backdrop.classList.remove("visible");
};

const showMovieModal = () => {
  showBackdrop();
  modal.classList.add("visible");
  clearForm();
};

const closeMovieModal = () => {
  closeBackdrop();
  modal.classList.remove("visible");
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletion();
};

const cancelClickHandler = () => {
  closeMovieModal();
};

const addMovieHandler = () => {
  const title = inputs[0].value;
  const image = inputs[1].value;
  const rating = inputs[2].value;

  if (
    title.trim() === "" ||
    image.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please input valid values!");
    return;
  }

  const movie = {
    id: Math.random().toString(),
    title,
    image,
    rating,
  };

  movies.push(movie);
  closeMovieModal();
  renderMovies(movies);
};

const clearForm = () => {
  for (const input of inputs) {
    input.value = "";
  }
};

const updateUi = () => {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const renderMovie = (id, title, image, rating) => {
  const movieElement = document.createElement("li");
  movieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  movieElement.className = "movie-element";
  movieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${image}" alt="${title}" />
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    <div >

    </div>
    `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(movieElement);
};

const deleteMovie = (id) => {
  closeBackdrop();
  closeMovieDeletion();
  const toDelete = movies.findIndex((movie) => movie.id === id);
  movies.splice(toDelete, 1);
  renderMovies(movies);
};

const deleteMovieHandler = (id) => {
  showBackdrop();
  deleteMovieModal.classList.add("visible");
  const cancelDeletionButton =
    deleteMovieModal.querySelector("#cancelDeleteBtn");
  const confirmDeletionButton =
    deleteMovieModal.querySelector("#confirmDeleteBtn");
  cancelDeletionButton.addEventListener("click", closeMovieDeletion);
  confirmDeletionButton.addEventListener("click", deleteMovie);
};

const closeMovieDeletion = () => {
  closeBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const renderMovies = (movies) => {
  updateUi();
  const listRoot = document.getElementById("movie-list");
  listRoot.innerHTML = "";
  movies.map((movie) => renderMovie(movie.title, movie.image, movie.rating));
};

addBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
btnCancel.addEventListener("click", cancelClickHandler);
btnConfirm.addEventListener("click", addMovieHandler);
