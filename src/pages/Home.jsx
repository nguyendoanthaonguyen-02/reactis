import Banner from "../components/Banner";
// import Gioithieu from "../components/Gioithieu";
import ShowSPKM, { ShowSPBC, ShowSPH } from "../components/ShowProduct";


export default function index() {

    return (
        <>
       
            <Banner />
            {/* <Gioithieu></Gioithieu> */}
            {/* <Sanpham></Sanpham> */}
            
            <ShowSPKM></ShowSPKM>
            <ShowSPBC></ShowSPBC>
            <ShowSPH></ShowSPH>
            
        </>
    )
}