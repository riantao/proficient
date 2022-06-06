import { FC } from "react";

import { CallsProps } from "./Calls.d";

import { 
    CallsTable as Table,
    CallsTableBody as Tbody,
    CallsTableData as Td,
    CallsTableHead as Thead,
    CallsTableHeader as Th,
    CallsTableRow as Tr
} from "./Calls.styles";

export const Calls: FC<CallsProps> = ({
    customer
}) => {
    return (
        <Table role="Table">
            <Thead>
                <Tr>
                    <Th>Call #</Th>
                    <Th>Project #</Th>
                    <Th>Date</Th>
                    <Th>Title</Th>
                    <Th>Description</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr role="row">
                    <Td>VA2245372</Td>
                    <Td>302172</Td>
                    <Td>3/3/2022</Td>
                    <Td>UIR: ConTrol outlet mixer/blender (AF166)</Td>
                    <Td>
                        Looked for reTrofit as it was suppose to have arrived.  
                        A nameplate arrived but not The rest of The reTrofit.  
                        Spent hrs Trying to get to bottom. 
                        Just released Friday should be onsite Monday
                    </Td>
                </Tr>
                <Tr role="row">
                    <Td>VA2248718</Td>
                    <Td>302172</Td>
                    <Td>3/18/2022</Td>
                    <Td>UIR: ConTrol outlet mixer/blender (AF166)</Td>
                    <Td>
                        Arrived at 9 am to install reTrofit.  Looked around and Tried to find parts.  
                        PE was adamant parts were There.  Finally located The part That was There it was a nameplate. 
                        Found out parts weren&apos;t shipped from Jeffersonville.
                    </Td>
                </Tr>
                <Tr role="row">
                    <Td>VA1485976</Td>
                    <Td>448806</Td>
                    <Td>7/4/2012</Td>
                    <Td>UIR: Machine upgrade - Pneumatic Valve Gate (Stati</Td>
                    <Td>
                        &ldquo;Install aditional valve gate option, This included new valve cable wired into clamp I/O box.
                        New valve installed, softward loaded and outputs tested wiTh no issues at This time found, 
                        valve gate wiring tested, was not able to run wiTh valve gate enables as cusomer is waiting on mold.&rdquo;
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default Calls;