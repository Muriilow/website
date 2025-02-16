import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App()
{
  //List
  let itemsList = ["Capybara", "Bomberman", "SpaceShooter", "Pingo"];
  let header = "Games";
  const handleSelection = (item: string) => {}

  //Button
  let buttonType = "dark";
  const onClick = () => 
  {

  };

  return (
    <>
      <div><ListGroup items={itemsList} heading={header} onSelectItem={handleSelection} /></div>

      <div><Button onClick={() => console.log('Clicked')} classType={buttonType}>Comprar</Button></div>
      <div><Button onClick={onClick}>Baixar</Button></div>
    </>
  );
}

export default App;
