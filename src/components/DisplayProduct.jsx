import ad1 from '../assets/ad1.jpg'
import ad2 from '../assets/ad2.jpg'
import ad3 from '../assets/ad3.jpg'
import ad4 from '../assets/ad5.jpg'

const images = [ad1,ad2,ad3,ad4]
export default function DisplayProduct(counter){

    return (
     
            <img src={images[counter.number]} alt="" className='h-full  rounded-2xl'/>
    )
    
}