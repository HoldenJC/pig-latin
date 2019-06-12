var regexLetters = /[a-zA-Z]/;
var regexVowels = /[aeiou]/i;

var breakpoint;

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
  if (!input.charAt(0).match(regexLetters)) {       // filters input starting with a non-letter
    return input;
  } else if (input.charAt(0).match(regexVowels)){     // attaches "way" to words starting with vowel
    return input + "way";
  } else if (!input.charAt(0).match(regexVowels)){    // translate words starting with 1 or more consonants
    return multConsonants(input);
  } else {
    return "error";
  }
};


$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();

    var userSentence = $("#userInput").val();

    var translatedSentence = translator(userSentence);

    $("#result").after(translatedSentence);




    // $("#result > p").text(translatedSentence);


  });
});
