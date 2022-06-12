// REACT, REDUX, and ROUTER_DOM
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// ACTIONS
import { newTrade, exitTrade } from "../../actions/trades"

// STYLES
import {
    GreenButton,
    CustomModalHeader
} from "./NewTradeStyles";

// ICONS
import { GiNotebook } from "react-icons/gi";

// OTHERS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTrade = ({ renderStatus, setRenderStatus }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialTradeData = {
        "script": "",
        "qty": "",
        "price": "",
        "notes": "",
        "chart": ""
    }

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [tradeData, setTradeData] = useState(initialTradeData);
    const [isBuy, setIsBuy] = useState(true);

    const trade_success = () => toast.success('🦄 Trade Data Saved!', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const trade_failure = () => toast.error('Error, Trade data not saved!', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleChange = (e) => {
        setErrorMessage("");
        setShowErrorMessage(false);
        setTradeData({ ...tradeData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!isBuy) {

            const response = await dispatch(exitTrade(tradeData, navigate))

            if(response['status']){
                trade_success();
                setRenderStatus(!renderStatus)
                setTimeout(() =>{
                    closeModal()
                }, 1800)
            } else {
                trade_failure();
                setErrorMessage(response["message"]);
                setShowErrorMessage(true);
            }

        } else {

            const response = await dispatch(newTrade(tradeData, navigate));

            if (response['status']) {

                trade_success();
                setRenderStatus(!renderStatus);
                setTimeout(() => {
                    // Waiting for the toaster to close
                    closeModal()
                }, 1800);

            } else {

                trade_failure();
                setErrorMessage(response["message"]);
                setShowErrorMessage(true);
            }

        }

        setLoading(false)
    }

    const closeModal = () => {
        setTradeData(initialTradeData);
        setErrorMessage("");
        setShowErrorMessage(false);
        document.getElementById("newtrade_modal_btn").click();
    }

    return (
        <>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "43rem", alignItems: "flex-end" }}>
                <div className="modal-content" style={{ borderRadius: "0.5rem" }}>

                    <CustomModalHeader className="modal-header" isBuy={isBuy}>
                        <button type="button" className="btn-close" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close" id="newtrade_modal_btn"></button>
                    </CustomModalHeader>

                    <div className="modal-header" style={{
                        justifyContent: "center",
                        padding: 0,
                        border: "none"
                    }}>
                        <h4 className="modal-title" id="exampleModalLabel" style={{ fontWeight: "bold" }}>
                            <GiNotebook size="2rem" color="black" style={{ marginRight: "1rem" }} />New Trade
                        </h4>
                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="modal-body">
                            <div>
                                <div className="form-check form-switch mb-3" style={{ display: "flex", justifyContent: 'center' }}>
                                    <input className="form-check-input" type="checkbox" role="switch" onClick={(e) => setIsBuy(!isBuy)} style={
                                        isBuy
                                            ? { backgroundColor: "#1cff95", height: "1.5rem", width: "3rem" }
                                            : { backgroundColor: "#f14e4e", height: "1.5rem", width: "3rem" }} />
                                    {/* <label className="form-check-label" for="flexSwitchCheckChecked">
                                            {
                                                isBuy
                                                ? "Buy"
                                                : "Sell"
                                            }
                                        </label> */}
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <input type="text" onChange={handleChange} value={tradeData['script']} className="form-control" name="script" placeholder="Script*" />
                                    </div>
                                    <div className="col mb-3">
                                        <input type="number" onChange={handleChange} value={tradeData['qty']} className="form-control" name="qty" placeholder="Quantity*" />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <input type="number" onChange={handleChange} value={tradeData['price']} className="form-control" name="price" placeholder="Price*" />
                                    </div>
                                    <div className="col mb-3">
                                        <input type="text" onChange={handleChange} value={tradeData['chart']} className="form-control" name="chart" placeholder="Chart URL" />
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <textarea type="text" onChange={handleChange} value={tradeData['notes']} className="form-control" name="notes" placeholder="Notes ( any )" />
                                </div>

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

                        </div>
                        <div className="modal-footer" style={{ justifyContent: "center" }}>
                            <GreenButton type="submit" isBuy={isBuy} >
                                {
                                    loading
                                        ? (
                                            <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        )
                                        : (
                                            isBuy
                                                ? 'Enter'
                                                : 'Exit'
                                        )
                                }
                            </GreenButton>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
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

export default NewTrade