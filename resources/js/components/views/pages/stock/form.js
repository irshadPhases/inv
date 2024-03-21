import React, { useState } from "react";
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormFeedback,
    CFormLabel,
    CRow,
    CCard,
    CCardHeader,
    CCardBody,
    CAlert,
} from "@coreui/react";
import { PostReq } from "../../../request/services";
const StockForm = ({ type }) => {
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState({
        msg: "",
        type: "",
    });
    const [formData, setFormData] = useState({
        item_name: "",
        model: "",
        brand: "",
        quantity: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const resetForm = () => {
        setFormData({
            item_name: "",
            model: "",
            brand: "",
            quantity: "",
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        let res = await PostReq("add-stock", formData);
        if (res.status) {
            console.log(res);
            setAlert({
                msg: res.message,
                type: "success",
            });
            resetForm();
        } else {
            setAlert({
                msg: res.message,
                type: "danger",
            });
        }
        setTimeout(() => {
            setAlert({
                msg: "",
                type: "",
            });
        }, 5000);
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Stock</strong> <small>{type}</small>
                    </CCardHeader>
                    <CCardBody>
                        <CForm
                            className="row g-3 needs-validation"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            {/* Add similar fields for username, city, state, and zip */}
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom05">
                                    Item Name
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom05"
                                    name="item_name"
                                    value={formData.item_name}
                                    onChange={handleChange}
                                    required
                                />

                                <CFormFeedback invalid>
                                    Please enter item name
                                </CFormFeedback>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom07">
                                    Model / Year
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom07"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    required
                                />

                                <CFormFeedback invalid>
                                    Please enter model
                                </CFormFeedback>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom08">
                                    Brand
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom08"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    required
                                />

                                <CFormFeedback invalid>
                                    Please enter brand
                                </CFormFeedback>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom09">
                                    Quantity
                                </CFormLabel>
                                <CFormInput
                                    type="number"
                                    id="validationCustom09"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    required
                                />

                                <CFormFeedback invalid>
                                    Please enter quantity
                                </CFormFeedback>
                            </CCol>
                            {alert.msg != "" && (
                                <CAlert color={alert.type}>{alert.msg}</CAlert>
                            )}
                            <CCol xs={12}>
                                <CButton type="submit" color="primary">
                                    Save
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};
export default StockForm;
