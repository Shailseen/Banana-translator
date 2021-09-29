var butn = document.querySelector("#bttn");
var txttaken = document.querySelector("#text");
var txtoutput = document.querySelector("#txtinput-two");
var messageBox = document.querySelector("#output-box");
var URLlink = "https://api.funtranslations.com/translate/minion.json"
// var URLlink = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// console.log("hey");

function translatorURL(text) {
    return URLlink + "?" + "text=" + text
}
function errorHandler(error) {
    messageBox.innerText = error.message;
    // console.log(error.message);
    // console.log(error);
    // alert("Server down! Please try again");
    // alert(error.message);
}
function clickHandler() {
    var inputText = txttaken.value;
    fetch(translatorURL(inputText))
        .then(response => response.json())
        .then(json => {
            if(json.error){
                return errorHandler(json.error);111111
            }
            // console.log("here");
            var translatedText = json.contents.translated;
            // console.log(translatedText);
            txtoutput.textContent = (translatedText);
        })
        .catch(errorHandler);
    // var txt = txttaken.value;
    // console.log("clicked", txt);
}
butn.addEventListener("click", clickHandler)