import Contact from "./Contact"
import Education from "./Education"
import Languagues from "./Languagues"
import Skills from "./Skills.jsx"
import About from "./About.jsx"
import Courses from "./Courses.jsx"
import { useOutletContext } from "react-router-dom"
import Experiences from "./Experiences.jsx"
export default function Resume() {
    const dark = useOutletContext()
    return(
        <div className={`grid gap-4 grid-cols-3 grid-rows-3 my-4 
                        ${!dark && "bg-sky-50"}
                        ${dark && "bg-slate-800"}`}>
            <Contact />
            <Experiences />
            <Languagues />
            <About />
            <Skills />
            <Education />
            <Courses />
        </div>
    )
}