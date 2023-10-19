import { Button,ButtonGroup,styled } from "@mui/material";

const Component = styled(ButtonGroup)`
margin-top:30px;
`



const GroupedButton  = () =>{
    return(
        <Component>
       <Button>-</Button>
       <Button>1</Button>
       <Button>+</Button>
       </Component>
    )
}

export default GroupedButton;