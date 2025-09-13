import { Avatar, Box, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext'
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function extractCodeFromString(message: string) {
  if(message.includes("```")){
    const blocks = message.split("```");
    return blocks;
  }
}
function isCodeBlock(str: string){
   if(
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//") 
   ){
    return true;
   }
   return false;
}

export const ChatItem = ({content, role}: {content: string, role: "user" | "assistant"}) => {
  const messageBlock = extractCodeFromString(content);
  const auth = useAuth();
  return (
    role === "assistant"? <Box sx={{display: "flex", p: 2, bgcolor: "#004d5612", my: 1, gap: 2, borderRadius: 2}}>
      <Avatar sx={{ml: 0, }}>
        <img src='robot.png' alt='groq' width={"30px"}></img>
      </Avatar>
      <Box>
        {!messageBlock && (<Typography fontSize={"20px"}>{content}</Typography>)}
        {messageBlock && messageBlock.length && messageBlock.map((block)=> isCodeBlock(block) ? <SyntaxHighlighter style={coldarkDark}  language="javascript">{block}</SyntaxHighlighter> : 
        (<Typography sx={{ fontSize: "20px" }}>{block}</Typography>))}
        </Box>
    </Box>:(
       <Box sx={{display: "flex", p: 2, bgcolor: "#004d56", gap: 2, borderRadius:2}}>
      <Avatar sx={{ml: 0, bgcolor: "black",p:0.4, color: "white" }}>
      {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        {!messageBlock && (<Typography fontSize={"20px"}>{content}</Typography>)}
        {messageBlock && messageBlock.length && messageBlock.map((block)=> isCodeBlock(block) ? <SyntaxHighlighter style={coldarkDark}  language="javascript">{block}</SyntaxHighlighter> : 
        (<Typography sx={{ fontSize: "20px" }}>{block}</Typography>))}
        </Box>
    </Box>
    )
  )
}
