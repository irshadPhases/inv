import {
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import { cilPencil, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
const StockTable = ({ data }) => {
    return (
        <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
                <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                        ID
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                        Name
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary ">
                        Email
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                        Phone
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                        Balance Stock Items
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                        Action
                    </CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {data.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                            {item.id}
                        </CTableDataCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.email}</CTableDataCell>
                        <CTableDataCell>{item.phone}</CTableDataCell>
                        <CTableDataCell className="text-center">{item.stock}</CTableDataCell>
                        <CTableDataCell className="text-center">
                            <div className="d-grid gap-2 d-md-flex justify-content-center">
                                <CButton color="primary">
                                    <CIcon icon={cilPencil} />
                                </CButton>
                                <CButton color="danger">
                                    <CIcon icon={cilTrash} />
                                </CButton>
                            </div>
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
        </CTable>
    );
};

export default StockTable;
