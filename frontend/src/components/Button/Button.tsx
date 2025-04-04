import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    variant: "text" | "outlined" | "contained" | "rounded";
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ text = "Button", variant, onClick, prefixIcon, suffixIcon }: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
            {prefixIcon && <span className={styles.prefix_icon}>{prefixIcon}</span>}
            {text}
            {suffixIcon && <span className={styles.suffix_icon}>{suffixIcon}</span>}
        </button>
    )
}

export default Button