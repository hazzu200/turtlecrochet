import customBoquetImage from '../assets/custom-boquet-image.jpg'


export default function CustomBoquetBanner() {
    return (
        <>
             <div className="w-full flex justify-center items-center mt-10">
            <div className="flex w-3/5 delivery-info bg-[#839087] my-10 items-center rounded-xl ">
            <div className='p-16'>
                    <h1 className='text-3xl font-Faculty-Glyphic mb-10 text-white-font'>Custom Boquets</h1>
                    <p className='text-lg text-white-font'>"We take great pride in the quality of yarn we use for every crochet piece. Carefully selected for its softness, durability, and vibrant colors, our yarn ensures that each item not only looks beautiful but also lasts long. With every stitch, we craft items that are as strong as they are cozy, providing you with a premium handmade experience that you'll cherish for years to come." </p>
                    <button className='mt-10 py-2 px-20 text-xl border-white-font border-2 text-white-font rounded-xl hover:bg-white-font hover:text-[#839087]'>Make your own</button>
                </div>

                <img src={customBoquetImage} className='h-full rounded-r-xl' alt="" />
            </div>
        </div>
        </>
    )
}