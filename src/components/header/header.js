import Button from "../button/button";
import "./header.scss"

function Header(){
  return(
    <header className="header">
      <div className="header__wrapper">
        <h3 className="header__title">6 Suggestions</h3>

        <form action="https://echo.htmlacademy.ru">
          <select className="header__select" name="sort" aria-label="rort">
            <option className="header__option" value="most upvotes">Most Upvotes</option>
            <option className="header__option" value="most upvotes">Most Upvotes</option>
            <option className="header__option" value="most comments">Most Comments</option>
            <option className="header__option" value="least comments">Least Comments</option>
          </select>
        </form>
      </div>
     

      <Button className="btn__add">+ Add Feedback</Button>
    </header>
  );
}

export default Header;