import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { h4_, h5, h6 } from "@/constants";

interface ContactFormProps {
	color: string;
}

export default function ContactForm(color: ContactFormProps) {
	const breakPoint = useMediaQuery("(min-width:600px)");

	const inputs = ["First Name", "Last Name", "Email", "Message"];

	return (
		<Box
			component="form"
			sx={{
				mx: "auto",
				pb: breakPoint ? "100px" : "10px",
				display: "flex",
				flexDirection: "column",
				gap: "50px",
				"@media (min-width: 600px)": {
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
				},
				color: color,
			}}
			width="85%"
			noValidate
			autoComplete="off"
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					gap: "20px",
					"& .MuiInputBase-input": { fontSize: "1.1rem" }, // Increase input text font size
					"& .MuiButton-root": {
						fontSize: "1.2rem",
						padding: "10px 24px",
					}, // Increase submit button font size and padding
					"& .MuiInputLabel-root": { fontSize: "20px" },
					fontSize: "large",
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: breakPoint ? h4_ : h5,
						fontWeight: "bold",
					}}
				>
					Get in Touch
				</Typography>

				{inputs.map((i) => (
					<div>
						<TextField
							id="outlined-error"
							label="Last Name"
							variant="standard"
							sx={{
								minWidth: "100%",
								color: color,
							}}
						/>
					</div>
				))}
				{/* <div> */}
				{/* 	<TextField */}
				{/* 		sx={{ */}
				{/* 			minWidth: "100%", */}
				{/* 			color: color, */}
				{/* 		}} */}
				{/* 		id="outlined-error" */}
				{/* 		label="First Name" */}
				{/* 		variant="standard" */}
				{/* 	/> */}
				{/* </div> */}
				{/* <div> */}
				{/* 	<TextField */}
				{/* 		id="outlined-error" */}
				{/* 		label="Last Name" */}
				{/* 		variant="standard" */}
				{/* 		sx={{ */}
				{/* 			minWidth: "100%", */}
				{/* 		}} */}
				{/* 	/> */}
				{/* </div> */}
				{/* <div> */}
				{/* 	<TextField */}
				{/* 		sx={{ */}
				{/* 			minWidth: "100%", */}
				{/* 		}} */}
				{/* 		id="outlined-error" */}
				{/* 		label="Email" */}
				{/* 		variant="standard" */}
				{/* 	/> */}
				{/* </div> */}
				<Button
					sx={{
						px: "20px",
						py: "5px",
						outline: "solid",
						maxWidth: breakPoint ? "max-content" : "100%",
						outlineColor: color,
						outlineWidth: "1px",
						borderRadius: "10px",
						"&:hover": {
							backgroundColor: "lightcoral",
						},
						sm: {
							maxWidth: "max-content",
						},
						fontSize: h6,
					}}
					type="submit"
					onClick={() => {}}
				>
					Send
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginX: "20px",
				}}
			>
				<Image
					width={600}
					style={{
						margin: "20px",
					}}
					height={500}
					src={"/map.png"}
					alt="googlemaps"
				/>
			</Box>
		</Box>
	);
}
