import { useOutletContext } from "react-router-dom"

export default function Languagues() {
    const dark = useOutletContext()
    return(
        <div className="flex flex-col row-start-2 row-span-1 col-start-1 col-span-1">
            <div className={`text-xl flex gap-2 pl-2
                            ${!dark && "bg-black text-white"}
                            ${dark &&  "bg-white text-black"}`}>
                <div className="font-medium">Languages</div>
            </div>
            <div className={` p-4 pl-2 text-base flex gap-4 flex-col origin-top transition-transform  duration-300 ease-in-out`}>
                <div className="flex justify-between">
                    <div className={`font-semibold
                                    ${dark && "text-white"}`} >Vietnamese</div>
                    <div className={`${!dark && "text-gray-700"}
                                    ${dark && "text-gray-300"}`}>native</div>
                </div>
                <div className="flex justify-between">
                    <div className={`font-semibold
                                    ${dark && "text-white"}`} >English</div>
                    <div className={`${!dark && "text-gray-700"}
                                    ${dark && "text-gray-300"}`}>Ielts 7.5</div>
                </div>
        
            </div>
        </div>
    )
}