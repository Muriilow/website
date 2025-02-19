import capyImg from "../../public/GameImage.png";
import candyImg from "../../public/GameImage.png";
import bomberImg from "../../public/GameImage.png";

interface GameListProps
{
  readonly children: string; 
  readonly title: string;
  readonly imageRef?: string; 
}

const iconObj = {"capy": capyImg,
                "candy": candyImg,
                "bomb": bomberImg}

function GameList({children, title, imageRef="capy"}: GameListProps) 
{
  return (
    <>
      <div className="game-container">
      <img src={iconObj[imageRef]}></img>
        <div className="game-text">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </>
  )  
}

export default GameList
