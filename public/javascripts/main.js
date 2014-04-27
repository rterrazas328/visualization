

function updateList(json) {
    //clear the UL
    $("#ulList").empty();
    
    //get the reference to the UL
    var list = document.getElementById("ulList"); 
    
    //build a json object. 
    var obj = JSON.parse(json)
    //loop through the json object
    //build an LI link and append.
    for (var key in obj ) {
        if (obj.hasOwnProperty(key)) {
            var li = document.createElement("li");
            li.setAttribute('id', obj[key].id);
            var text = document.createTextNode(obj[key].name);
            li.appendChild(text); 
            //append to the list. 
            list.appendChild(li); 
        }
    }
}

function schoolClick(evt) {
    console.log(evt.target.id); 
    
    var id = evt.target.id; 
    
     //ajax call to get the initial data.
    $.ajax({
        type: "POST",
        url: "/load",
        data: { 'id': id},
        success: function (result) {
            displayData(result); 
        }
    });
}

function displayData(json) {
    
    //parse the json string
    var obj = JSON.parse(json);
    
    console.log(obj); 
}

//initize the alphabet
function initAlphaList() {
    
    var list = document.getElementById("ulAlphaList");
    
    for (var i = 65; i <= 90; i++) {
        var LI = document.createElement('li');
        var text = document.createTextNode(String.fromCharCode(i));
        LI.appendChild(text);
        LI.setAttribute("char", String.fromCharCode(i)); 
        list.appendChild(LI); 
    }
}

//load the list of school by the selected letter.
function loadList(ch) {
    //ajax call to get the initial data.
    $.ajax({
        type: "POST",
        url: "/list",
        data: { 'name': ch},
        success: function (result) {
            updateList(result); 
        }
    });
}


function letterClick(evt) {
    // call the load list method and pass the clicked letter.
    var ch = evt.target.getAttribute('char');
  
    if (ch != null) { loadList(ch); }
}

$( document ).ready(function() {
     //load the initial data into the ul
     loadList('A'); 

     //build the alphabet list
     initAlphaList();
     
     $("#ulAlphaList").on("click", letterClick); 

     //wire the events
     $("#ulList").on("click", schoolClick);
     
     
 });