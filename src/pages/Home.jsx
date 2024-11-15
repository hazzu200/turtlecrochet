import Navbar from "../components/Navbar";
import Banner from "../components/Banners";
import ProductSection from "../components/ProductsAd";
import DeliveryInfo from "../components/DeliveryInfo";
import Footer from "../components/Footer";
import Yarninfo from "../components/YarnInfo";

export default function Home(){
    return (
        <>
             <Navbar />
            <Banner />
            <h1 className="font-Faculty-Glyphic text-5xl my-10">Our Products</h1>
            <ProductSection/>
            <DeliveryInfo/>
            <Yarninfo></Yarninfo>

            <Footer />
        </>
    )
}