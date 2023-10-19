
import {Badge, Box,Button,Typography,styled} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
//components
import LoginDialog from '../login/LoginDialog';
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
display:'flex',
margin: '0 3% 0 auto',
'&  > *': {
  marginRight:'40px !important ',
  fontSize : 16,
  alignItems:'center'
},
[theme.breakpoints.down('sm')]: {
  display: 'block'
}
}));
// const Wrapper = styled(Box)(({ theme }) => ({
//   margin: '0 3% 0 auto',
//   display: 'flex',
//   '& > *': {
//       marginRight: '40px !important',
//       textDecoration: 'none',
//       color: '#FFFFFF',
//       fontSize: 12,
//       alignItems: 'center',
//       [theme.breakpoints.down('sm')]: {
//           color: '#2874f0',
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           marginTop: 10
//       }
//   },
//   [theme.breakpoints.down('sm')]: {
//       display: 'block'
//   }
// }));


const Container = styled(Link)(({ theme }) => ({
display:'flex',
textDecoration:'none',
color:'inherit',
[theme.breakpoints.down('sm')]: {
  display: 'block'
}
}));


const LoginButton = styled(Button)`
color: #0000ff;
background:#FFFFFF;
text-transform:none;
padding:5px 40px;
font-weight:600;
box-shadow:none;
height:32px;
border-radius:2px;
`




const CustomButoons = () =>{

const [open,setOpen] = useState(false);
const {account} = useContext(DataContext);

const openDialog = () =>{
  setOpen(true);
}

const { cartItems } = useSelector(state => state.cart);

return(
  <Wrapper>
    {
      account ? <Typography>{account}</Typography> :
      <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
    }
 

 <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
 <Typography  style={{ marginTop: 3 }}>More</Typography>
<Container to="/cart">
  <Badge badgeContent={cartItems?.length} color='secondary'>
  <ShoppingCart/>
  </Badge>
    <Typography style={{marginLeft:10}}>Cart</Typography>
</Container>
<LoginDialog open={open} setOpen={setOpen}/>
  </Wrapper>
)
}

export default CustomButoons;
