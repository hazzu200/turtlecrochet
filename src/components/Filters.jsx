import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { createContext, useRef, useState } from "react" 

export default function Filters({search}){






    const searchBarRef = useRef(null)
    const searchVal = () =>{
        if (searchBarRef.current){
          search(searchBarRef.current.value.toLowerCase().trim())
        }
    }

 return(
    <div className="h-[100px] flex justify-center items-center">
        <button className="text-xl border-border-cyan rounded-3xl border-2 p-2 px-3 text-border-cyan hover:text-black hover:border-black transition-colors" onClick={searchVal}><FontAwesomeIcon icon={faMagnifyingGlass}  /></button>
        <input type="text" className="ml-2 mr-5 border-border-cyan border-2 rounded-3xl px-5 py-2 w-[500px] active:border-black active:text-black transition-colors "  placeholder="Search" ref = {searchBarRef}/>
    </div>
 )

}