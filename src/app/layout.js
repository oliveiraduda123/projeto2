import Header from "@/componentes/header/Header";
import "../style/globals.css";


export const metadata = {
	title: "Front-end",
	description: "Front-End II",
	charset: "UTF-8",
	author: "Maria Eduarda",
	keywords: ", JavaScript, React, Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head />
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
