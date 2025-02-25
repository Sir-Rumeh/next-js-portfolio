import DashboardImg from "public/assets/projects/hyperloop/hyp3.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Hyperloop = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | Hyperloop FT</title>
				<meta
					name="description"
					content="HyperloopFT is a high-frequency trading platform built with Next JS, offering automated trades, a guaranteed 84% annual ROI, zero-risk investing, and USDT (TRC20) payouts."
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
						src={DashboardImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">HyperloopFT Dashboard App</h2>
						<h3>Next JS / Tailwind CSS / Prisma / PostgreSQL</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
                        This is a high-frequency trading platform that guarantees investors an 84% annual return on investment (ROI) by automating trades across various markets, including cryptocurrencies, stocks, futures, and synthetic assets. The platform emphasizes zero-risk investing with a capital-back guarantee, offering 7% monthly ROI and additional referral rewards. Payouts are automated and processed in USDT (TRC20), ensuring secure and efficient transactions.
						</p>
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
                            <li>Automated High-Frequency Trading</li>
                            <li>Multi-Market Trading (Crypto, Stocks, Futures, Synthetic Assets)</li>
                            <li>Instant & Automated USDT (TRC20) Payouts</li>
                            <li>Referral & Ranking Rewards Program</li>
                            <li>Secure and Transparent Transactions</li>
                            <li>Subscription to Trading Signal providers</li>
                        </ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							<a
								href="https://hyperloopft.com"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a>
							<a
								href="https://hyperloopft.com/resources?tab=user_guide"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Video Demo</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Next JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwind CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Prisma ORM
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> PostgreSQL
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

export default Hyperloop;
