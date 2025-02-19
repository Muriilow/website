import { useState } from "react";
import Button from "./components/Button";
import Header from './components/Header.tsx'
import GameList from './components/GameList.tsx'
import './css/index.css'

function App()
{
  let capyText = "armfarlkmfarlfakrnmfalr laknrfalrnfarlfn alrknfalfknarlfknra alkrnfalnfarlfnral alrknfarlfnarlnf"

  return (
    <>
      <Header />

      <div className="fore-image">
        <h1 className="title">Games</h1>
        <div className="line" />
        <GameList 
          title="Fly Capybara!"
          imageRef="capy">
          {capyText}
        </GameList>

        <GameList 
          title="Candy Puzzle"
          imageRef="candy">
          {capyText}
        </GameList>

        <GameList 
          title="Kaboom!!"
          imageRef="bomb">
          {capyText}
        </GameList>
      </div>
    </>
  );
}

export default App;
