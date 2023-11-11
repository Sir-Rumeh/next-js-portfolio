import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const FCMBExperience = {
		companyName: "First City Monument Bank",
		role: "Front-End Developer",
		duration: "July 2022 - Present",
		activities: [
			"Collaborated with a team of professional engineers to plan, design, build, and implement the user interface systems of web-based applications and provide a satisfactory user experience with no issues, errors, or downtime.",
			"Contributed to the building and optimization of some in-house applications to optimize productivity as well as customer-facing account management applications, which increased customer inflow by automating account opening processes.",
			"Played an active role in testing, troubleshooting, and resolving issues such as those related to performance, accessibility,  browser compatibility, and security.",
			"Reviewing and approving pull requests from other team members.",
			"Collaborating on large codebase with other developers using git and the Microsoft Azure DevOps cloud solutions platform.",
		],
	};

	const MuzzlabExperience = {
		companyName: "Muzzlab Technologies",
		role: "Front-End Developer",
		duration: "April 2020 - July 2022",
		activities: [
			"Collaborated with the project manager and backend engineer.",
			"Designed and developed the client side of the sub-company’s ( Illusion Decals ) website while writing re-usable and easy to maintain codes.",
			"Ensured cross-platform development and optimization for mobile responsiveness.",
		],
	};

	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I've Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={["FCMB", "Muzzlab"]}
						tabPanel={[
							<Details experienceDetails={FCMBExperience} />,
							<Details experienceDetails={MuzzlabExperience} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
