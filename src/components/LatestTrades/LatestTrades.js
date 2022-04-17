import React from 'react'
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


const LatestTrades = () => {
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
                            <Th>P&L</Th>
                            <Th>Action</Th>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow >
                            <Td style={{ width: "100px" }}>
                                <CheckBox>
                                    <input type="checkbox" />
                                    <span class="checkmark"> 1 </span>
                                </CheckBox>
                            </Td>
                            <Td>
                                <ScriptLogo src='images/VEDL.png' />
                                Mark
                            </Td>
                            <Td>22-1-201</Td>
                            <Td>145.2</Td>
                            <Td>
                                <ProfitButton>
                                    <PlusIcon /> Profit
                                </ProfitButton>
                            </Td>
                            <Td>
                                <Details><AiOutlineFileSearch size={'2rem'} color="#8d96eb" /></Details>
                            </Td>
                        </TableRow>
                        <TableRow >
                            <Td style={{ width: "100px" }}>
                                <CheckBox>
                                    <input type="checkbox" />
                                    <span class="checkmark"> 2 </span>
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
                        </TableRow>
                        <TableRow >
                            <Td style={{ width: "100px" }}>
                                <CheckBox>
                                    <input type="checkbox" />
                                    <span class="checkmark"> 3 </span>
                                </CheckBox>
                            </Td>
                            <Td style={{width: "20%"}}>
                                <ScriptLogo src='images/mahindra.png' />
                                Mark
                            </Td>
                            <Td>22-1-201</Td>
                            <Td>145.2</Td>
                            <Td>
                                <ProfitButton>
                                    <PlusIcon /> Profit
                                </ProfitButton>
                            </Td>
                            <Td>
                                <Details><AiOutlineFileSearch size={'2rem'} color="#8d96eb" /></Details>


                            </Td>
                        </TableRow>
                    </tbody>
                </Table>
            </TableDiv>

        </LatestTradesDiv>
    )
}

export default LatestTrades