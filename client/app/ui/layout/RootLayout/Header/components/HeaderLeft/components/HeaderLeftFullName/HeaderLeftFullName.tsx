import { JetBrainsMono } from "@ui/fonts";

export const HeaderLeftFullName: React.FC = () => {
	return (
		<section className='flex flex-col'>
			<h2 className='text-[14px] text-[#DFE2F1] font-semibold'>
				Maksym Yeromin
			</h2>
			<h4 className={`${JetBrainsMono.className} text-[#908FA0] text-[11px]`}>
				Full-Stack Architect & Interface Engineer
			</h4>
		</section>
	);
};
