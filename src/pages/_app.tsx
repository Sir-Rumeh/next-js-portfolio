import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "src/components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			startEvent: "DOMContentLoaded",
			initClassName: "aos-init",
			animatedClassName: "aos-animate",
		});
	}, []);
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
