import React from 'react'

function Header() {
    return (
        <div>
            <h1 style={headerStyle}>
                TodoList
            </h1>
        </div>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}    

export default Header;
