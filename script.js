// to make our js functioning we are going to get results from an api.
// we can create our own api from "themoviedb.org" site
// create an api key after login into this.

const APIKEY='';
const IMG_PATH='';
const SEARCHAPI='';
// now we will create a function to search for movies and that function will return
// all the searches , after that , the function will send that query to APIKEY
// and that apikey will send us reponse

const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data)){
        console.log(data.results);
        data.results.forEach(element=>{
            const div =ducument.createElement("div");
        });
    });
}