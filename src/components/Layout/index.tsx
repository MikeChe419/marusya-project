import React, { FC, Fragment }  from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header"


interface IlayoutProps {
    children?: React.ReactNode
}

const Layout:FC<IlayoutProps> = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
}

export default Layout
