import { ReactNode } from "react";

function Header() 
{
  return (
    <>
    <header className="header">
    <img width="50px" src="../public/cat.png"></img>
      <nav>
        <a href="" className="header-elem">Games</a>
        <a href="" className="header-elem">Art</a>
        <a href="" className="header-elem">Projects</a>
        <a href="" className="header-elem">About me</a>
      </nav>
    </header>
    <div className="line" />
      <img className="main-image" src="../public/Rectangle 2.png"></img>
    </>
  );
}

export default Header;
