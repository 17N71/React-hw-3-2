import React, {useEffect, useState} from 'react';

function Input() {

    const [message,setMessage] = useState('')
    const [err,setErr] = useState('')
    useEffect(()=>{
        if (message == ""){
            setErr('')
        }
        else if (message.length < 8 || message.charAt(0) != message.charAt(0).toUpperCase()){
            setErr("Your password should be more than 8 symbols and first letter should be uppercase")
        }

        else {
            setErr("")
        }
    },[message])
    const styles = {
        err:{
            color:"red",
            fontWeight:"600"
        },
        mt:function (mt){
            return {marginTop:`${mt}px`}
        },
        input:{
            borderRadius:"4px",
            padding:"5px",
            height:"26px",
            width:"220px",
            outline:"none",
            borderWidth:"2px",
            borderStyle:"solid",
            borderColor:"purple",
            fontSize:"16px"
        }
    }
    return (
        <span>
            <input type="password"  style={Object.assign(styles.mt(10), styles.input)}  placeholder={"enter your password"}  value={message} onChange={(e)=>setMessage(e.target.value)} />
            <div style={Object.assign(styles.err, styles.mt(3))}>{err}</div>
        </span>
    );
}

export default Input;