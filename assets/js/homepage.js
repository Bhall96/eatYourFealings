//Global variables
const happyEl = document.querySelector('#happy');
const sadEl = document.querySelector('#sad');
const angryEl = document.querySelector('#angry');
const proudEl = document.querySelector('#proud');
const boredEl = document.querySelector('#bored');
const hungoverEl = document.querySelector('#hungover');
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

//Funtion that runs when an emotion is click
function whenClicked(event) {
    
    //assigning an event target to a variable
    var id = event.target.id
    
    //conditional state for what emotion is clicked 
    if(id === 'happy') {
        var happy = [52768, 52893, 53049, 53013, 52776, 52915, 52780, 52862, 53014, 52908, 52770];
      
        index = Math.floor(Math.random() * happy.length);
      
        var queryString = './index2.html?q=' + happy[index];
      
    } else if(id === 'sad') {
        var sad = [52891, 53041, 52791, 52787, 53015, 52858, 52861, 52968, 52833];
      
        index = Math.floor(Math.random() * sad.length);
      
        var queryString = './index2.html?q=' + sad[index];
      
    } else if(id === 'proud') {
        var proud = [52892, 53042, 52024, 52803, 52905, 52951, 52773, 52993, 52935, 52917];
      
        index = Math.floor(Math.random() * proud.length);
      
        var queryString = './index2.html?q=' + proud[index];
      
    } else if(id === 'bored') {
        var bored = [52764, 53044, 52928, 52966, 52957, 52890, 52669, 52924, 52987, 52901];
      
        index = Math.floor(Math.random() * bored.length);
      
        var queryString = './index2.html?q=' + bored[index];
      
    } else if(id === 'hungover') {
        var hungover = [52769, 52855, 52965, 52995, 52895, 52829, 52781, 52013, ];
      
        index = Math.floor(Math.random() * hungover.length);
      
        var queryString = './index2.html?q=' + hungover[index];

    } else if(id === 'angry') {
       var queryString=("https://www.snickers.com/");
       
       
    } else {
        return;
    };
    //when click you are taken to the location of the querystring    
    location.assign(queryString);
};

//event listener that our funtion 
this.addEventListener('click', whenClicked);

//nav bar drop down menu for mobile 
burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
})
