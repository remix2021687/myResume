"use client";

import { HeaderLeft, HeaderCenter, HeaderRight } from "./components";

export const Header: React.FC = () => {

	return (
		<nav className='flex flex-row justify-between items-center mx-8 mt-4 px-8 py-3 bg-[#0A0E18]/80 shadow-[0_12px_32px_#000000]/55 border border-white/8 rounded-full'>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</nav>
	);
};
