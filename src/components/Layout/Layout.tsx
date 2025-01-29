import React from "react"
import { FC } from "react"

interface IlayoutProps {
    children?: React.ReactNode
}

const Layout:FC<IlayoutProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout
