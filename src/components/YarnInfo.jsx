import yarnImage from "../assets/yarn.jpg"

export default function Yarninfo(){


    return(
        <div className="w-full flex justify-center items-center">
            <div className="flex w-3/5 delivery-info bg-[#e6efea] my-10 justify-between items-center rounded-xl ">
            <div className='p-16'>
                    <h1 className='text-3xl font-Faculty-Glyphic mb-10'>Our Yarn</h1>
                    <p className='text-lg'>"We take great pride in the quality of yarn we use for every crochet piece. Carefully selected for its softness, durability, and vibrant colors, our yarn ensures that each item not only looks beautiful but also lasts long. With every stitch, we craft items that are as strong as they are cozy, providing you with a premium handmade experience that you'll cherish for years to come." </p>
                </div>

                <img src={yarnImage} className='h-full rounded-r-xl' alt="" />
            </div>
        </div>
    )
}