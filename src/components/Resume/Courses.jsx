import { useOutletContext } from "react-router-dom"

export default function Courses() {
    const dark = useOutletContext()
    return(
        <div className="flex flex-col col-start-3 col-span-1 row-start-3 row-span-1">
            <div className={`text-xl flex gap-2 pl-2
                            ${!dark && "bg-black text-white"}
                            ${dark &&  "bg-white text-black"}`}>
                <div className="font-medium">Courses</div>
            </div>
            <div className={` p-4 pl-2 text-base flex gap-4 flex-col origin-top transition-transform  duration-300 ease-in-out`}>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className={`font-semibold pl-2
                                        ${dark && "text-white"}`}>Web developer</div>
                        <div className={`text-sm
                                        ${!dark && "text-gray-700"}
                                        ${dark && "text-gray-200"}`}>2023-2024</div>
                    </div>
                    <a className={`pl-4 ${!dark && "text-blue-800 hover:text-blue-500"}
                                    ${dark && "text-cyan-400 hover:text-cyan-200"}`}
                    href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">The Odin Project</a>
                    <div className={`flex text-sm pl-4
                                    ${dark && "text-white"}`}>
                        - Fullstack Rails developer
                    </div>
                </div>
            </div>
        </div>
    )
}