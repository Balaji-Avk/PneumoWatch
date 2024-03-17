import React from "react";

export function ResultPage() {
  const resultVal = localStorage.getItem("resultVal");
  let message = "";

  if (resultVal === "true") {
    message = (
      <div className="true">
        <div className="msg-t">
          <h1>Pneumonia has been detected.</h1>
          <p>
            As an AI language model, I'm here to provide assistance and offer
            insights to the best of my abilities based on the information and
            data I've been trained on. While I can't guarantee the accuracy or
            certainty of solutions to problems, I can certainly provide a second
            opinion or perspective. It's always a good idea to cross-reference
            information and consult with experts or additional sources when
            dealing with important matters.
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/id/134843485/vector/confused-emoticon.jpg?s=612x612&w=0&k=20&c=GnHI36kUMFWfl2FAFzDnGUiVSswjUXtVx46Up2qPwDc="
          alt="Confused emoticon"
        />
      </div>
    );
  } else {
    message = (
      <section className="false">
        <img
          src="https://i.pinimg.com/564x/bb/19/2d/bb192d00960abc2efa068122e8fd44d8.jpg"
          alt="Happy emoticon"
        />{" "}
        <div className="msg-f">
          <h1>Congratulations! No signs of Pneumonia detected.</h1>
          <h2>Remember to maintain good health practices such as:</h2>
          <ul>
            <li>Eating a balanced diet</li>
            <li>Regular exercise</li>
            <li>Getting enough sleep</li>
            <li>Staying hydrated</li>
            <li>Practicing good hygiene</li>
          </ul>
          <p>
            If you have any concerns about your health, it's always a good idea
            to consult with a healthcare professional.
          </p>
        </div>
      </section>
    );
  }

  return <div>{message}</div>;
}
