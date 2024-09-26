import OfficerProfile from "../OfficerProfile/OfficerProfile"
import css from "./OfficersList.module.css";

export default function OfficersList({ officers }) {
    return (
         <ul className={css.container}>
          {officers.map((officer) =>
            <li key={officer.id}>
              <OfficerProfile officer={officer} />
            </li> )}
      </ul>
    )
}