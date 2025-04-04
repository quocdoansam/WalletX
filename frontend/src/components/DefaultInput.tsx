import React from "react"

interface DefaultInputProps {
    children?: React.ReactNode;
    label?: string;
    inputType?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput = ({ label, inputType = 'text', value, placeholder = "Placeholder ...", onChange }: DefaultInputProps) => {
    return (
        <div className="default-input">
            {label && <span>{label}</span>} 
            <input type={inputType} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default DefaultInput