import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const SalesMan = React.lazy(() => import("./views/pages/salesman/index"));
const Stock = React.lazy(() => import("./views/pages/stock/index"));

const routes = [
    { path: "/", exact: true, name: "Home" },
    { path: "/dashboard", name: "Dashboard", element: Dashboard },
    { path: "/stock", name: "Stock", element: Stock },
    { path: "/salesman", name: "SalesMan", element: SalesMan },
    { path: "/stock-form", name: "Stock-Form", element: SalesMan },
];

export default routes;
