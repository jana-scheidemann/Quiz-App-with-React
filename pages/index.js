import quizitems from "@/lib/data";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      <Carousel
        className="carousel-item"
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
      >
        {quizitems.map((quizitem) => (
          <div key={quizitem.question}>
            <p className="question">{quizitem.question}</p>
            <button
              className="answer-button"
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
          </div>
        ))}
      </Carousel>
    </>
  );
}
