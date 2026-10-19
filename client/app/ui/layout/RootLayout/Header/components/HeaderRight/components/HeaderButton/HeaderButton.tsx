"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";

export const HeaderButton: React.FC = () => {
	return (
		<button className='flex flex-row items-center justify-center gap-2 px-4 py-2 border border-white/15 bg-[#353944]/70 rounded-full text-[14px] text-[#DFE2F1] font-semibold cursor-pointer'>
			Let's Talk <ArrowUpRightIcon weight='bold' color='#DFE2F1' size={15} />
		</button>
	);
};
