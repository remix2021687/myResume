import Link from "next/link";
import { HeaderButton } from "./components";

export const HeaderRight: React.FC = () => {
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
		<section className='flex flex-row justify-center items-center gap-6'>
			{LinksList.map((data, index) => (
				<Link
					className='text-[14px] text-[#C7C4D7] font-medium'
					key={index + 1}
					href={data.herf}>
					{data.name}
				</Link>
			))}
			<HeaderButton />
		</section>
	);
};
