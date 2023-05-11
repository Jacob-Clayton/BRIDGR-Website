import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Nav() {
    const [yOffset, setYOffset] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    
    function handleScroll() {
        const currentYOffset = window.pageYOffset;
        const top60Pixels = currentYOffset <= 60;
        const visible = yOffset >= currentYOffset;

        setYOffset(currentYOffset);
        setVisible(top60Pixels || visible);
    }

    const navbarStyle = {
        backgroundColor: visible && yOffset <= 60 ? "transparent" : "#180D4C",
        backdropFilter: visible && yOffset <= 60 ? "blur(3px)" : "none",
        transition: "0.5s ease-in-out",
    };
    if (scrollY < 240) {
        navbarStyle.backgroundColor = "transparent"
    }

    return (
        <>
            <Navbar visible={visible} style={navbarStyle} />
        </>
    );
};
