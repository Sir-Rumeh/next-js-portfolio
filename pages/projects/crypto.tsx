import cryptoImg from "../../public/assets/projects/crypto.jpg";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const crypto = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | Projects</title>
				<meta
					name="description"
					content="I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
				/>
				<link rel="icon" href="/fav.png" />
			</Head>
			<div className="w-full">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<Image
						className="absolute z-1"
						layout="fill"
						objectFit="cover"
						src={cryptoImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Crypto App</h2>
						<h3>React JS / Tailwind / Firebase</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							I built this app to demonstrate knowledge working in React JS and accessing API
							endpoints. This app was built using React JS and is hosted on Firebase. This
							application supports user authentication using firebase. Users are able to create a
							new account using their email address and can then sign in to save coins to a user
							specific list. This is made possble by creating a firestore cloud storage database at
							the time of user registration. Another feature of this application is dynamic routing
							through the &quot;React Router DOM&quot; package. This application was built using
							the Coin Gecko API.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							<a
								href="https://github.com/fireclint/crypto-react-firebase"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Code</button>
							</a>
							<a href="https://cryptobase-yt.web.app/" target="_blank" rel="noreferrer">
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a>
							<a href="https://cryptobase-yt.web.app/" target="_blank" rel="noreferrer">
								<button className="px-8 py-2 tracking-widest">Video Demo</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
						<div className="p-2 text-md">
							<p className="text-center font-bold pb-2">Technologies</p>
							<div className="grid grid-cols-3 md:grid-cols-1 ">
								<p className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" /> React
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" /> Tailwind
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" /> Javascript
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" /> Firebase
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" /> Coin Gecko API
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" /> Routes
								</p>
							</div>
						</div>
					</div>
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default crypto;
