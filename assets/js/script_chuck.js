//find the object with the name element and store it. 
var generate = document.getElementById('generate');
var joke = document.getElementById('joke');

function getAPI() {
var requestUrl ='https://api.chucknorris.io/jokes/random';
 
     fetch(requestUrl)
     .then(function(response) {
         return response.json(); 
     }) 
     .then(function(data) {
         joke.textContent= (JSON.stringify(data.value))
 });
 
 }
   //attaching eventlistener to the element, so when it's clicked on it will call the function, which is 
 generate.addEventListener("click",getAPI);
