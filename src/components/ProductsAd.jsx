
import DisplayProduct from "./DisplayProduct";

export default function ProductSection(){
    return(
        <div className="flex justify-between items-center products-section px-16">
         <DisplayProduct number= {0}/>
        <DisplayProduct number= {1}/>
        <DisplayProduct number= {2}/>
        <DisplayProduct number= {3}/>
        </div>
      
    );
}