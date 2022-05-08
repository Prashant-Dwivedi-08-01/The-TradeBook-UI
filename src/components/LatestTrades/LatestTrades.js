import React, { useEffect } from 'react'
import {
    LatestTradesDiv,
    Heading,
    TableDiv,
    Table,
    Th,
    Td,
    ProfitButton,
    PlusIcon,
    MinusIcon,
    LossButton,
    CheckBox,
    TableRow,
    ScriptLogo,
    Details,

} from "./LatestTradesStyles"

import { AiOutlineFileSearch } from "react-icons/ai"
import { useSelector } from "react-redux";

const LatestTrades = ({ trades }) => {


    return (
        <LatestTradesDiv className='container'>
            <Heading>Latest Trades</Heading>
            <TableDiv>
                <Table>
                    <thead>
                        <TableRow>
                            <Th>Sr. No</Th>
                            <Th>Script</Th>
                            <Th>Entry Date</Th>
                            <Th>Entry Price</Th>
                            <Th>Qty</Th>
                            <Th>P&L</Th>
                            <Th>Explore</Th>
                        </TableRow>
                    </thead>
                    <tbody>
                        {
                            trades.map((trade) => (
                            
                                <TableRow key={trade['script']} >
                                    <Td style={{ width: "100px" }}>
                                        <CheckBox>
                                            <input type="checkbox" />
                                            {/* <span className="checkmark"> 1 </span> */}
                                        </CheckBox>
                                    </Td>
                                    <Td style={{ width: "20%" }}>
                                        <ScriptLogo src='images/VEDL.png' />
                                        {trade['script']}
                                    </Td>
                                    <Td>{trade['entries'][0][0].slice(0, -12)}</Td>
                                    <Td>{trade['entries'][0][2]}</Td>
                                    <Td>{trade['entries'][0][1]}</Td>
                                    <Td>
                                        <ProfitButton>
                                            <PlusIcon /> Profit
                                        </ProfitButton>
                                    </Td>
                                    <Td>
                                        <Details><AiOutlineFileSearch size={'2rem'} color="#8d96eb" /></Details>
                                    </Td>
                                </TableRow>
                            ))
                        }
                        {/* <TableRow >
                            <Td style={{ width: "100px" }}>
                                <CheckBox>
                                    <input type="checkbox" />
                                    <span className="checkmark"> 2 </span>
                                </CheckBox>
                            </Td>
                            <Td>
                                <ScriptLogo src='images/MANINFRA.png' />
                                Mark
                            </Td>
                            <Td>22-1-201</Td>
                            <Td>145.2</Td>
                            <Td>
                                <LossButton>
                                    <MinusIcon /> Loss
                                </LossButton>
                            </Td>
                            <Td>
                                <Details><AiOutlineFileSearch size={'2rem'} color="#8d96eb" /></Details>
                            </Td>
                        </TableRow> */}
                    
                    </tbody>
                </Table>
            </TableDiv>

        </LatestTradesDiv>
    )
}

export default LatestTrades