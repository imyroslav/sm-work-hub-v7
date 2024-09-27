import css from "./OfficerProfile.module.css";
import clsx from "clsx";

export default function OfficerProfile({ officer: { id, name, age, spec, rank, active, skills } }) {

    const textClass = clsx(css.text, {
        [css.active]: active === true,
        [css.retired]: active === false,
    });

   
    return (
        <div>
            <p>ID: {id} </p>
            <p>Name: {name} </p>
            <p>Specialization: {spec} </p>
            <p>Age: {age}</p>
            <p>Skills: {skills} </p>
            <p className={textClass} >Status; {active === true ? "Is Active" : "Is Retired"} </p>
            <p>Rank: {rank} </p>
        </div>

    )
}