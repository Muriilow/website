import { useState } from "react";

interface ListProps 
{
  items: string[];
  classType: string;
  onSelectItem: (item: string) => void; //property
}


function ListGroup({ items, classType, onSelectItem }: ListProps)
{

  //Hook
  const [selIndex, setSelIndex] = useState(-1);

  return( 
  <>
    <ul className={classType}>

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
