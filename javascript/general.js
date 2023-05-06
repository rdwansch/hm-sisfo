const mulaiPencarian = document.getElementById('mulaiPencarian');
const searchInput = document.querySelector('.search__input');


mulaiPencarian.addEventListener('click', () => {
    searchInput.style.width = '80%';
    searchInput.classList.add('search__input--active');
    searchInput.classList.add('rounded-start-1');
    searchInput.classList.remove('border-0');
    searchInput.classList.remove('rounded-0');

    mulaiPencarian.classList.add('mulai-pencarian--active');
    mulaiPencarian.classList.remove('rounded-0');
    mulaiPencarian.classList.add('rounded-end-1');
})
