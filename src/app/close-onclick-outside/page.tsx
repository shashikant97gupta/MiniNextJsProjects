"use client"
import { useEffect, useRef, useState } from "react";

const CloseOnOutsideClick = () => {
    const [isopen, setIsopen] = useState<boolean>(true);
    const dropdownref = useRef(null)

    const toggler = () => setIsopen(prev => !prev)

    useEffect(() => {

        const handleClickOutside = (event) => {
            console.log("openb", isopen, dropdownref, event.target, dropdownref.current)

            if(dropdownref.current && !dropdownref.current.contains(event.target)){
                setIsopen(false)
            }
        }

        window.addEventListener("click", handleClickOutside)

        return (
            window.removeEventListener("click", toggler)
        )
    }, [])

    const items: string[] = ['One', 'Two', 'Three']
    
  return (
    <div className="mx-[20%] my-20 p-20 flex-col items-center justify-between bg-blue-200 rounded rounded-t-2xl">
        <h2 className="text-3xl text-center pb-4">CloseOnOutsideClick</h2>
        <div className="" ref={dropdownref}>
            <button onClick={toggler} className="border my-1 bg-white border-amber-950 relative">Select</button>
            <div className="rounded-2  bg-white absolute">
                {
                    isopen && items.map((item) => (
                        <p key={item}>{item}</p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CloseOnOutsideClick