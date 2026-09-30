import Image from "next/image";
import Link from "next/link";
import { JetBrainsMono } from "@ui/fonts";
import logo from "@public/img/logo.jpg";

export const Header: React.FC = () => {
	return (
		<nav className='flex flex-row justify-between items-center mx-8 mt-4 px-8 py-3 bg-[#0A0E18]/80 shadow-[0_12px_32px_#000000]/55 border border-white/8 rounded-full'>
			<section className='flex flex-row gap-4'>
				<Image
					src={logo}
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
			<section></section>
			<section>
				<Link href={"/"}>Work</Link>
				<Link href={"/"}>About</Link>
				<Link href={"/"}>Stack</Link>
				<Link href={"/"}>Contact</Link>
			</section>
		</nav>
	);
};
