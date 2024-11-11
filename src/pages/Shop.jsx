import Navbar from "../components/Navbar"
import CustomBoquetBanner from "../components/CustomBoquetInfo"
import Item from "../components/item"
export default function Shop(){
    return (
        <>
            <Navbar></Navbar>
            <CustomBoquetBanner />
            <Item></Item>
        </>
    )
}