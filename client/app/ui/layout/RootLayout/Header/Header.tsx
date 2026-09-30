import Image from "next/image";
import Link from "next/link";
import logo from "@public/img/logo.jpg";

export const Header: React.FC = () => {
	return (
		<nav className='flex flex-row mx-8 mt-16'>
			<section>
				<Image src={logo} alt='logo' width={32} height={32} />
				<section>
					<h2>Maksym Yeromin</h2>
					<h4>Full-Stack Architect & Interface Engineer</h4>
				</section>
				<section></section>
				<section>
					<Link href={"/"}>Work</Link>
					<Link href={"/"}>About</Link>
					<Link href={"/"}>Stack</Link>
					<Link href={"/"}>Contact</Link>
				</section>
			</section>
		</nav>
	);
};
