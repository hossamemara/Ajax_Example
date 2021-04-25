var mymeal = document.querySelector('#meal');
var mealsUrl = document.querySelectorAll('.nav-link');


var recipts = []
getReciptUrl();
getRecipt('pizza');

function getReciptUrl() {
    for (var i = 0; i < mealsUrl.length; i++) {
        mealsUrl[i].addEventListener('click', function (e) {
            var meal = e.target.text;
            getRecipt(meal);
        })
    }
}


function getRecipt(meal) {

    var myRequest = new XMLHttpRequest();
    if (meal == 'pizza (current)') {
        meal = 'pizza'
    }
    
    myRequest.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${meal}`)

    myRequest.send();
    myRequest.addEventListener('readystatechange', function (e) {
        if (myRequest.readyState == 4) {

            recipts = JSON.parse(myRequest.response).recipes;
            console.log(recipts);
            displayRecipts();

        }
    })

}
function displayRecipts() {
    var reciptsContainer = '';
    for (var i = 0; i < recipts.length; i++) {
        reciptsContainer +=

            `
    <div id='meal' class="col-lg-3 col-md-4 col-sm-6 my-2">
        <div class='meal podition-relative'>
          <img  class='w-100 img-recipt' src='${recipts[i].image_url}'>
          <h4>${recipts[i].title}</h4>
          <button class="btn btn-success position-absolute" id='Visit-btn'><a href="${recipts[i].source_url}" target='_blank'>Visit Meal</a></button>
          <button class="btn btn-danger position-absolute" id='details-btn'><a href='details.html?rec=${recipts[i].recipe_id}' target='_blank'>Meal Details</a></button>
          
        </div>         
    </div>
  
       
        `

    }
    mymeal.innerHTML = reciptsContainer;
}