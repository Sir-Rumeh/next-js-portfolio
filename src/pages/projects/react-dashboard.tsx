import DashboardImg from "public/assets/projects/react-dashboard/1.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const ReactDashboard = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | React Dashboard Project</title>
				<meta
					name="description"
					content="A simple frontend admin dashboard application built using syncfusion UI components"
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
						<h2 className="py-2">Admin Dashboard App</h2>
						<h3>React JS / Tailwind CSS / Syncfusion Components</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							This is A simple frontend admin dashboard application built using syncfusion UI
							components
						</p>
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>Data Visualization</li>
							<li>Data Filter, Sort and Search</li>
							<li>Data Analytics</li>
							<li>Dashboard Customization</li>
							<li>Mobile Responsiveness</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="https://github.com/Sir-Rumeh/react-dashboard-project"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github Code</button>
							</a>
							<a
								href="https://react-dashboard-project-v1.netlify.app"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a>
							<a
								href="https://www.linkedin.com/feed/update/urn:li:activity:7079116650620366848?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7079116650620366848%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BtmGI9ecqTOa43FFPmeWPhg%3D%3D"
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
										<RiRadioButtonFill className="pr-1" /> React JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwind CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Syncfusion
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

export default ReactDashboard;
