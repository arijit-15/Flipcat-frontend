
import { Grid,Box,Typography,styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { loadStripe } from "@stripe/stripe-js";

 //components
 import CartItem from "./CartItem";
 import TotalView from "./TotalView";

 const Container = styled(Grid)(({theme}) => ({
 padding: '30px 135px',
 [theme.breakpoints.down('sm')]:{
    padding:'15px 0px'
 }
}))

 const Header = styled(Box)`
 padding:15px 24px;
 background:#fff;
 `;

 const ButtonWrapper = styled(Box)`
 padding:16px 22px;
 background:#fff;
 box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
 border-top: 1px solid #f0f0f0;
 `;

 const StyledButton = styled(Button)`
 display:flex;
 margin-left:auto;
 background: #fb641b;
 color: #fff;
 width: 250px;
 height: 51px;
 border-radius: 2px;
 `;

 const LeftComponent = styled(Grid)(({theme}) => ({
     paddingRight:15,
     [theme.breakpoints.down('sm')]:{
        marginBottom:15
     }

 }))
 

const Cart = () =>{
    const {cartItems} = useSelector(state => state.cart)

    const makePayment = async() => {
       const stripe = await loadStripe("pk_test_51O26goSCYdCkPYHofSVVBk1NFtHGnLb2YobHWa0OYyTNZxnMLlUJyL4qTerhRUA9AOIk3WlzgnHrY8FZ98iY7Smk00g6wGJW6A")
        const body = {
          products:cartItems
      }
      const headers = {
          "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:8080/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });
     
      const session = await response.json();

      const result  = stripe.redirectToCheckout({
        sessionId:session.id
      })
      if(result.error){
        console.log(result.error);
    }

       }
    return(
     <>
     {
        cartItems.length ?
        <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
               <Header>
                <Typography>My Cart({cartItems.length})</Typography>
               </Header>
               {
                cartItems.map(item => (
               <CartItem item={item}/>
                ))
               }
               <ButtonWrapper>
                <StyledButton onClick={makePayment}>Place Order</StyledButton>
               </ButtonWrapper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
             <TotalView cartItems={cartItems}/>
            </Grid>
        </Container>
        : <EmptyCart/>
     }
     </>
    )
}

export default Cart;