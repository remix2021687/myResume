"use client";

import { useRef } from "react";

export const HeaderNav: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<nav className='flex flex-row justify-between items-center mx-8 mt-4 px-8 py-3 bg-[#0A0E18]/80 shadow-[0_12px_32px_#000000]/55 border border-white/8 rounded-full'>
			{children}
		</nav>
	);
};
