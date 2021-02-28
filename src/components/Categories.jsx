import React from 'react'

const Categories = ({ children, title }) => (
    <div className="title">
        <h3>{title}</h3>
        {children}
    </div>
)

export default Categories