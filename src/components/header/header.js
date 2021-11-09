import "./header.scss"

function Header(){
  return(
    <div className="header">
      <div className="header-left">
        <a href="#">
          logo
        </a>

        <select name="" >
          <option value="all">all</option>
          <option value="done">done</option>
          <option value="opt">opt</option>
        </select>
      </div>

      <div className="header-right">
        <button className="header-right__btn" type="button">Add Feedback</button>
      </div>
    </div>
  );
}

export default Header;