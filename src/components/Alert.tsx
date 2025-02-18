import { ReactNode } from "react";
interface AlertProps 
{
  children: ReactNode;
  onClick: () => null; 
}

function Alert({ children, onClick }: AlertProps)
{
  return (
      <div 
      className="alert alert-warning alert-dismissible fade show" 
      role="alert"
      >

        {children}
      
        <button 
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}/>
      </div>
  );
}

export default Alert;
