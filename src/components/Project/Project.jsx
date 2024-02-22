import PropTypes from "prop-types"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"
export default function Project({data}) {
    const [expand, setExpand] = useState(true)
    const dark = useOutletContext()
    return(
        <div className={`border-b pb-5 last:border-0 h-fit
                        ${dark && "border-slate-600"}
                        ${!dark && "border-gray-300"}`}>
            <div className="flex justify-between mb-4 pl-2">
                <div className="flex gap-2">
                    <button onClick={() => expand ? setExpand(false) : setExpand(true)}>
                        <svg id="plus" className={`w-6 h-6 ${expand && "hidden"} ${dark && "text-white"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg id="minus" className={`w-6 h-6 ${!expand && "hidden"} ${dark && "text-white"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                    <div className={`font-semibold text-xl
                                    ${dark && "text-white"}`}>{data.name}</div>
                </div>
                <div className="flex gap-4 mr-4">
                    <a href={data.github} target="_blank" rel="noreferrer"
                        className={`${!dark && "text-blue-800 hover:text-blue-500"}
                        ${dark && "text-cyan-400 hover:text-cyan-200"}`}>github</a>
                    {data.preview && <a href={data.preview} target="_blank" rel="noreferrer"
                                        className={`${!dark && "text-blue-800 hover:text-blue-500"}
                                        ${dark && "text-cyan-400 hover:text-cyan-200"}`}>live preview</a>}
                </div>
            </div>
            <div className={`origin-top 
                            ${!expand && "hidden"}`
                            }>
                <div className="flex gap-2 mb-2 pl-10">
                    <div className={`${!dark && "text-black/70"}
                                        ${dark && "text-gray-200"}`}>What I learnt:</div>
                    <div className={`${dark && "text-white"}`}>{data.learn}</div>
                </div>
                <div className="flex gap-2 pl-10">
                    <div className={`${!dark && "text-black/70"}
                                        ${dark && "text-gray-200"}`}>Technology:</div>
                    <div className={`${dark && "text-white"}`}>{data.technology}</div>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    data: PropTypes.object.isRequired
}