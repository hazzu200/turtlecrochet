import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductsSection";
import DeliveryInfo from "../components/DeliveryInfo";
import Footer from "../components/Footer";
import Yarninfo from "../components/YarnInfo";
export default function App(){

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
     
    );
}
