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

    const { user_id } = useParams();

    const confirmResetPasswordSetEmail = async () => {
        setLoading(true);

        const response = await dispatch(confirmResetPass(user_id));
        if (response["status"]) {
            setFormData({ ...formData, "email": response["email"] })
            setShowErrorMessage(false);
            setErrorMessage("")
        } else {
            setErrorMessage(response["message"]);
            setShowErrorMessage(true);
        }

        setLoading(false);
    }

    useEffect(() => {
        console.log(user_id);
        confirmResetPasswordSetEmail();
    }, [])


    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormData)
    const [loading, setLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const success = () => toast.success('🦄 Password Reset Successfull! Proceed to login.', {
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
                    loading
                        ? (
                            <div class="text-center text-light">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                        : (
                            <>
                                {
                                    showErrorMessage
                                        ? (
                                            <div class="card mb-3 d-flex align-items-center" style={{ width: "45rem" }}>
                                                <img src="/images/warning.png" class="card-img-top" alt="..." style={{ width: "10rem" }} />
                                                <div class="card-body">
                                                    <h5 class="card-title text-danger" style={{ fontWeight: "bold" }}>Error</h5>
                                                    <p class="card-text font-italic" style={{ color: "#8d96eb", fontStyle: "italic" }}>{errorMessage}</p>
                                                    <a class="card-text" style={{ cursor: "pointer" }} onClick={() => window.open("/forget-password")}><small class="text-muted">New Request</small></a>
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div class="card" style={{ width: "22rem" }}>
                                                <div class="card-body">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" class="form-label">New Password</label>
                                                            <input type="password" value={formData["new_password"]} onChange={handelChange} className="form-control" name="new_password" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" class="form-label">Confirm New Password</label>
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