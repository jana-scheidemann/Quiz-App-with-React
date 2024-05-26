import styled from "styled-components";
import quizitems from "@/lib/data";
import { useState } from "react";

export default function Homepage() {
  const [showAnswer, setShowAnswer] = useState({});

  function toggleAnswer(question) {
    setShowAnswer((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  }

  return (
    <>
      <h1>Movie Quizzy</h1>
      <ul>
        {quizitems.map((quizitem) => (
          <li key={quizitem.question}>
            <p>{quizitem.question}</p>
            <button
              type="button"
              onClick={() => toggleAnswer(quizitem.question)}
            >
              {showAnswer[quizitem.question] ? "hide answer" : "show answer"}
            </button>
            {showAnswer[quizitem.question] ? (
              <p className="answer">{quizitem.correct_answer}</p>
            ) : (
              <p className="answer">&nbsp;</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
