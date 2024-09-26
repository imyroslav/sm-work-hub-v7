export default function OfficerProfile({ officer: { id, name, age, spec, rank, status, skills } })

{
    return (
        <div>
            <p>ID: {id} </p>
            <p>Name: {name} </p>
            <p>Specialization: {spec} </p>
            <p>Age: {age}</p>
            <p>Skills: {skills} </p>
            <p>Status; {status === "Active" ? "Is active" : "Is retired" }  </p>
            <p>Rank: {rank} </p>
        </div>

    )
}