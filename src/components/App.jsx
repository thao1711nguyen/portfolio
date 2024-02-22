import { Link, useNavigate, Outlet } from 'react-router-dom'
import myPortrait from "../assets/thao-portrait.jpg"
import { useState } from 'react'
function App() {
    const navigate = useNavigate()
    const [dark, setDark] = useState(false)
    return(
        <div className={`w-full
                        ${dark && "bg-slate-800"}`}>
            <div className={`rounded-md flex justify-between items-center 
                            px-8 h-40 w-full self-start
                            relative
                            ${!dark && "bg-slate-300" }
                            ${dark && "bg-cyan-900"}`}>
                <div className='grid grid-cols-3 grid-rows-2 gap-x-4'>
                    <h1 className={`text-3xl col-span-2 row-span-1
                                    ${!dark && "text-black"}
                                    ${dark && "text-white"}`}>Thao Ng</h1>
                    <div className='rounded-full size-16 border-black bg-cover col-start-3 row-start-1 row-span-2' style={{
                        backgroundImage: `url(${myPortrait})`
                    }}>
                    </div>
                    <div className={`text-l col-span-2 row-start-2
                                    ${!dark && "text-slate-500"}
                                    ${dark && "text-slate-300"}`}>
                        Ruby on Rails, React
                    </div>
                </div>
                <div className='flex  gap-4 items-center'>
                    <button type='button' onClick={() => navigate("/projects")}
                        className={`rounded-md p-2
                                    ${!dark && "bg-slate-500 text-white hover:bg-slate-400"}
                                    ${dark && "bg-slate-300 text-black hover:bg-slate-100"} `}
                    >Projects</button>
                    <Link to="resume" className={`flex gap-1
                                                ${!dark && "text-black"}
                                                ${dark && "text-white"}`}>Resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </div>
                <button className='absolute top-2 right-2' onClick={() => dark ? setDark(false) : setDark(true)}>
                    <svg id='sun' className={`w-6 h-6 ${dark && "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    <svg id='moon' className={`text-white w-6 h-6 ${!dark && "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
            </div>
            <Outlet context={dark} />
        </div>
    )
}

export default App
