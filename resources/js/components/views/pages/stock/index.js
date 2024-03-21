import { CButton } from "@coreui/react";
import { useEffect, useState } from "react";
import StockTable from "./table";
import StockForm from "./form";
import { GetReq } from "../../../request/services";

const Stock = () => {
    const [showStockForm, setShowStockForm] = useState(false);
    const [stockFormType, setStockFormType] = useState("Add form");
    const [data, setData] = useState([]);
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
        fetchData();
    }, [showStockForm]);

    useEffect(() => {
        // fetchData();
    }, []);

    const fetchData = async () => {
        let res = await GetReq("get-stocks");
        setData(res.data);
    };

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
            {!showStockForm && data && <StockTable data={data} />}

            {showStockForm && (
                <StockForm type={stockFormType} />
            )}
        </>
    );
};
export default Stock;
