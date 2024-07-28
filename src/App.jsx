import reactLogo from "./assets/underConstruction.png";
import linkedinLogo from "./assets/linkdin.png";
import "./App.css";

function App() {
  

  return (
    <>
      <div>
        
          <img src={reactLogo}  alt="React logo" />
        
      </div>

      <div className="card">
        <a href="https://www.linkedin.com/in/bakaru/" target="_blank">
          <div >
            <img src={linkedinLogo} className="logo" alt="React logo"/>
          </div>
        </a>
        
      </div>
    </>
  );
}

export default App;
