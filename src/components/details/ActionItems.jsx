import { useState } from "react";
import { Box, Button,styled } from "@mui/material";
import { useDispatch } from "react-redux";
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import { loadStripe } from "@stripe/stripe-js";


const LeftContainer = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;
`;

const Image = styled('img')({
    padding:'15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
})

const StyledButton  = styled(Button)`
width:46%;
height:50px;
border-radius: 2px;
`


const ActionItem = ({product}) =>{
const navigate = useNavigate();
const dispatch = useDispatch();

const [quantity,setQuantity] = useState(1);
const {id} = product;
 const addItemToCart = () => {
  dispatch(addToCart(id,quantity));
   navigate('/cart');
 }

 const buyNow = async() => {
 let response = await payUsingPaytm({amount:500,email:'arijitchak15@gmail.com'})
 let information = {
  action: 'https://securegw-stage.paytm.in/order/process',
  params:response
 }
 post(information);
 }

 

  return (
    <LeftContainer>
   <Image src={product.detailUrl} alt="" />
   <StyledButton style={{marginRight: 10, background: '#ff9f00'}} variant="contained" onClick={() => addItemToCart()}><Cart/>ADD TO CART</StyledButton>
   <StyledButton style={{background: '#fb641b'}} variant="contained" ><Flash/>BUY NOW</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem;