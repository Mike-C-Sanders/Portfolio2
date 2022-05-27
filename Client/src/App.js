import Profile from "./Components/Home/Profile"
import {IconContext} from "react-icons"



function App() {
  return (
    <IconContext.Provider value ={{ color: "cornflowerblue"}}>
      <div className="App">
        <Profile/>
      </div>
    </IconContext.Provider>
  );
}

export default App;
