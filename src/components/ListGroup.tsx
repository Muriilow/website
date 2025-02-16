import { useState } from "react";

interface ListProps 
{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //property
}


function ListGroup({ items, heading, onSelectItem }: ListProps)
{

  //Hook
  const [selIndex, setSelIndex] = useState(-1);

  return( 
  <>
    <h1>{heading}</h1>
    <ul className="list-group">

      {
        items.map((item, index) => ( 
        <li 
        className = { selIndex === index ? 'list-group-item active' : 'list-group-item'}
        key = {item} 
        onClick = { () => 
          {
            setSelIndex(index);
            onSelectItem(item);
          }}
        >
        {item}
        </li>
      ))}

    </ul>
  </>
  );
}

export default ListGroup;
