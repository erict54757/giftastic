

// var api = fcZpo5ZxdIYESSiw5rQEmY0CXD4qyUy7;
 


var arrayTopic = ["fast food", "fast cars", "fast women", "cheetahs", "downhill skiing"]


var input= $("#addButton").val().trim();



function displayGifs () {

    var inputText = $(this).attr("data-name");
    console.log(arrayTopic.length);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fcZpo5ZxdIYESSiw5rQEmY0CXD4qyUy7&q="+inputText+"&limit=5&offset=0&rating=G&lang=en";
   
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        for (k=0; k<response.data.length; k++){
        console.log (response.data[k].rating);
        
    }
        
   
    });
    



}
   







function renderButtons() {
    



console.log(input)

for (i=0; i<arrayTopic.length; i++) {
    var button = $("<button class='mx-1 my-1 px-5'>");
button.addClass("gifButton");


button.attr("data-name"), arrayTopic[i];

button.text(arrayTopic[i]);

button.appendTo("#gifButtonHere");
}

}

$("#search").on("click", function(event) {
    event.preventDefault();
    $("#gifButtonHere").empty();
   var input= $("#addButton").val().trim();
   
        
    
    // console.log (input);
    

    (arrayTopic).push(input);


 renderButtons();
 

   
   


})






$(document).on("click", ".gifButton", displayGifs);


renderButtons();




