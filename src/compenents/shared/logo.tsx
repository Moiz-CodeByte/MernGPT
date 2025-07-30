import {Link} from "react-router-dom";
import { Typography } from "@mui/material";
const Logo = () => {
    return <div style={{
        display: "flex" , 
        marginRight: 'auto',
        alignItems: 'center',
        gap: '15px'
    
    
    }}
    >
        <Link to={"/"}>
            <img 
            src = "robot.png"
            alt = "Grok logo"
            width={"40px"}
            height={"40px"}
            className="image-inverted" 
            />
            
        </Link>
        <Link to={"/"} style={{textDecoration: "none"}}>
        <Typography sx={{ display:{md: "block", sm: "none", xs: "none"} , 
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
             }}>
                
                <span style={{ fontSize: "20px"}}>MERN</span>-Gpt
                
             </Typography>
             </Link>



    </div>;
}
export default Logo;