"use client";

import { HeaderNav, HeaderLeft, HeaderCenter, HeaderRight } from "./components";

export const Header: React.FC = () => {
	return (
		<HeaderNav>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</HeaderNav>
	);
};
