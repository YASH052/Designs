import React, { useState } from "react";

const PasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-toggle">
            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility}></i>
        </div>
    );
};

export default PasswordToggle;
