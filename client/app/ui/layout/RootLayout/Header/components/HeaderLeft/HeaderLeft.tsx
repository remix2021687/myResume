import Image from "next/image";
import logo from "@public/img/logo.jpg";
import { HeaderLeftFullName } from "./components";

export const HeaderLeft: React.FC = () => {
	return (
		<section className='flex flex-row gap-4'>
			<Image
				src={logo}
				loading='eager'
				alt='logo'
				className='object-cover rounded-full max-w-10 max-h-10 border border-white/15'
			/>
			<HeaderLeftFullName />
		</section>
	);
};
