import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App()
{
  //Alert 
  const [alertVisible, setAlertVisibility] = useState(false);
  //List
  let itemsList = ["Capybara", "Bomberman", "SpaceShooter", "Pingo"];
  let header = "Games";
  const handleSelection = (item: string) => {}


  //Button
  let buttonType = "dark";

  return (
    <>
      { alertVisible && <Alert onClick={() => setAlertVisibility(false)}> My alert </Alert> }

      <div><ListGroup items={itemsList} heading={header} onSelectItem={handleSelection} /></div>

      <div><Button onClick={() => console.log('Clicked')} classType={buttonType}>Comprar</Button></div>
      <Button onClick={() => setAlertVisibility(true)}>Baixar</Button>
    </>
  );
}

export default App;
