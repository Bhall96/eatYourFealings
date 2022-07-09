// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
    
burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
})

const happyEl = document.querySelector('#happy'),
    sadEl = document.querySelector('#sad'),
    angryEl = document.querySelector('#angry'),
    proudEl = document.querySelector('#proud'),
    boredEl = document.querySelector('#bored'),
    hungoverEl = document.querySelector('#hungover');

    function handdleClickHappy(event) {
        event.preventDefault();

        var happy = [1, 2, 3, 4, 5];

        index = Math.floor(Math.random() * happy.length);

        var queryString = './index2.html?q=' + happy[index];

        location.assign(queryString);
    }

    function handdleClickSad(event) {
        event.preventDefault();

        var sad = [1, 2, 3, 4, 5];

        index = Math.floor(Math.random() * sad.length);

        var queryString = './index2.html?q=' + sad[index];

        location.assign(queryString);
    }

    function handdleClickAngry(event) {
        event.preventDefault();

        var angry = [1, 2, 3, 4, 5];

        index = Math.floor(Math.random() * angry.length);

        var queryString = './index2.html?q=' + angry[index];

        location.assign(queryString);
    }

    function handdleClickProud(event) {
        event.preventDefault();

        var proud = [1, 2, 3, 4, 5];

        index = Math.floor(Math.random() * proud.length);

        var queryString = './index2.html?q=' + proud[index];

        location.assign(queryString);
    }

    function handdleClickBored(event) {
        event.preventDefault();

        var bored = [1, 2, 3, 4, 5];

        index = Math.floor(Math.random() * bored.length);

        var queryString = './index2.html?q=' + bored[index];

        location.assign(queryString);
    }

    function handdleClickHungover(event) {
        event.preventDefault();

        var hungover = [1, 2, 3, 4, 5];

        index = Math.floor(Math.random() * hungover.length);

        var queryString = './index2.html?q=' + hungover[index];

        location.assign(queryString);
    }


    happyEl.addEventListener('click', handdleClickHappy);
    sadEl.addEventListener('click', handdleClickSad);
    angryEl.addEventListener('click', handdleClickAngry);
    proudEl.addEventListener('click', handdleClickProud);
    boredEl.addEventListener('click', handdleClickBored);
    hungoverEl.addEventListener('click', handdleClickHungover);