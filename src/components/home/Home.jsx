import { useEffect } from "react";
//components
import NavBar from "./Navbar";
import Banner from "./Banners";
import { getProducts } from "../../redux/actions/productActions";
import {Box,styled} from '@mui/material';
import { useDispatch,useSelector } from "react-redux";
import Slide from "./Slide";
// import MidSlide from "./MidlSlide";
import MidSection from "./MidSection";
 
const Component = styled(Box)`
padding: 10px;
background:#F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)
    console.log(products);
    const dispatch = useDispatch();

   useEffect(() =>{
        dispatch(getProducts())
   },[dispatch])

    return( 
    <>
        <NavBar/>
        <Component>
        <Banner/>
        <Slide products={products} title="Deal of the day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's Picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/> 
        </Component>
    </>
    )
}


export default Home;