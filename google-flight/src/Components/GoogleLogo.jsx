import React from "react";

const GoogleLogo = () => {
    const letterStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
    };

    return (
        <div style={{ marginRight: "50px", }}>
            <span style={{ ...letterStyle, color: "#4285F4" }}>G</span>
            <span style={{ ...letterStyle, color: "#EA4335" }}>o</span>
            <span style={{ ...letterStyle, color: "#FBBC05" }}>o</span>
            <span style={{ ...letterStyle, color: "#4285F4" }}>g</span>
            <span style={{ ...letterStyle, color: "#34A853" }}>l</span>
            <span style={{ ...letterStyle, color: "#EA4335" }}>e</span>
        </div>
    );
};

export default GoogleLogo;
