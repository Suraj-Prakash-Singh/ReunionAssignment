import React from "react";
import ReactDom from "react-dom/client";
import Example from "./src/components/Example";
import MyTable from "./src/components/MyTable";

const AppLayout = () => {
    return <Example/>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)