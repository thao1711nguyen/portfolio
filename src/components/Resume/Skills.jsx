import { useOutletContext } from "react-router-dom"

export default function Skills() {
    const dark = useOutletContext()
    return(
        <div className="flex flex-wrap flex-col col-start-2 col-span-2 row-start-2 row-span-1">
            <div className={`text-xl flex gap-2 pl-2
                            ${!dark && "bg-black text-white"}
                            ${dark &&  "bg-white text-black"}`}>
                <div className="font-medium">Technical skills</div>
            </div>
            <div className={`grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-2 p-4 pl-4 text-base origin-top transition-transform  duration-300 ease-in-out`}>
                <div className={`flex justify-between items-center
                                ${dark && "text-white"}`}>
                    <div>Ruby</div>
                    <div className="flex gap-4 items-center">
                        <div className={`w-40 h-2 
                                        ${!dark && "bg-gray-400"}
                                        ${dark && "bg-gray-200"}`}>
                            <div className={`w-9/10 h-full
                                            ${!dark && "bg-blue-900"}
                                            ${dark && "bg-cyan-500"}`}></div>
                        </div>
                        <div className="text-sm">90%</div>
                    </div>
                </div>
                <div className={`flex justify-between items-center
                                ${dark && "text-white"}`}>
                    <div>Ruby on Rails</div>
                    <div className="flex gap-4 items-center">
                        <div className={`w-40 h-2 
                                        ${!dark && "bg-gray-400"}
                                        ${dark && "bg-gray-200"}`}>
                            <div className={`w-8.5/10  h-full
                                            ${!dark && "bg-blue-900"}
                                            ${dark && "bg-cyan-500"}`}></div>
                        </div>
                        <div className="text-sm">85%</div>
                    </div>
                </div>
                <div className={`flex justify-between items-center
                                ${dark && "text-white"}`}>
                    <div>Javascript</div>
                    <div className="flex gap-4 items-center">
                        <div className={`w-40 h-2 
                                        ${!dark && "bg-gray-400"}
                                        ${dark && "bg-gray-200"}`}>
                            <div className={`w-9/10  h-full
                                            ${!dark && "bg-blue-900"}
                                            ${dark && "bg-cyan-500"}`}></div>
                        </div>
                        <div className="text-sm">90%</div>
                    </div>
                </div>
                <div className={`flex justify-between items-center
                                ${dark && "text-white"}`}>
                    <div>React</div>
                    <div className="flex gap-4 items-center">
                        <div className={`w-40 h-2 
                                        ${!dark && "bg-gray-400"}
                                        ${dark && "bg-gray-200"}`}>
                            <div className={`w-8.5/10  h-full
                                            ${!dark && "bg-blue-900"}
                                            ${dark && "bg-cyan-500"}`}></div>
                        </div>
                        <div className="text-sm">85%</div>
                    </div>
                </div>
                <div className={`flex justify-between items-center
                                ${dark && "text-white"}`}>
                    <div>Git</div>
                    <div className="flex gap-4 items-center">
                        <div className={`w-40 h-2 
                                        ${!dark && "bg-gray-400"}
                                        ${dark && "bg-gray-200"}`}>
                            <div className={`w-7/10 h-full
                                            ${!dark && "bg-blue-900"}
                                            ${dark && "bg-cyan-500"}`}></div>
                        </div>
                        <div className="text-sm">70%</div>
                    </div>
                </div>
                <div className={`flex justify-between items-center
                                ${dark && "text-white"}`}>
                    <div>Sql</div>
                    <div className="flex gap-4 items-center">
                        <div className={`w-40 h-2 
                                        ${!dark && "bg-gray-400"}
                                        ${dark && "bg-gray-200"}`}>
                            <div className={`w-7/10 h-full
                                            ${!dark && "bg-blue-900"}
                                            ${dark && "bg-cyan-500"}`}></div>
                        </div>
                        <div className="text-sm">70%</div>
                    </div>
                </div>

            </div>
        </div>
    )
}