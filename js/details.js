
var reciptsId = new URLSearchParams(location.search);
var recipts_Id = reciptsId.get('rec')
var myMeal = document.querySelector('#my-meal');
var myrec_img = document.querySelector('#myrec-img');
var ingradients_ul = document.querySelector('#ingradients-ul');

var myResopnse = {};
var ingradients;


function test() {
   
        console.log('test'); 

}
function test2() {
    console.log('test2');
}
async function getRecipt(recipts_Id) {
    var apiResponse=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipts_Id}`)
    var apiResponse=await apiResponse.json()
    console.log('x1',apiResponse.recipe);
    displayReciptsDetails(apiResponse.recipe)
    
}
async function getRecipt2()
 {

 
        var apiResponse= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=47746`);
        var apiResponse=await apiResponse.json()
         console.log('x2',apiResponse.recipe);
         
        
       }
       async function getRecipt3()
 {

 
        var apiResponse= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=17796`);
        var apiResponse=await apiResponse.json()
         console.log('x3',apiResponse.recipe);
        
         
       }
async function reOrderLogic()
       {
       
           await getRecipt(recipts_Id);
           await getRecipt2();
           await getRecipt3();
           await test();
           test2();
           
       }
reOrderLogic()
       
function displayReciptsDetails(myResopnse) {

    myrec_img.src = myResopnse.image_url;



    ingradientsContainer = '';
    for (var i = 0; i < myResopnse.ingredients.length; i++) {
        ingradientsContainer += `<li>${myResopnse.ingredients[i]}</li>`

    }
    ingradients_ul.innerHTML = ingradientsContainer;

}