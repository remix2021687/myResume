"use client";

import { useState, useEffect } from "react";

export const HeaderCenter: React.FC = () => {
	const [currentTime, setCurrentTime] = useState<Date>(new Date());

	useEffect(() => {
		const intervalTime = setInterval(() => {
			setCurrentTime(new Date());

			return () => window.clearInterval(intervalTime);
		}, 1000);
	}, []);

	const formatedTime = currentTime.toLocaleString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});

	return (
		<section className='flex flex-row justify-center items-center gap-2.5 px-4 py-1.5 bg-[#262A35]/60 border border-white/10 rounded-full shadow-[0px_2px_4px_#000000]/5'>
			<span className='w-2 h-2 rounded-full bg-[#4CD7F6]'></span>
			<section className='flex flex-row justify-center items-center'>
				<h2 className='flex flex-row items-center justify-center gap-2.5 text-[#DFE2F1] text-[14px] font-medium'>
					Available for new projects{" "}
					<span className='text-[#908FA0] font-normal'>•</span>{" "}
					<span className='text-[#ACEDFF]'>{formatedTime}</span>
				</h2>
			</section>
		</section>
	);
};
