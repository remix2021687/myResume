import Image from "next/image";
import Link from "next/link";
// import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { JetBrainsMono } from "@ui/fonts";
import logo from "@public/img/logo.jpg";

export const Header: React.FC = () => {
	const LinksList: {
		name: string;
		herf: string;
	}[] = [
		{
			name: "Work",
			herf: "/",
		},
		{
			name: "About",
			herf: "/",
		},
		{
			name: "Stack",
			herf: "/",
		},
		{
			name: "Contact",
			herf: "/",
		},
	];
	return (
		<nav className='flex flex-row justify-between items-center mx-8 mt-4 px-8 py-3 bg-[#0A0E18]/80 shadow-[0_12px_32px_#000000]/55 border border-white/8 rounded-full'>
			<section className='flex flex-row gap-4'>
				<Image
					src={logo}
					loading='eager'
					alt='logo'
					className='object-cover rounded-full max-w-10 max-h-10 border border-white/15'
				/>
				<section className='flex flex-col'>
					<h2 className='text-[14px] text-[#DFE2F1] font-semibold'>
						Maksym Yeromin
					</h2>
					<h4
						className={`${JetBrainsMono.className} text-[#908FA0] text-[11px]`}>
						Full-Stack Architect & Interface Engineer
					</h4>
				</section>
			</section>
			<section className='flex flex-row justify-center items-center gap-2.5 px-4 py-1.5 bg-[#262A35]/60 border border-white/10 rounded-full'>
				<span className='w-2 h-2 rounded-full bg-[#4CD7F6]'></span>
				<section className='flex flex-row justify-center items-center'>
					<h2 className='flex flex-row items-center justify-center gap-2.5 text-[#DFE2F1] text-[14px] font-medium'>
						Available for new projects{" "}
						<span className='text-[#908FA0] font-normal'>•</span>{" "}
						<span className='text-[#ACEDFF]'>12:03 PM CET</span>
					</h2>
				</section>
			</section>
			<section className='flex flex-row gap-6'>
				{LinksList.map((data, index) => (
					<Link
						className='text-[14px] text-[#C7C4D7] font-medium'
						key={index + 1}
						href={data.herf}>
						{data.name}
					</Link>
				))}
				<button>{/* Let's Talk <ArrowUpRightIcon /> */}</button>
			</section>
		</nav>
	);
};
