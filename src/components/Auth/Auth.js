// REACT, ROUTER and REDUX
import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

// ICONS
import { GiNotebook } from "react-icons/gi"

// ACTIONS
import { login, register } from "../../actions/auth"

// STYLED COMPONENTS
import {
    GreenButton,
} from "./AuthStyles";

// OTHERS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {

    const register_success = () => toast.success('🦄 Registration Successfull. Proceed to Login', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const register_failure = () => toast.error('Registration Failed', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const initialLoginFormData = {
        "email": '',
        "password": ''
    }
    const initialRegisterFormData = {
        "first_name": "",
        "last_name": "",
        "phone": "",
        "email": '',
        "password": '',
        "c_password": ''
    }

    const [formLoginData, setFormLoginData] = useState(initialLoginFormData)
    const [formRegisterData, setFormRegisterData] = useState(initialRegisterFormData)
    const [errorMessage, setErrorMessage] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleLoginChange = (e) => {
        setErrorMessage("");
        setShowErrorMessage(false);
        setFormLoginData({ ...formLoginData, [e.target.name]: e.target.value });
    }
    const handleRegisterChange = (e) => {
        setErrorMessage("");
        setShowErrorMessage(false);
        setFormRegisterData({ ...formRegisterData, [e.target.name]: e.target.value });
    }
    const handelLoginToggle = () => {
        setIsLogin(!isLogin);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // LOGIN
        if (isLogin) {
            const status = await dispatch(login(formLoginData, navigate))
            // status is obtained when we have some error in login
            if (status) {
                setErrorMessage(status["message"])
                setShowErrorMessage(true)
                setFormLoginData(initialLoginFormData)
            }
            else {
                setErrorMessage("");
                setShowErrorMessage(false);
                setFormLoginData(initialLoginFormData)
                // document.getElementById("loginModal").click()
                closeModal();
            }

        }
        // REGISTER
        else {
            if(formRegisterData["password"] != formRegisterData['c_password']){
                setErrorMessage("Password and Confirm Password did not Match")
                setShowErrorMessage(true);
            }else{
                const status = await dispatch(register(formRegisterData, navigate))
                if (status) {
                    setErrorMessage(status["message"]);
                    setShowErrorMessage(true);
                    // setFormRegisterData(initialRegisterFormData);
                    // register_failure();
    
                } else {
                    // register_success();
                    closeModal();
                    // setTimeout(() => {
                    //     // Waiting for the toaster to close
                    //     closeModal()
                    // }, 1800);
                }
            }
        }
        setLoading(false)
    }

    const closeModal = () => {
        setFormLoginData(initialLoginFormData);
        setFormRegisterData(initialRegisterFormData);
        setErrorMessage("");
        setShowErrorMessage(false);
        document.getElementById("loginModal_btn").click();
    }

    return (
        <>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "414px" }}>
                <div className="modal-content" style={{ borderRadius: "0.5rem" }}>
                    <div className="modal-header" style={{
                        border: "none",
                        borderTop: "11px solid #1cff95"
                    }}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"  onClick={closeModal} aria-label="Close" id="loginModal_btn"></button>
                    </div>

                    <div className="modal-header" style={{
                        justifyContent: "center",
                        padding: 0,
                        border: "none"
                    }}>
                        <h5 className="modal-title" id="exampleModalLabel">
                            {
                                isLogin
                                    ? "Sign In To"
                                    : "Register on"
                            }
                        </h5>
                    </div>
                    <div className="modal-header" style={{
                        justifyContent: "center",
                        padding: 0,
                        border: "none"
                    }}>
                        <h4 className="modal-title" id="exampleModalLabel">
                            <GiNotebook size="2rem" color="black" style={{ marginRight: "1rem" }} />The TradeBook</h4>
                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="modal-body">
                            {
                                isLogin
                                    ? (
                                        <div>
                                            <div className="mb-3">
                                                <input type="email" onChange={handleLoginChange} value={formLoginData['email']} className="form-control" name="email" placeholder="Email" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="password" onChange={handleLoginChange} value={formLoginData['password']} className="form-control" name="password" placeholder="Password" />
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <div>
                                            <div className="mb-3">
                                                <input type="text" onChange={handleRegisterChange} value={formRegisterData['first_name']} className="form-control" name="first_name" placeholder="First Name" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" onChange={handleRegisterChange} value={formRegisterData['last_name']} className="form-control" name="last_name" placeholder="Last Name" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" onChange={handleRegisterChange} value={formRegisterData['email']} className="form-control" name="email" placeholder="Email" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" onChange={handleRegisterChange} value={formRegisterData['phone']} className="form-control" name="phone" placeholder="Phone" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="password" onChange={handleRegisterChange} value={formRegisterData['password']} className="form-control" name="password" placeholder="Password" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" onChange={handleRegisterChange} value={formRegisterData['c_password']} className="form-control" name="c_password" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                    )
                            }


                            {
                                showErrorMessage
                                    ? (
                                        <span style={{ display: "flex", justifyContent: "center", color: 'red', fontSize: "1rem" }}>
                                            {errorMessage}
                                        </span>
                                    )
                                    : (<></>)
                            }

                            {
                                isLogin
                                    ? (
                                        <span style={{ display: "flex", justifyContent: "center", fontSize: "1rem" }}>
                                            Don't have an account<a style={{ color: "#8d96eb", cursor: "pointer" }} onClick={handelLoginToggle}>? Register</a>
                                        </span>
                                    )
                                    : (
                                        <span style={{ display: "flex", justifyContent: "center", fontSize: "1rem" }}>
                                            Already have an account<a style={{ color: "#8d96eb", cursor: "pointer" }} onClick={handelLoginToggle}>? Sign In</a>
                                        </span>
                                    )
                            }

                        </div>
                        <div className="modal-footer" style={{ justifyContent: "center" }}>
                            <GreenButton type="submit">
                                {
                                    loading
                                        ? (
                                            <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        )
                                        : (
                                            isLogin
                                                ? "Login"
                                                : "Register"
                                        )
                                }
                            </GreenButton>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Auth;