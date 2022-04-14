import React from "react";
import {
    InfoTitle,
    Card
} from "./InfoStyles"

import { BiNotepad } from "react-icons/bi"
import { GiBinoculars } from "react-icons/gi"
import { BiCoinStack } from "react-icons/bi"

const Info = () => {
    return (
        <>
            <InfoTitle>What is TradeBook?</InfoTitle>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <Card>
                            <div class="card-body" style={{padding: "11%"}}>
                                <h5 class="card-title" style={{"textAlign": "center", fontWeight: "bold"}}><BiNotepad size={"4rem"} color="#8d96eb"/><br/>Record Trade</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.<a href="#" class="card-link" style={{textDecoration: "none"}}> Learn More</a></p>
                             
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card>
                            <div class="card-body" style={{padding: "11%"}}>
                                <h5 class="card-title" style={{"textAlign": "center", fontWeight: "bold"}}><GiBinoculars size={"4rem"} color="#8d96eb"/><br/>Look Past Trades</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.<a href="#" class="card-link" style={{textDecoration: "none"}}> Learn More</a></p>
                              
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card>
                            <div class="card-body" style={{padding: "11%"}}>
                                <h5 class="card-title" style={{"textAlign": "center", fontWeight: "bold"}}><BiCoinStack size={"4rem"} color="#8d96eb"/><br/>Manage Current Positions</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.<a href="#" class="card-link" style={{textDecoration: "none"}}> Learn More</a></p>
                                
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info