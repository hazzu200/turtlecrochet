import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Item({details , id , search}){

    return(
        <div className="h-[850px] w-[450px]  mt-10 mb-5 flex flex-col items-center hover:cursor-pointer hover:bg-item-card-bg rounded-3xl transition-colors ">
                  <img src={details.image} className="  w-3/4 mt-10 rounded-3xl" />
        <div className="flex items-start flex-col pl-2 pt-3 w-3/4">
             <h1 className="font-Montesserat text-2xl font-500">{details.name}</h1>
             <h1 className="text-[#707072]">{details.category} </h1>
             <h1 className="text-xl font-Montesserat font-bold mt-4">MRP. ₹{details.price}</h1>
             <button className="text-xl border-border-cyan text-border-cyan rounded-full border-2 p-3 flex items-center justify-center mt-3 hover:border-black hover:text-black"><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
          
        </div>  
    )
}