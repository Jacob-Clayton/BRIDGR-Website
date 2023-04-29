'use client';

import { MemberHome, Navbar } from "../../components";

export default function home() {
    return (
		<>
            <div className="bg-cetecean-blue min-h-screen overflow-hidden">
                <Navbar />
                <MemberHome />
            </div>
		</>
	);
};