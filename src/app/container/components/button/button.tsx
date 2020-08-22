import React, { useState, useEffect } from 'react';

export const Button = ({ variant = 'primary', size = 'normal', children, ...props }) => {
    const typesColor: any = [
        {
            variant: 'primary',
            color: 'blue'
        },
        {
            variant: 'danger',
            color: 'red'
        },
        {
            variant: 'secondary',
            color: 'gray'
        },
        {
            variant: 'success',
            color: 'green'
        },
        {
            variant: 'warning',
            color: 'yellow'
        },
        {
            variant: 'info',
            color: 'indigo'
        },
    ]

    const buttonSize: any = [
        {
            size: 'small',
            value: 1
        },
        {
            size: 'normal',
            value: 2
        },
        {
            size: 'large',
            value: 3
        }
    ]

    const [items, setItems] = useState<any>('')
    const [py, setPy] = useState<any>(variant)
    useEffect(() => {
        setItems(typesColor.find(x => x.variant === variant).color)
        setPy(buttonSize.find(x => x.size === size).value)
    }, [])
    return (
            <button style={{backgroundColor:"#000080"}}  {...props} className={`btn btn-${size} bg-${items}-500 hover:bg-${items}-600 text-white py-${py} px-4 mx-1 rounded`}>
            {children}
        </button>
    )
}