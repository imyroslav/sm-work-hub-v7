import data from "../officers.json";
import OfficersList from "../OfficersList/OfficersList";
import css from "./App.module.css"


export default function App() {
    return (

      <div className={css.container} >
        <h1>Available pilots</h1>
        <OfficersList officers={data}/>
      </div>
      
    ); 
}