import type { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RotateLoader } from "react-spinners";

interface Props {
	title?: string;
	isOpen: boolean;
	isLoader: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	children?: any;
	width?: string;
}

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "#44A8B3",
};

const CustomModal = ({ title, isOpen, setIsOpen, isLoader, children, width = "w-[700px]" }: Props) => {
	const boxStyle = {
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: width,
		bgcolor: "white",
		borderRadius: "1rem",
		boxShadow: 24,
		px: 5,
		py: 4,
	};
	const handleClose = () => setIsOpen(false);
	return (
		<>
			<Modal
				className="z-10"
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={boxStyle}>
					<div className="flex flex-col space-y-6">
						<div className="flex items-center justify-between ">
							<Typography id="modal-modal-description" sx={{ fontSize: 20, fontWeight: 600 }}>
								{title}
							</Typography>
							<button type="button" className="mr-3" onClick={() => setIsOpen(false)}>
								<p className="text-primary text-xl">X</p>
							</button>
						</div>
						<div className="-mt-3 pb-6">{children}</div>
					</div>
				</Box>
			</Modal>
			{/*  */}
		</>
	);
};

export default CustomModal;
