
 function getNewWord() {
    var wordList = [
        "Sushi",
        "Sashimi",
        "Miso Soup",
        "Soba",
        "Teriyaki",
        "Rice",
        "Tempura",
        "Yakitori",
        "Udon",
        "Ramen",
        "Sukiyaki",
        "Sake"
     ];

     game
 
    rndNum = Math.floor(Math.random() * wordList.length);
    console.log(rndNum);
 
    wordToGuess = wordList[rndNum];
    wordToGuess = wordToGuess.toLowerCase();
    console.log(WordToGuess);
    return wordToGuess;
 }
 
 newWord = getNewWord()
 console.log(newWord)