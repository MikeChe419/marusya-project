import React, { FC, Fragment }  from "react"
import Header from "../Header"


interface IlayoutProps {
    children?: React.ReactNode
}

const Layout:FC<IlayoutProps> = ({children}) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default Layout
