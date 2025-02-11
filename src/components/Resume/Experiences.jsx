import { useOutletContext } from "react-router-dom"
export default function Experiences() {
  const dark = useOutletContext()
  return(
    <div className="flex flex-col col-start-1 col-span-1 row-start-2 row-span-1">
        <div className={`text-xl flex gap-2 pl-2
                        ${!dark && "bg-black text-white"}
                        ${dark &&  "bg-white text-black"}`}>
            <div className="font-medium">Experiences</div>
        </div>
        <div className={` p-4 pl-2 text-base flex gap-4 flex-col origin-top transition-transform  duration-300 ease-in-out `}>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between pl-2">
                    <div className={`font-semibold
                                    ${dark && "text-white"}`}>Rails developer</div>
                    <div className={`text-sm
                                    ${!dark && "text-gray-700"}
                                    ${dark && "text-gray-200"}`}>2024-2025</div>
                </div>
                <a className={`pl-4
                            ${!dark && "text-blue-800 hover:text-blue-500"}
                            ${dark && "text-cyan-400 hover:text-cyan-200"}`} href="https://www.optimizer.vn/" target="_blank" rel="noreferrer">Optimizer Vietnam</a>
                <div className={`flex flex-col gap-2 pl-4 text-sm
                                ${dark && "text-white"}`}>
                    <div className="text-base font-medium">- What I did:</div>
                    <ul className={`list-disc ml-6 ${dark && "text-white"}`}>
                      <li>Maintain company's projects</li>
                      <li>Upgrade Ruby and Rails to the latest possible versions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}