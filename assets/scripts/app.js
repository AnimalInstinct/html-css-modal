const addBtn =document.getElementById('addBtn')
const modal = document.getElementById('add-modal')
const backdrop = document.getElementById('backdrop')
const btnCancel = modal.querySelector('.btn--passive')

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
   modal.classList.toggle('visible')
   toggleBackdrop();
}

const backdropClickHandler = () => {
    toggleMovieModal()
}

const cancelClickHandler = () => {
    toggleMovieModal();
}

addBtn.addEventListener('click', toggleMovieModal )
backdrop.addEventListener('click', backdropClickHandler)
btnCancel.addEventListener('click', cancelClickHandler)