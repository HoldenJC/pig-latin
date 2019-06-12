var regexLetters = /[a-zA-Z]/;
var regexVowels = /[aeiou]/i;
var breakpoint;
var userSentence = [];
var translatedSentence = "";

var multConsonants = function(word) {
  var consonantString = "";
  for (var i = 0; i < word.length; i++) {
    if (!word.charAt(i).match(regexVowels) || (word.charAt(i) === "u" && word.charAt(i-1) === "q")) {
      consonantString = consonantString + word.charAt(i);
    } else {
      breakpoint = i;
      break;
    }
  }
  return word.slice(breakpoint) + consonantString + "ay";
}


var translator = function(input){
  var resultArray = [];
  input.forEach(function(element){
    if (!element.charAt(0).match(regexLetters)) {       // filters element starting with a non-letter
      resultArray.push(element);
      // return element;
    } else if (element.charAt(0).match(regexVowels)){     // attaches "way" to words starting with vowel
      resultArray.push(element + "way");
      // return element + "way";
    } else if (!element.charAt(0).match(regexVowels)){    // translate words starting with 1 or more consonants
      resultArray.push(multConsonants(element));
      // return multConsonants(element);
    } else {
      return "error";
    }
  });
  translatedSentence = (resultArray).join(" ");
};


$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();

    userSentence = ($("#userInput").val()).split(" ");

    translator(userSentence);

    $("#result").empty().append(translatedSentence);



    // $("#result > p").text(translatedSentence);


  });
});
