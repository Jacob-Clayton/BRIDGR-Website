'use client';

import { MemberHome, Nav } from "../../components";

export default function BusinessModel() {
    return (
		<>
            <div className="bg-cetecean-blue min-h-screen overflow-hidden">
                <Nav />
                <MemberHome />
            </div>
		</>
	);
};