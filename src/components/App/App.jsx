import data from "../officers.json";
import OfficersList from "../OfficersList/OfficersList";
import css from "./App.module.css"
import { CgAirplane } from "react-icons/cg";
import Button from "../Button/Button";

const Box = ({ children }) => {
  return (
    <div>
      <p>Hello {children} box!</p>
      
    </div>
  )
}



export default function App() {
    return (

      <div className={css.container} >
        <Box>children props here</Box>
        <h1>Available pilots</h1>
        <CgAirplane className={css.icon} size={50} />
        <Button>Register</Button>
        <Button>Search</Button>
        <OfficersList officers={data}/>
      </div>
      
    ); 
}