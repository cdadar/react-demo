import React, { Component } from 'react'

class Editor extends Component {
    constructor() {
        super()
        this.state = {
            content: "<h1>React.js 小书</h1>"
        }
    }

    render() {
        return (
            <div style={{fontSize:'12px',color:'red'}}
                className='editor-wrapper'
                dangerouslySetInnerHTML={{ __html: this.state.content }} />
        )
    }
}

export default Editor