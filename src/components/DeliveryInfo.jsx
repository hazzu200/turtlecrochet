import deliverImage from '../assets/delivery.jpg'

export default function DeliveryInfo() {

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex w-3/5 delivery-info bg-[#eae1f5] my-10 justify-between items-center rounded-xl" >
                <div className='p-16'>
                    <h1 className='text-3xl font-Faculty-Glyphic mb-10'>Delivery Care</h1>
                    <p className='text-lg'>"We take pride in delivering your crochet creations with care. Each item is carefully packaged to preserve its quality, and we work with trusted delivery partners to ensure your order arrives safely and on time, so you can enjoy your handmade treasures without worry all over India." </p>
                    <button className='border-border-cyan border-2 px-36 mt-6 rounded-xl py-4 hover:bg-border-cyan hover:text-white transition-colors'> Read Policies </button>
                </div>

                <img src={deliverImage} className='h-full rounded-r-xl' alt="" />
            </div>

        </div>



    )

}