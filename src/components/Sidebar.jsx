import React from 'react'
import { LuThumbsUp } from 'react-icons/lu'
import {
    MdHistory,
    MdHomeFilled,
    MdOutlineVideoLibrary,
    MdSubscriptions,
    MdOutlineWatchLater
} from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'



const Sidebar = () => {

    const mainLinks = [
        {
            icons: <MdHomeFilled className="text-xl"/>,
            name: "Home"
        },
        {
            icons: <SiYoutubeshorts className="text-xl"/>,
            name: "Shorts"
        },
        {
            icons: <MdSubscriptions className="text-xl"/>,
            name: "Subscriptions"
        }
    ]

    const otherLinks = [
        {
            icons: <MdOutlineVideoLibrary className="text-xl"/>,
            name: "Library"
        },
        {
            icons: <MdHistory className="text-xl"/>,
            name: "History"
        },
        {
            icons: <MdOutlineWatchLater className="text-xl"/>,
            name: "Watch Later"
        },
        {
            icons: <LuThumbsUp className="text-xl"/>,
            name: "Liked"
        }
    ]

    return (
        <div className='w-2/12 bg-[#212121] pr-5 p-2 overflow-auto pb-8 h-screen'>
            <ul className='flex flex-col border-b-2 border-gray-600 py-2'>
                {mainLinks.map(({icons, name}) => {
                    return (<li key={name} className={`pl-6 py-3 ${name === "Home" ? "bg-slate-600 rounded-lg" : ""} hover:bg-zinc-600 hover:rounded-lg`}>
                        <a className='flex items-center gap-5' href="#">{icons}<span className='text-sm tracking-wider'>{name}</span></a>
                        
                    </li>)
                })}
            </ul>
            <ul className='flex flex-col border-b-2 border-gray-600 py-2 '> 
                {otherLinks.map(({icons, name}) => {
                    return (<li key={name} className={`pl-6 py-3 hover:bg-zinc-600 hover:rounded-lg ${name === "Home"?"hover:bg-slate-600":" "}`}>
                        <a className='flex items-center gap-5' href="#">{icons}<span className=''>{name}</span></a>
                        
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Sidebar
