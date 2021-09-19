var butn = document.querySelector("#bttn");
var txttaken = document.querySelector("#text");
var txtoutput = document.querySelector("#txtinput-two");
var URLlink = "https://api.funtranslations.com/translate/minion.json"
// var URLlink = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

console.log("hey");

function translatorURL(text) {
    return URLlink + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("Error !", error);
    alert("Server down! Please try again");
}
function clickHandler() {
    var inputText = txttaken.value;
    fetch(translatorURL(inputText))
        .then(response => response.json())
        .then(json => {
            // console.log("here");
            var translatedText = json.contents.translated;
            // console.log(translatedText);
            txtoutput.textContent = (translatedText);
        })
        .catch(errorHandler)
    // var txt = txttaken.value;
    // console.log("clicked", txt);
};
butn.addEventListener("click", clickHandler)