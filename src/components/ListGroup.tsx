import { MouseEvent } from "react";

function ListGroup()
{
  let selectedIndex = 0;
  let items = ["Capybara", "Bomberman", "SpaceShooter", "Pingo"];

  //Event handler 
  const handleClick = (event: MouseEvent) => console.log(event);

  return( 
  <>
    <h1>Projects</h1>
    <ul className="list-group">

      {items.map((item, index) => ( 
        <li 
        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
        key={item} 
        onClick={handleClick}
        >
        {item}
        </li>
      ))}

    </ul>
  </>
  );
}

export default ListGroup;
