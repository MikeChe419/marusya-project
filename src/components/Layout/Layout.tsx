import React, { FC, Fragment }  from "react"


interface IlayoutProps {
    children?: React.ReactNode
}

const Layout:FC<IlayoutProps> = ({children}) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default Layout
