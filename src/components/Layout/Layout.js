import React from 'react';
import style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <React.Fragment>
        <Toolbar />
        <SideDrawer />
        <main className={style.Content}>
            {props.children}
        </main>
    </React.Fragment>
)

export default layout