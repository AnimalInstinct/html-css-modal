const addBtn =document.getElementById('addBtn')
const modal = document.getElementById('add-modal')
const backdrop = document.getElementById('backdrop')
const btnCancel = modal.querySelector('.btn--passive')
const btnConfirm = btnCancel.nextElementSibling
const inputs = modal.querySelectorAll('input')

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

const addMovieHandler = () => {
    const titleValue = inputs[0].value
    const imageValue = inputs[1].value
    const ratingValue = inputs[2].value

    if (titleValue.trim() === '' || imageValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please input valid values!')
    }
}

addBtn.addEventListener('click', toggleMovieModal )
backdrop.addEventListener('click', backdropClickHandler)
btnCancel.addEventListener('click', cancelClickHandler)
btnConfirm.addEventListener('click',  addMovieHandler)