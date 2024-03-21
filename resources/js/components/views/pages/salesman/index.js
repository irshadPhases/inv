import { CButton } from "@coreui/react";
import { useEffect, useState } from "react";
import StockTable from "./table";
import SalesManForm from "./form";

const SalesMan = () => {
    const [showStockForm, setShowStockForm] = useState(false);
    const [formType, setFormType] = useState("Add form");
    const [buttonText, setButtonText] = useState("");
    const handleShowButton = () => {
        if (showStockForm) {
            setShowStockForm(false);
        } else {
            setShowStockForm(true);
        }
    };
    useEffect(() => {
        if (showStockForm) {
            setButtonText("Back");
        } else {
            setButtonText("Add New +");
        }
    }, [showStockForm]);

    const tableExample = [
        {
            id: 1,
            name: "User 1",
            email: "user@email.com",
            phone: "+00000000",
            stock: "2",
        },
        {
            id: 2,
            name: "User 1",
            email: "user@email.com",
            phone: "+00000000",
            stock: "3",
        },
        {
            id: 3,
            name: "User 1",
            email: "user@email.com",
            phone: "+00000000",
            stock: "4",
        },
    ];
    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4">
                <CButton
                    color="primary"
                    className="btn btn-primary me-md-2"
                    onClick={handleShowButton}
                >
                    {buttonText}
                </CButton>
            </div>
            {!showStockForm && <StockTable data={tableExample} />}

            {showStockForm && <SalesManForm type={formType} />}
        </>
    );
};
export default SalesMan;
