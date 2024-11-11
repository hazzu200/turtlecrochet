import BannerImage from "../assets/banner.jpg"
export default function Banner(){
    return(
        <div className=" banner flex w-screen  justify-center  bg-background-beige ">
            <div className="text-center w-2/4 flex flex-col justify-center items-center">
                 <h1 className="font-Faculty-Glyphic text-5xl mb-10">The Art of Crochet</h1>
                <p className="text-xl"> "Handcrafted crochet treasures made with love, perfect for every occasion."</p>
                <a href="#/shop" className="mt-6 w-1/4 p-4 border-2 rounded-xl border-black hover:bg-[#191919] hover:text-white transition-colors" >Shop Now</a>
            </div>
            <div className="w-2/4">
                <img src={BannerImage} className="h-full w-full" alt="" />
            </div>
        </div>
    );

}

