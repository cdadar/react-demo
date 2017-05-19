import React, { Component } from 'react'

class Layout extends Component {
    render () {
        return (
            <div className='tow-cols-layout'>
                <div className="sidebar">
                    {this.props.children[0]}
                </div>
                <div className="mian">
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}

export default Layout