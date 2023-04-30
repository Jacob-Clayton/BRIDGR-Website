import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Nav() {
    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function handleScroll() {
        const currentYOffset = window.pageYOffset;
        const top50Pixels = currentYOffset <= 50;
        const visible = yOffset >= currentYOffset;

        setYOffset(currentYOffset);
        setVisible(top50Pixels || visible);
    }

    return (
        <>
        <Navbar visible={visible} />
        </>
    );
};
