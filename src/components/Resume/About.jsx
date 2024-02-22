import { useOutletContext } from "react-router-dom"

export default function About() {
    const dark = useOutletContext()
    return(
        <div className="flex flex-col col-start-2 col-span-2 row-start-1 row-span-1">
            <div className={`text-xl flex gap-1 pl-2
                            ${!dark && "bg-black text-white"}
                            ${dark &&  "bg-white text-black"}`}>
                <div className="font-medium">About me</div>
            </div>
            <div className={`p-4 pl-4 flex flex-col gap-4 text-base origin-top transition-transform  duration-300 ease-in-out
                            ${!dark && "text-gray-700"}
                            ${dark && "text-gray-200"}`}>
                <p>Self-taught Ruby developer. Fresh but willing to learn.</p>
                <p>Hunger for further knowledge and experience. Embrace new challenges.</p>
                <p>Eager to work on exciting projects where I can apply my skills to contribute meaningfully.</p>
            </div>
        </div>
    )
}