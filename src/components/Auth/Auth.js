import React from "react";

export const Login = () => {

    return (
        <>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "414px" }}>
                <div className="modal-content" style={{ borderRadius: "0.5rem" }}>
                    <div className="modal-header" style={{
                        border: "none",
                        borderTop: "11px solid #1cff95"
                    }}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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