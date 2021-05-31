// import logo from './logo.svg';
// import './App.css';
import Classprops from "./Classprops";
import Functionprop from "./Functionprop";

function App() {
  return (
    <div><Classprops name= "Skilln" place= "PlaceX"/>
         <Classprops name= "Navin" place= "PlaceY"/>
         <Classprops name= "Kukreja"place= "PlaceZ"/>
         <Functionprop name="Learner 4" place= "PlaceA"/>
    </div>
    
  );
}
export default App;
/*Instead of retyping for everyone. We can pass their names as props that from the name 
component that is app.js to the child comp and render this on to the browser  */