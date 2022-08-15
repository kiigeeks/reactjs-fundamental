import React from "react";
import Navigation from "./navigation.layouts";

const MainLayouts = ({children}) => {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            {children}
        </React.Fragment>
    )
}

export default MainLayouts