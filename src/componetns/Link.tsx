import * as React from 'react'

interface Props {
    active: boolean,
    children: React.ReactNode,
    onClick: () => void
}

const Link = (props: Props) => (
    <button
        onClick= {props.onClick}
        disabled={props.active}
        style={{
            marginLeft: '4px'
        }}
    >
        {props.children}
    </button>
)

export default Link