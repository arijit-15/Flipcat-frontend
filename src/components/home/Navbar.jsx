import { Box,Typography,styled } from "@mui/material";
import { navData } from "../../constants/data";


const Component = styled(Box)`
display:flex;
margin:50px 130px 0px 130px;
justify-content:space-between;
overflow:'hidden';

`
const Container = styled(Box)`
padding: 12px 8px;
text-align:center;
`;
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`


const NavBar = () =>{
return(
   <Box style={{background:'#fff'}}>
   <Component>
      {
         navData.map(data=>(
            <Container>
               <img src={data.url} alt="nav" style={{width:64}} />
               <Text>{data.text}</Text>
            </Container>
         ))
      }
   </Component>
   </Box>
);
};

export default NavBar;