const mulaiPencarian = document.getElementById('mulaiPencarian');
const searchInput = document.querySelector('.search__input');
// --
const navMenus = document.querySelectorAll('.nav__menu');
// --
const starClicked = document.querySelectorAll('.star-clicked');
const starUnclicked = document.querySelectorAll('.star-unclicked');

const titleLandingPage = 'Kami percaya bahwa penelitian hebat\ndimulai dari teman kolaborasi yang tepat.'


const mulaiPencarianFunc = () => {
    searchInput.style.width = '80%';
    searchInput.classList.add('search__input--active');
    searchInput.classList.add('rounded-start-1');
    searchInput.classList.remove('border-0');
    searchInput.classList.remove('rounded-0');

    mulaiPencarian.classList.add('mulai-pencarian--active');
    mulaiPencarian.classList.remove('rounded-0');
    mulaiPencarian.classList.add('rounded-end-1');
}

mulaiPencarian?.addEventListener('click', () =>
    mulaiPencarianFunc()
)

navMenus?.forEach(navMenu => {
    navMenu.addEventListener('click', el => {
        const keEldariEl = []
        const valNav = {
            'penelitian': 0,
            'diskusi': 1,
            'anggota': 2,
        }

        navMenus.forEach(navMenu => {
            if (navMenu == el.target) {
                keEldariEl.push(valNav[el.target.getAttribute('data-bs-nav')])
            }

            if (navMenu.classList.contains('nav-active') || navMenu.classList.contains('nav-active-once')) {
                keEldariEl.push(valNav[navMenu.getAttribute('data-bs-nav')])

                navMenu.classList.remove('nav-active')
                navMenu.classList.remove('nav-active-once')

                const classForNav = keEldariEl[0] < keEldariEl[1] ? 'from-left' : 'from-right'

                navMenu.classList.add(classForNav, "change-active")
                setTimeout(() => {
                    navMenu.classList.remove(classForNav, "change-active")
                }, 250)
            }

            if (navMenu == el.target) {
                const classForNav = keEldariEl[0] < keEldariEl[1] ? 'from-left' : 'from-right'
                setTimeout(() => {
                    el.target.classList.add(classForNav, "change-active")
                }, 250)

                setTimeout(() => {
                    navMenu.classList.remove(classForNav)
                    el.target.classList.add('nav-active')
                }, 500)

                const dataNav = el.target.getAttribute('data-bs-nav')

                const dataNavTarget = document.querySelector(`.${dataNav}-wrapper`)
                dataNavTarget.classList.remove('d-none')
                const menuContentWrapper = document.querySelector('.menu-content-wrapper')

                for (child of menuContentWrapper.children) {
                    if (child != dataNavTarget) {
                        child.classList.add('d-none')
                    }
                }
            }
        })
    })
})

starUnclicked?.forEach(star => {
    star.addEventListener('click', () => {
        star.classList.add('d-none');
        // star clicked active
        star.parentNode.children[1].classList.remove('d-none');
    })
})

starClicked?.forEach(star => {
    star.addEventListener('click', () => {
        star.classList.add('d-none');
        // star unclicked active
        star.parentNode.children[0].classList.remove('d-none');
    })
})


// create typing effect
const typingEffect = (text, element, delay = 100) => {

    if(element == undefined) {
        return
    }
    let i = 0;
    const firstWordLength = text.split(' ')[0].length;
    const typing = () => {
        if (i == firstWordLength) {
            mulaiPencarianFunc()
        }
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        } else {
            element.nextElementSibling.remove()
        }

    }
    typing();
}

typingEffect(titleLandingPage, document.querySelector('#title-landing-page'), 50);

// code for initiate ckeditor
ClassicEditor?.create(document.querySelector('#editor'))
    .then(editor => {
        const ckToolbar = document.querySelector('.ck.ck-toolbar__items');

        ckToolbar.childNodes[11].classList.add('d-none');
        ckToolbar.childNodes[12].classList.add('d-none');
        // console.log(ckToolbar.childNodes);

        editor.editing.view.change(writer => {
            writer.setStyle('min-height', '123px', editor.editing.view.document.getRoot());
        });
        window.editor = editor;
    })
    .catch(error => {
        console.error(error);
    });
