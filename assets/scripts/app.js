const addBtn =document.getElementById('addBtn')
const modal = document.getElementById('add-modal')
const backdrop = document.getElementById('backdrop')

const toggleMovieModal = () => {
   modal.classList.toggle('visible')
   backdrop.classList.toggle('visible')
}

addBtn.addEventListener('click', toggleMovieModal )
backdrop.addEventListener('click', toggleMovieModal)