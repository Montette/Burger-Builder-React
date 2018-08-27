import React from 'react';
import style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends React.Component {
    state = {
        openSideDrawer: false
    }

    clickSideDrawerHandler = () =>{
        this.setState(prevState =>{
            return {openSideDrawer: !prevState.openSideDrawer}
        })
    }
    render() {
        return (
            <React.Fragment>
                    <Toolbar openMenu={this.clickSideDrawerHandler} />
                    <SideDrawer 
                        open={this.state.openSideDrawer} 
                        clickBackdrop={this.clickSideDrawerHandler}/>
                    <main className={style.Content}>
                        {this.props.children}
                    </main>
             </React.Fragment>
        )

    }

}

export default Layout