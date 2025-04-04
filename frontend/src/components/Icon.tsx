import React from "react"

interface IconProps {
    children?: React.ReactNode;
    src?: string;
    alt?: string;
}

const Icon = ({ src, alt = "Icon" }: IconProps) => {
    return (
        <img src={src} alt={alt} />
    )
}

export default Icon