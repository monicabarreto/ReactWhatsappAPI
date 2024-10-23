import Scheduler from "./Components/Scheduler";
import Header from "./Components/Header";
import { FcClock } from "react-icons/fc";


function App() {
    return (
        <div className="App">
            <Header FcClock={FcClock}/>
            <Scheduler />
       
           
        </div>
    );
}

export default App;
