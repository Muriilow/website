interface ButtonProps 
{
  classType?: 'primary' | 'secondary' | 'dark';
  children: string;
  onClick: () => null;
}

function Button({ classType = 'primary', children, onClick }:ButtonProps)
{
 return (
          <button
          type="button" 
          className={'btn btn-' + classType}
          onClick={onClick}>

          {children}

          </button>
        );
}

export default Button;
