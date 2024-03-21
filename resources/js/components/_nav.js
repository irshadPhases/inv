import React from "react";
import CIcon from "@coreui/icons-react";
import { cilList, cilPeople, cilSpeedometer, cilUser } from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
    {
        component: CNavItem,
        name: "Dashboard",
        to: "/dashboard",
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: "Stock",
        to: "/stock",
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: "SalesMan's",
        to: "/salesman",
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    },
    
];

export default _nav;
