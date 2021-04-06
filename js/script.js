const openSearch = document.getElementById('open-search');
const closeSearch = document.getElementById('close-search');

const search = document.querySelector('.search');
const searchInput = document.getElementById('search');
const logo = document.querySelector('.logo');
const login = document.querySelector('.login');
const sign = document.querySelector('.sign');

openSearch.addEventListener('click', () => {
    closeSearch.style.display = 'block';
    openSearch.style.display = 'none';

    logo.style.display = 'none';
    login.style.display = 'none';
    sign.style.display = 'none';

    search.classList.add('show');
});

closeSearch.addEventListener('click', () => {
    closeSearch.style.display = 'none';
    openSearch.style.display = 'block';

    logo.style.display = 'block';
    login.style.display = 'block';
    sign.style.display = 'block';

    search.classList.remove('show');
});

searchInput.addEventListener('focusin', () => {
    search.style.opacity = '1';
});

searchInput.addEventListener('focusout', () => {
    search.style.opacity = '.75';
});

const imagesAndCreator = [
    {
        img: 'Dawn_of_Another_Day_Sky_Matthews.jpg',
        artName: 'Dawn of another day',
        author: 'Sky Matthews'
    },
    {
        img: 'Frosch_Bokeh_2_Axel_F.jpg',
        artName: 'Frosch bokeh 2',
        author: 'Axel F'
    },
    {
        img: 'Europes_best_View_Fabian_Fortmann.jpg',
        artName: 'Europes best view',
        author: 'Fabian Fortmann'
    },
    {
        img: 'sunset_1663_Junji_Aoyama.jpg',
        artName: 'Sunset 1663',
        author: 'Junji Aoyama'
    },
    {
        img: 'Tree_and_Morning_Mist_Jos_Buurmans.jpg',
        artName: 'Tree and morning mist',
        author: 'Jos Buurmans'
    },
    {
        img: 'Untitled_Jorge_Guadalupe_Lizarraga.jpg',
        artName: 'Albuquerque, New Mexico',
        author: 'Jorge Guadalupe'
    },
    {
        img: 'Mists_of_renfrew_Adam_Gibbs.jpg',
        artName: 'Mists of renfrew',
        author: 'Adam Gibbs'
    }
]

const main = document.querySelector('main');
const artName = document.getElementById('artName');
const authorName = document.getElementById('authorName');

let currentImage = 0;

setInterval(() => {

    if (currentImage > imagesAndCreator.length - 1) {
        currentImage = 0;
    }

    changeOpacity();

    main.style.backgroundImage = `url(../img/${imagesAndCreator[currentImage].img})`;
    artName.innerText = imagesAndCreator[currentImage].artName;
    authorName.innerText = `por ${imagesAndCreator[currentImage].author}`;

    currentImage++;
}, 5000);

const showlangs = document.getElementById('showlangs');

showlangs.addEventListener('click', () => {
    const langsOptions = document.querySelector('.langs__options');

    langsOptions.classList.toggle('show');
});

function changeOpacity() {
    main.animate([
        { opacity: '0.2' },
        { opacity: '1' }
    ], {
        duration: 1000,
        easing: 'ease-in-out'
    })
}