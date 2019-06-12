var regexLetters = /[a-zA-Z]/;
var regexVowels = /[aeiou]/;
// var regexConsonants = /


var translator = function(input){
  if (!input.charAt(0).match(regexLetters)) {
    return input;
  } else if (input.match(regexVowels)){
    return input + "way";
  } else if (!input.match(regexVowels)){
    return input + "ay";
  } else {
    return input + "error";
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
