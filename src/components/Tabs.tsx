import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Children } from "react";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

interface BasicTabsProps {
	tabList: string[];
	tabPanel: React.ReactNode | React.ReactNode[];
	initialIndex?: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			className="py-1 px-2 md:px-5 overflow-y-scroll md:overflow-y-hidden"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{/* DESKTOP */}
			{value === index && <div className="hidden md:block">{children}</div>}
			{/* MOBILE */}
			<div className="block md:hidden overflow-y-scroll h-[450px] ">
				{value === index && <div className="mt-2">{children}</div>}
			</div>
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs({ tabList, tabPanel, initialIndex }: BasicTabsProps) {
	const childrenNode = Children.toArray(tabPanel);

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		return event;
	};

	React.useEffect(() => {
		initialIndex && setValue(initialIndex);
	}, [initialIndex]);

	return (
		<>
			{/* DESKTOP */}
			<div className="hidden md:block">
				<Box
					sx={{
						width: "100%",
						display: "flex",
						height: "30rem",
					}}
				>
					<Box>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
							orientation="vertical"
							variant="scrollable"
						>
							{tabList.map((item, index) => (
								<Tab
									label={item}
									{...a11yProps(index)}
									key={item}
									sx={{
										color: "#44A8B3",
										marginTop: `${index == 0 ? "" : "1rem"}`,
										marginBottom: `${index == tabList.length - 1 ? "0.1rem" : ""}`,
										fontSize: "16px",
										borderBottom: 1,
										borderColor: "divider",
									}}
								/>
							))}
						</Tabs>
					</Box>
					{childrenNode.map((item, index) => (
						<CustomTabPanel value={value} index={index} key={Math.random() * childrenNode.length}>
							{item}
						</CustomTabPanel>
					))}
				</Box>
			</div>

			{/* MOBILE */}
			<div className="block md:hidden">
				<Box
					sx={{
						width: "100%",
						display: "block",
						height: "30rem",
					}}
				>
					<Box>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
							orientation="horizontal"
							variant="scrollable"
						>
							{tabList.map((item, index) => (
								<Tab
									label={item}
									{...a11yProps(index)}
									key={item}
									sx={{
										color: "#44A8B3",
										marginTop: `${index == 0 ? "" : "1rem"}`,
										marginBottom: `${index == tabList.length - 1 ? "0.1rem" : ""}`,
										fontSize: "16px",
										borderBottom: 1,
										borderColor: "divider",
									}}
								/>
							))}
						</Tabs>
					</Box>
					{childrenNode.map((item, index) => (
						<CustomTabPanel value={value} index={index} key={Math.random() * childrenNode.length}>
							{item}
						</CustomTabPanel>
					))}
				</Box>
			</div>
		</>
	);
}
