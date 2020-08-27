import React from "react";
import PropTypes from "prop-types";

const GuessWords = (props) => {
  //console.log(props);
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secrect word!</span>
    );
  } else {
    const guessRows = props.guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h4>Guessed Words</h4>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Guessed Word</th>
              <th>Matched Letters</th>
            </tr>
          </thead>
          <tbody>{guessRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessWords;
