import React, { useState, useEffect } from "react";
import { MainDiv, GreenButton, Heading } from "./ResetPasswordStyles"
import { confirmResetPass, resetPass } from "../../actions/auth"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"

// OTHERS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {

    const initialFormData = {
        "email": "",
        "new_password": "",
        "c_new_password": ""
    }

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormData)
    const [loading, setLoading] = useState(false);
    const [completeLoading, setCompleteLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const [showCompleteErrorMessage, setShowCompleteErrorMessage] = useState(false);
    const [completeErrorMessage, setCompleteErrorMessage] = useState(false);

    const success = () => toast.success('🦄 Password Reset Successfull! Proceed to login.', {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const { user_id } = useParams();

    const confirmResetPasswordSetEmail = async () => {
        setCompleteLoading(true);

        const response = await dispatch(confirmResetPass(user_id));
        if (response["status"]) {
            setFormData({ ...formData, "email": response["email"] })
            setShowCompleteErrorMessage(false);
            setCompleteErrorMessage("")
        } else {
            setShowCompleteErrorMessage(true);
            setCompleteErrorMessage(response["message"]);
        }

        setCompleteLoading(false);
    }

    useEffect(() => {
        console.log(user_id);
        confirmResetPasswordSetEmail();
    }, [])



    const handelChange = (e) => {
        setErrorMessage("")
        setShowErrorMessage(false)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        if(formData["new_password"] != formData['c_new_password']){
            setErrorMessage("Password and Confirm Password did not match")
            setShowErrorMessage(true);
        } else{
            const response = await dispatch(resetPass(formData));
            if (response["status"]) {
                setFormData(initialFormData);
                setShowErrorMessage(false);
                setErrorMessage("")
                success();
            } else {
                setErrorMessage(response["message"])
                setShowErrorMessage(true);
            }
        }


        setLoading(false);
    }
    return (
        <>
            <MainDiv>
                <Heading className="mb-5">Reset Password</Heading>
                {
                    completeLoading
                        ? (
                            <div className="text-center text-light">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                        : (
                            <>
                                {
                                    showCompleteErrorMessage
                                        ? (
                                            <div className="card mb-3 d-flex align-items-center" style={{ width: "45rem" }}>
                                                <img src="/images/warning.png" className="card-img-top" alt="..." style={{ width: "10rem" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-danger" style={{ fontWeight: "bold" }}>Error</h5>
                                                    <p className="card-text font-italic" style={{ color: "#8d96eb", fontStyle: "italic" }}>{completeErrorMessage}</p>
                                                    <a className="card-text" style={{ cursor: "pointer" }} onClick={() => window.open("/forget-password")}><small className="text-muted">New Request</small></a>
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div className="card" style={{ width: "22rem" }}>
                                                <div className="card-body">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">New Password</label>
                                                            <input type="password" value={formData["new_password"]} onChange={handelChange} className="form-control" name="new_password" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">Confirm New Password</label>
                                                            <input type="text" value={formData["c_new_password"]} onChange={handelChange} className="form-control" name="c_new_password" />
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
                                        )
                                }

                            </>
                        )
                }

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

export default ResetPassword