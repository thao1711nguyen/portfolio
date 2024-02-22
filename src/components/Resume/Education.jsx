import { useOutletContext } from "react-router-dom"

export default function Education() {
    const dark = useOutletContext()
    return(
        <div className="flex flex-col col-start-2 col-span-1 row-start-3 row-span-1">
            <div className={`text-xl flex gap-2 pl-2
                            ${!dark && "bg-black text-white"}
                            ${dark &&  "bg-white text-black"}`}>
                <div className="font-medium">Education</div>
            </div>
            <div className={` p-4 pl-2 text-base flex gap-4 flex-col origin-top transition-transform  duration-300 ease-in-out `}>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between pl-2">
                        <div className={`font-semibold
                                        ${dark && "text-white"}`}>Bachelor of Biochemistry</div>
                        <div className={`text-sm
                                        ${!dark && "text-gray-700"}
                                        ${dark && "text-gray-200"}`}>2018-2022</div>
                    </div>
                    <a className={`pl-4
                                ${!dark && "text-blue-800 hover:text-blue-500"}
                                ${dark && "text-cyan-400 hover:text-cyan-200"}`} href="https://hcmiu.edu.vn/" target="_blank" rel="noreferrer">International University - National University HCMC</a>
                    <div className={`flex gap-2 pl-4 text-sm
                                    ${dark && "text-white"}`}>
                        <div>- GPA:</div>
                        <div>81.9/100</div>
                    </div>
                </div>
            </div>
        </div>
    )
}