// var thePets = [
//     {
//         "name": "Meowsalot",
//         "species": "cat",
//         "favFood": "tuna"
//     },
//     {
//         "name": "Barky",
//         "species": "dog",
//         "favFood": "carrots"}
// ];

var pageCounter = 1;
var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal-info');

btn.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText)  ;
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});


function renderHTML(data){
    var htmlString = "";
    for(var i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name+" is a " + data[i].species+ " that likes to eat ";
        for(var j = 0; j < data[i].foods.likes.length; j ++){
            if(j == 0){
                htmlString += data[i].foods.likes[j];
            }else{
                htmlString += " and "+data[i].foods.likes[j];
            }
        }
        htmlString += " and dislikes " ;
        for(var j = 0; j < data[i].foods.dislikes.length; j ++){
            if(j == 0){
                htmlString += data[i].foods.dislikes[j];
            }else{
                htmlString += " and "+data[i].foods.dislikes[j];
            }
        }
        htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
