import React, {useEffect} from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { Box,Typography, Button} from '@mui/material';
import {CustomizedInput} from '../compenents/shared/CustomizedInput';
import {toast} from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate} from 'react-router-dom';
const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleSumit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        // console.log(email, password);
        try {
            toast.loading("Signing in",{id: "login"});
            await auth?.login(email, password);
            toast.success("Signed Successfully",{id: "login"})
        } catch (error) {
            console.log(error);
            toast.error("Signing in Failed", {id: "login"})    
        }
        
    }
    useEffect(() => {
        if (auth?.user) {
          return navigate("/chat");
        }
      }, [auth]);
    return <Box width={'100%'} display={"flex"} flex={1}>
        <Box padding={8} mt={8} display={{md:"flex" , sm:"none", xs: "none"}}>
            <img src="airobot.png" alt="Robot" style={{width:"400px"}}/>
        </Box>
        <Box display={"flex"} flex={{xs: 1, md: 0.5}} justifyContent={"center"} alignItems={"center"} padding={2} ml={"auto"} mt={16}>
            <form onSubmit={handleSumit}
            style={{margin:"auto", padding: "30px", boxShadow:"10px 10px 20px #000", borderRadius:"10px",border: "none" }} action="">
                <Box sx={{display:'flex', flexDirection:"column", justifyContent:"center"}}>
                    Login
                    <Typography variant="h4" textAlign={"center"} padding={2} fontWeight={600}>
                        <CustomizedInput type="email" name="email" label="Email" />
                        <CustomizedInput type="password" name="password" label="Password" />
                        <Button type="submit" 
                        sx={{px:2, py:1, mt:2, width:"400px",borderRadius:2, backgroundColor: "#00fffc", 
                        ":hover":{bgcolor: "white", color: "black"}}} endIcon={<AiOutlineLogin/>} >Login</Button>
                    </Typography>
                </Box> 
            </form>
        </Box>
    </Box>
}
export default Login;
