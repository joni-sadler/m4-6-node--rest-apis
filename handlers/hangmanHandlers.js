const { words } = require('../data/words');

// write your handlers here...

const returnWordObject = (req, res) => {
  let wordObject = req.params.id;
  let selectedWord = words.find((word) => wordObject === word.id);

  if (selectedWord) {
    res.status(200).json({
      status: 200,
      word: selectedWord,
    });
  } else {
      res.status(404).json({
        status: 404,
        word: "Word not found.",
    })
  }
}

const getWord = (req, res) => {
  let randomSelection = Math.floor(Math.random() * words.length);
  let selectedWordObject = words[randomSelection];
  let idLetterCount = {id: selectedWordObject.id, letterCount: selectedWordObject.letterCount};
  res.status(200).json({
    status: 200,
    result: idLetterCount,
  })
}

const handleGuess = (req, res) => {
  let wordId = req.params.id;
  let letterGuess = req.params.letter;
  let selectedWordObject = words.find((word) => wordId === word.id);
  let selectedWord = selectedWordObject.word;

  let wordArray = selectedWord.split('');
  let newArray = [];

  wordArray.map((letter) => {
    if (letterGuess === letter) {
      newArray.push(true);
    } else {
      newArray.push(false);
    }
  })    

  if (selectedWord.indexOf(letterGuess) >= 0) {
    res.status(200).json({
      status: 200,
      result: newArray,
    })
  } else {
    res.status(404).json({
      status: 404,
      result: newArray,
    })
  }
}


module.exports = { returnWordObject, getWord, handleGuess }
