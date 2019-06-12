var regexLetters = /[a-zA-Z]/;
var regexVowels = /[aeiou]/i;
// var regexConsonants = /


var translator = function(input){
  if (!input.charAt(0).match(regexLetters)) {       // filters input starting with a non-letter
    return input;
  } else if (input.charAt(0).match(regexVowels)){     // attaches "way" to words starting with vowel
    return input + "way";
  } else if (!input.charAt(0).match(regexVowels)){    // attaches "ay" to words starting with consonant
    return input.slice(1) + input.charAt(0) + "ay";
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
