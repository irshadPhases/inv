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
    COption,
    CFormSelect,
} from "@coreui/react";
import { PostReq } from "../../../request/services";
const SalesManForm = ({ type }) => {
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState({
        msg: "",
        type: "",
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        status: "active", // Default status
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            status: "active",
        });
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        let res = await PostReq("add-salesman", formData);
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
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom01">
                                    Name
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom01"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <CFormFeedback invalid>
                                    Please enter name
                                </CFormFeedback>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom02">
                                    Email
                                </CFormLabel>
                                <CFormInput
                                    type="email"
                                    id="validationCustom02"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <CFormFeedback invalid>
                                    Please enter valid email
                                </CFormFeedback>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom03">
                                    Phone
                                </CFormLabel>
                                <CFormInput
                                    type="tel"
                                    id="validationCustom03"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <CFormFeedback invalid>
                                    Please enter phone number
                                </CFormFeedback>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom04">
                                    Status
                                </CFormLabel>
                                <CFormSelect
                                    id="validationCustom04"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value={1}>Active</option>
                                    <option value={0}>Inactive</option>
                                </CFormSelect>
                                <CFormFeedback invalid>
                                    Please select status
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
export default SalesManForm;
