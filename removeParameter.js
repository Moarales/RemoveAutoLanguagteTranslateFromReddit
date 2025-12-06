const url = document.location; //Current Location object: https://www.reddit.com/r/Austria/?tl=en

const queryString = url.search; // Returns paramters such as:'?tl=en', as string


//use URLSearchParams to modify  URL Paramater
const params = new URLSearchParams(queryString);

//check if page has tl  Parameter
if (params.has("tl")) {
    //If So remove it
    params.delete("tl")
    //Now Location object: https://www.reddit.com/r/Austria/
    url.search = params;
}