import React, { useEffect, useState } from "react";
import useWelcomeScreen from "./hooks/useWelcomeScreen";
import Welcome from "./pages/Welcome";

import data from './assets/image/index';
import { Card } from "./components/Card";

const App = () => {
  const { renderWelcome, handleCloseWelcome } = useWelcomeScreen(true)

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCard = () => {
    const shuffledCard = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setFirstChoice(null)
    setSecondChoice(null)
    setCards(shuffledCard)
    setTurns(0)
  }

  //handle choices
  const handleChoice = card => firstChoice ? setSecondChoice(card) : setFirstChoice(card)

  //reset choices and increase turn
  const resetTurn = () => {
    setFirstChoice(null)
    setSecondChoice(null)

    setTurns(prev => prev + 1)

    setDisabled(false)
  }

  //start game first mount
  useEffect(() => {
    resetTurn()
  }, [])

  //compare choices
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true)

      if (firstChoice.image === secondChoice.image) {
        console.log("matched cards");
        setCards(prev => {
          return prev.map(card => card.image === firstChoice.image ? ({ ...card, matched: true }) : card)
        })
        resetTurn()
      } else {
        console.log("cards didn't match");
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [firstChoice, secondChoice])

  return (
    <div className="relative">
      {(renderWelcome && (
        <div className="absolute inset-0 z-50">
          <Welcome handleClose={handleCloseWelcome} />
        </div>
      )) || (
          <div className="min-h-screen">
            <div className="m-auto px-10 py-4 rounded-lg">
              <h3 className="font-medium text-3xl m-auto animate-pulse text-stone-700">Memory game w/ LOONA</h3>
            </div>
            <div className="flex items-center justify-center my-5">
              <button onClick={shuffleCard} className="bg-violet-100 hover:bg-violet-200 transition-all text-violet-700 p-3 rounded-xl">New Game</button>
              <div className="mx-5 bg-green-100 text-green-800 p-2 rounded-xl text-2xl font-medium">Turn: {turns}</div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 mx-10 mt-5 gap-6">
              {cards.map(card => (
                <Card
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={card.matched || card === firstChoice || card === secondChoice}
                  disabled={disabled}
                />
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default App;
