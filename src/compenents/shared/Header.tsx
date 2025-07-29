import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar"
import Logo from "./logo";
import { useAuth } from "../../context/AuthContext";
import NavigationLink from "./NavigationLink";
const Header = () => {
    const auth = useAuth();
    return <AppBar sx={{bgcolor:"transparent", position:"static" , boxShadow:"none"}}>
        
    <ToolBar sx={{display:"flex"}}>
       
        <Logo /> <div>
            {auth?.isLoggedIn ? <>
            <NavigationLink bg="#00fffc" to="/chat" text="Go to Chat" textColor="black" />
            <NavigationLink bg="#51538f" textColor="white" to="/" text="logout" onClick ={auth.logout}/>
            </> : (<><NavigationLink bg="#00fffc" to="/login" text="Login" textColor="black" />
            <NavigationLink bg="#51538f" textColor="white" to="/signup" text="Signup" /></>)}
        </div></ToolBar>
    </AppBar>
}
export default Header;