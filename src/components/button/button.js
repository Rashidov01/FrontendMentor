import "./button.scss"

function Button({children, className}){
  return(
    <button className={"btn " + (className || '')} type="button">{children}</button>
  );
}

export default Button;