
//Fetches the data from the mongo db and returns it in json format
function fetchingData(){
    fetch("/monsters")
        .then(response => response.json())
        .then(json => draw_table(json))
        .catch(err => console.log(err));
}

//Receives a json, select the values of each element inside it and append it to the table in index.html
function draw_table(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i].name);
        $("tbody[id=monsterData]")
            .append(" <tr><th scope=\"row\">" + data[i].name + 
                    "</th><td>" + data[i].size +
                    "</td><td> <img src=\"img/" + data[i].type + ".png\" title=\"" + 
                    data[i].type.charAt(0).toUpperCase() + data[i].type.slice(1) +   "\" height=\"32\" width=\"32\"></td></tr>");
    }
    
    
};

fetchingData();