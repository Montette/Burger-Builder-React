import React from 'react';
import style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <React.Fragment>
        <Toolbar />
        <main className={style.Content}>
            {props.children}
        </main>
    </React.Fragment>
)

export default layout