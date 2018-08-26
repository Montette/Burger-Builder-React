import React from 'react';
import style from './Layout.css';

const layout = (props) => (
    <React.Fragment>
        <div>Toolbar</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </React.Fragment>
)

export default layout