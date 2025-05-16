import React, { useState } from "react";
import "./App.css";
import about from "./images/about.png"
import coding from "./images/coding.png"
import drink from "./images/drink.png"
import hi from "./images/hi.jpg"
function App() {
  const [question, setQuestion] = useState("You still hate me?");
  const [highlight, setHighlight] = useState(false);
  const [reactionMessage, setReactionMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const setQuestionWithHighlight = (newQuestion) => {
    setQuestion(newQuestion);
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1200);
  };

  const handleResponse = (answer) => {
    if (question === "You still hate me?") {
      if (answer === "yes") {
        setQuestionWithHighlight("You still love me?");
        setReactionMessage("Wow! so you love me 💖");
      } else {
        setPopupMessage("Then at least text me 🥺");
        setShowPopup(true);
      }
    } else {
      if (answer === "no") {
        setQuestionWithHighlight("You still hate me?");
        setReactionMessage("Wow! so don't hate me anymore!! 🥰");
      } else {
        setPopupMessage("Then at least text me 💌");
        setShowPopup(true);
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  return (
    <div className="app">
      <header className="site-header">
  <div className="logo">❤️ Forgive.Me</div>
  <nav>
    <a href="#contact" className="nav-link">Contact</a>
  </nav>
</header>
      {/* About Section */}
      <section className="section section-about">
        <div className="image">
          <img src={about} alt="About" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p>
            I'm just a guy who let his emotions get the best of him and hurt someone he deeply cares about.
            This page isn't perfect, just like me but it's a small step to say I regret what happened and I want to fix things if I can.
          </p>
        </div>
      </section>

      {/* Main Story Sections */}
      <section className="section section-1">
        <div className="text">
          <h1>Hi there,</h1>
          <p>Hope you are free... I’ve been thinking a lot lately — about us, about the moments that made my heart feel full.
Remember our happy days? We laughed so much during the farewell, capturing memories as if time would stand still. I can still feel your presence of you in metro ride to the air show — that childlike excitement in ur eyes, just soaking it all in.
And those long walks… we talked endlessly, sometimes about nothing, sometimes about everything and it all mattered. Even that electric train ride something about it felt magical. Each moment with you was a chapter I’d read again and again if life were a book.
They weren’t just memories, they were pieces of peace I carry with me. And honestly, I miss that peace… I miss us.</p>
        </div>
        <div className="image">
          <img src={hi} alt="Hi" />
        </div>
      </section>

      <section className="section section-2">
        <div className="image">
          <img src={drink} alt="Drink" />
        </div>
        <div className="text">
          <h1>Your Drink!</h1>
          <p>I know how much you love coconut drink… and orange drink too.
But like a fool, I once brought you the one mix you absolutely hated coconut with orange.
This time, I’ve got it right. Just the way you like it separately, perfectly, thoughtfully.
Give me a chance to show you that I’ve been paying attention… and that I still care, more than ever.</p>
        </div>
      </section>

      <section className="section section-3">
        <div className="text-full">
          <h1>Finally I'm Realizing...</h1>
          <p>
            That holding onto ego cost me something truly beautiful. I know I messed up, and I'm not
            expecting a miracle but I really want to make things right.
          </p>
        </div>
      </section>

      {/* Yes/No Interaction Section */}
      <section className="section section-4">
        <div className="question-box">
          <h2 className={highlight ? "highlight" : ""}>{question}</h2>
          <div className="buttons">
            <button onClick={() => handleResponse("yes")}>Yes 😊</button>
            <button onClick={() => handleResponse("no")}>No 😔</button>
          </div>
          {reactionMessage && (
            <p className="reaction-text">{reactionMessage}</p>
          )}
        </div>
      </section>

      {/* Contact Header */}
      <h2 className="contact-header" id="contact">Contact</h2>
<section className="section section-contact">
  <div className="text">
    <p>
      My efforts at least deserve some scolding 😅<br />
      If you’re not ready to scold me and kinda happy...<br />
      Just mail me this: <strong>😏😏</strong> to the same email id.
    </p>
  </div>
  <div className="image">
    <img src={coding} alt="I'll keep coding until you reply" />
  </div>
</section>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close 💕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
