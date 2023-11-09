import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const MuzzlabExperience = {
		companyName: "MuzzlabExperience",
		role: "",
		duration: "",
		activities: ["1", "2"],
	};

	const FCMBExperience = {
		companyName: "",
		role: "",
		duration: "",
		activities: ["1", "2"],
	};

	return (
		<div id="experience" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I've Worked</h2>
				<div className="mt-4">
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
