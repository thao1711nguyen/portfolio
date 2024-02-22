import { useOutletContext } from "react-router-dom"
import ghIcon from "../../assets/git-hub.png"

export default function Contact() {
    const dark = useOutletContext()
    return(
        <div className="flex flex-col col-start-1 col-span-1 row-start-1 row-span-1">
            <div className={`text-xl flex gap-2 pl-2
                            ${!dark && "bg-black text-white"}
                            ${dark &&  "bg-white text-black"}`}>
                <div className="font-medium">Contact</div>
            </div>
            <div className={`p-4 pl-2 text-base flex gap-4 flex-col origin-top transition-transform  duration-300 ease-in-out `}>
                <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${dark && "text-white"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                    </svg>
                    <div className={`${!dark && "text-gray-700"}
                            ${dark && "text-gray-200"}`}>17/01/1998</div>
                </div>
                <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${dark && "text-white"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                    <div className={`${!dark && "text-gray-700"}
                            ${dark && "text-gray-200"}`}>thao1711nguyen@gmail.com</div>
                </div>
                <div className="flex gap-4">
                    <img src={ghIcon} className={`w-6 h-6
                                                ${dark && "bg-white"}`}/>
                    <a className={`${!dark && "text-blue-800 hover:text-blue-500"}
                                    ${dark && "text-cyan-400 hover:text-cyan-200"}`} href="https://github.com/thao1711nguyen" target="_blank" rel="noreferrer">https://github.com/thao1711nguyen</a>
                </div>
                <div className="flex gap-4">
                    
                    <svg className={`w-6 h-6 ${dark && "text-white"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    <div className={`${!dark && "text-gray-700"}
                            ${dark && "text-gray-200"}`}>Vietnam</div>
                </div>
            </div>
        </div>
    )
}