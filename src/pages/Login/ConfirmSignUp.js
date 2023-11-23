import React from "react"
import { useState } from "react"
import {confirmSignUp} from "../../navigation/Auth/UserPool";
import {AppLayout} from "../../components/AppLayout/AppLayout";
import Footer from "../../components/AppLayout/Footer";
import {TextField} from "@mui/material";
import MainButton from "../../components/MainButton";
import ReactCodeInput from "react-code-input";
import { MdEmail } from "react-icons/md";
import {useAuth} from "../../navigation/Auth/ProvideAuth";
import SuccessfulConfirmation from "../../navigation/Auth/SuccessfulConfirmation";

// TODO: Make this private route: only after you signup or you leave the page and want to verify again (after trying to sign in)
// TODO: OR simply add a link to the user email so you don't have to figure out which page to show and worry about page getting lost
export default function ConfirmSignUp() {
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const {username} = useAuth()

    const inputProps = {
        inputStyle: {
            fontFamily: '\'Poppins, sans-serif\'',
            MozAppearance: 'textfield',
            margin:  '4px',
            width: '3rem',
            fontSize: '30px',
            height: '3rem',
            paddingLeft: '7px',
            color: '#000',
            border: '1px solid #ff9900'
        }
    }

    const handleCodeChange = (value) => {
        setCode(value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        console.log("code", code)
        try {
            await confirmSignUp(username, code)
            setSuccess(true)
        } catch (err) {
            console.log(err.message)
            setError("This code is incorrect")
        }
    }


    if (success) {
        return (
            <SuccessfulConfirmation/>
        )
    }

    return (
        <AppLayout>
            <div className="login-container colored-border">
                <MdEmail size={"5rem"} color={"#FF9900"}/>
                <h3 className={"ft-30"}>Verify Your Email</h3>
                <span>We have sent a verification code to your email, please enter the code below.</span>
                <form onSubmit={handleSubmit} className="login-form">
                    <ReactCodeInput
                        id="number"
                        type="number"
                        fields={6}
                        onChange={handleCodeChange}
                        {...inputProps}
                    />
                    <MainButton type="submit" btnLabel={"Verify"}/>
                </form>
                {error? <div className={"bad"}>* input code is incorrect</div> : <></>}
            </div>
            <Footer/>
        </AppLayout>

    )
}