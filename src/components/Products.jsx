import { fb_database } from "../backend/firebase"
import { child, get } from "firebase/database"
import { useEffect, useRef, useState } from "react"
import Item from "./item"
import Filters from "./Filters"



export default function Products() {

    const [items, setItems] = useState([]);
    const [searchValue, changeSearchValue] = useState('')

    useEffect(() => {
        get(child(fb_database, "Items")).then((snapshot) => {
            setItems(Object.values(snapshot.val()));


        }).catch((error) => {
            console.log(error);

        })
    }, [])


    return (
        <>
            <Filters search = {changeSearchValue} ></Filters>
            <div className="grid grid-cols-autofill px-10">
                {
                    
                
                    items.map((item, index) => {
                        if (item.category != "" && item.name.toLowerCase().includes(searchValue)) {
                            return <Item details={item} key={index} id={item.id}></Item>
                        }

                    })
                   
                }
            </div>
        </>

    )
}