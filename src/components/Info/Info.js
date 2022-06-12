import React from "react";
import {
    InfoTitle,
    Card,
    CardBody,
    CardTitile,
    CardText
} from "./InfoStyles"

import { BiNotepad } from "react-icons/bi"
import { GiBinoculars } from "react-icons/gi"
import { BiCoinStack } from "react-icons/bi"
import { MdWaterfallChart, MdQueryStats } from "react-icons/md"
import { ImPencil2 } from "react-icons/im"
import { BsPencilSquare } from "react-icons/bs"

const Info = () => {
    return (
        <>
            <InfoTitle>What is TradeBook?</InfoTitle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Card>
                            <CardBody>
                                <CardTitile><BiNotepad size={"4rem"} color="#8d96eb"/><br/><br/>Record Trade</CardTitile>
                                <CardText>
                                    Record each and every trade in the best possible way with charts and notes for future trades.
                                    <a href="#" className="card-link" style={{textDecoration: "none"}}> Learn More</a>
                                </CardText>
                            
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <CardBody>
                                <CardTitile><GiBinoculars size={"4rem"} color="#8d96eb"/><br/><br/>Look Past Trades</CardTitile>
                                <CardText>
                                    Best way to successed in anything is not to repeat past mistakes, take a look to your previous trades.
                                    <a href="#" className="card-link" style={{textDecoration: "none"}}> Learn More</a>
                                </CardText>
                              
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <CardBody>
                                <CardTitile><BiCoinStack size={"4rem"} color="#8d96eb"/><br/><br/>Manage Current Positions</CardTitile>
                                <CardText>
                                    Comprehensive overview of current open positions in market along with current profit and loss stats.
                                    <a href="#" className="card-link" style={{textDecoration: "none"}}> Learn More</a>
                                </CardText>
                                
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card>
                            <CardBody>
                                <CardTitile><MdWaterfallChart size={"4rem"} color="#8d96eb"/><br/><br/>Explore Charts</CardTitile>
                                <CardText>
                                    Trading starts from charts and thus maitaining the chart images gives the rationale behind the trade.
                                    <a href="#" className="card-link" style={{textDecoration: "none"}}> Learn More</a>
                                </CardText>
                            
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <CardBody>
                                <CardTitile><BsPencilSquare size={"4rem"} color="#8d96eb"/><br/><br/>Take Notes</CardTitile>
                                <CardText>
                                    Remarks are always good to have for any trade as it may include mistakes not to repeat in future.
                                    <a href="#" className="card-link" style={{textDecoration: "none"}}> Learn More</a>
                                </CardText>
                              
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <CardBody>
                                <CardTitile><MdQueryStats size={"4rem"} color="#8d96eb"/><br/><br/>Markets</CardTitile>
                                <CardText>
                                    Quick overview of overall market at present time along with index data such as CNXNIFTY and BANKNIFTY.
                                    <a href="#" className="card-link" style={{textDecoration: "none"}}> Learn More</a>
                                </CardText>
                                
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info