import Navbar from "../components/Navbar"
import CustomBoquetBanner from "../components/CustomBoquetInfo"
import Products from "../components/Products"
export default function Shop(){
    return (
        <>
            <Navbar></Navbar>
            <CustomBoquetBanner />
            <Products></Products>
        </>
    )
}