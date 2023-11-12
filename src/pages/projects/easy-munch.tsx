import EasyMunchImg from "public/assets/projects/easy-munch/munch.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const EasyMunch = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | EasyMunch Project</title>
				<meta
					name="description"
					content="Welcome to our one-of-a-kind food delivery service website, crafted with love and expertise using the powerful React framework."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<Image
						className="absolute z-1"
						layout="fill"
						objectFit="cover"
						src={EasyMunchImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Easymunch Web App</h2>
						<h3>React JS / Bootstrap </h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							Contributed to building a one-of-a-kind food delivery service website, crafted with
							love and expertise using the powerful React framework.
						</p>
						<p className="text-lg mt-2">
							This web app boasts a user-friendly and intuitive design, making it effortless to
							navigate and browse through a wide range of cuisines and restaurants. The React
							framework ensures a seamless and responsive experience on both desktop and mobile
							devices, so you can place orders anytime, anywhere.
						</p>
						<p className="text-lg mt-2">
							Placing an order is a breeze! With just a few clicks, you can customize your order,
							add items to your cart, and select delivery or pickup options. Our secure payment
							system guarantees a smooth and safe transaction.
						</p>

						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>User Authentication</li>
							<li>Restaurant and Menu Listings</li>
							<li>Online Ordering</li>
							<li>Customer Reviews and Ratings</li>
							<li>Account Management</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="https://github.com/prime-infinity/easymunch"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github Code</button>
							</a>
							<a href="https://easymunch.netlify.app/" target="_blank" rel="noreferrer">
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> React JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Bootstrap
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Javascript
									</p>
								</div>
							</div>
						</div>
					</div>
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg hover:text-primary">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default EasyMunch;
