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

    console.log(movie);
    toggleMovieModal();
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