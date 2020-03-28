import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withRouter} from "react-router-dom";

const Header = ({history, location: {pathname}}) => {
    let currentTabIndex = -1;

    if (pathname === '/')
        currentTabIndex = 0
    else if (pathname === '/requirements')
        currentTabIndex = 1

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Suppy-Demand
                </Typography>
            </Toolbar>
            <Tabs value={currentTabIndex} centered>
                <Tab tabIndex={0} label="Available Resources" onClick={() => history.push('/')}/>
                <Tab tabIndex={1} label="Requirements" onClick={() => history.push('/requirements')}/>
            </Tabs>
        </AppBar>
    )
}

export default withRouter(Header);