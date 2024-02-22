import { useOutletContext } from "react-router-dom"
import Project from "./Project"
import projects from "./projects"

export default function Projects() {
    const dark = useOutletContext()
    return(
        <div className={`flex gap-8 flex-col py-8
                        ${dark && "bg-black" }`}>
            {projects.map((pro, idx) => <Project data={pro} key={idx}/>)}
        </div>
    )
}