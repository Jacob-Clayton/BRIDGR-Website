'use client';

import { MemberHome, Navbar } from "../../components";

export default function home() {
    return (
		<>
            <div className="bg-primary-darkBlue min-h-screen overflow-hidden">
                <Navbar />
                <MemberHome />
            </div>
		</>
	);
};