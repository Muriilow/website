interface ButtonProps 
{
  children: string;
  onClick: () => null;
}

function Button({ children, onClick }:ButtonProps)
{
 return (
          <button
          type="button" 
          className="button"
          onClick={onClick}>

          {children}

          </button>
        );
}

export default Button;
