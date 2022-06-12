import React, { useState } from "react";
import { MainDiv, GreenButton, Heading } from "./ForgetPasswordStyles"
import { forgetPass } from "../../actions/auth"
import { useDispatch } from "react-redux";

// OTHERS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const success = () => toast.success('🦄 Password Reset email sent successfully. Checkout your email to proceed.', {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    const handelChange = (e) => {
        setErrorMessage("")
        setShowErrorMessage(false)
        setEmail(e.target.value)
    }

    const handleSubmit = async(e) => {
        console.log(email);
        e.preventDefault()
        setLoading(true);

        const response = await dispatch(forgetPass({"email": email}));
        if(response["status"]){
            setEmail("");
            success();
        }else{
            setErrorMessage(response["message"])
            setShowErrorMessage(true);
        }

        setLoading(false);
    }
    return (
        <>
            <MainDiv>
            <Heading className="mb-5">Forget Password</Heading>
                <div className="card" style={{ width: "22rem" }}>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address to reset your password</label>
                                <input type="email" value={email} onChange={handelChange} className="form-control" name="email"/>
                            </div>
                            <div className="d-flex justify-content-center">
                                {
                                    loading
                                    ? (
                                        <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                    )
                                    : <GreenButton>Submit</GreenButton>
                                }
                            </div>
                            {
                                showErrorMessage
                                    ? (
                                        <span style={{ display: "flex", justifyContent: "center", color: 'red', fontSize: "1rem" }}>
                                            {errorMessage}
                                        </span>
                                    )
                                    : (<></>)
                            }
                        </form>
                        
                    </div>
                </div>
            </MainDiv>

            <ToastContainer
                position="bottom-right"
                autoClose={false}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default ForgetPassword