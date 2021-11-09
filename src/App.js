 import InfoDesk from "./components/info-desk/infoDesk";
 import TaskBoard from "./components/task-board/taskBoard";
 import Header from "./components/header/header";
 import "./sass/main.scss"
 import "../src/App.scss"
 
 function App() {
   return(
    <div className="main container">
      <InfoDesk />

      <div className="main__right">
        <Header />
        
        <TaskBoard />
      </div>
    </div>
    
  );
}

export default App;
