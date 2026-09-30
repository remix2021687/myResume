import type { Metadata } from "next";
import { Header } from "@ui/layout/RootLayout";
import { StoreProvider } from "@lib/store/components";
import "@ui/styles/globals.css";

export const metadata: Metadata = {
	title: "Resume ",
	description: "My resume for all",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang='en' className={`h-full antialiased`}>
			<body>
				<StoreProvider>
					<Header />
					<main className='px-10'>{children}</main>
				</StoreProvider>
			</body>
		</html>
	);
}
