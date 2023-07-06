import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Image from "next/image";
type props = {
	bgColor: string;
};

export default function ContactForm({ bgColor }: props) {
	return (
		<Box
			component="form"
			sx={{
				"background-color": "#F0E4DC",
				mx: "auto",
				pb: "100px",
				px: "50px",
				display: "flex",
				flexDirection: "column",
				"@media (min-width: 600px)": {
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
				},
			}}
			noValidate
			autoComplete="off"
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					gap: "20px",
					"& .MuiInputBase-input": { fontSize: "1.1rem" }, // Increase input text font size
					"& .MuiButton-root": { fontSize: "1.2rem", padding: "10px 24px" }, // Increase submit button font size and padding
					"& .MuiInputLabel-root": { fontSize: "20px" },
					fontSize: "large",
				}}
			>
				<Typography variant="h1" sx={{ color: "#000000", pb: "20px" }}>
					Get in Touch
				</Typography>

				<div>
					<TextField
						sx={{
							minWidth: "100%",
						}}
						id="outlined-error"
						label="First Name"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						id="outlined-error"
						label="Last Name"
						variant="standard"
						sx={{
							minWidth: "100%",
						}}
					/>
				</div>
				<div>
					<TextField
						sx={{
							minWidth: "100%",

							pb: "20px",
						}}
						id="outlined-error"
						label="email"
						variant="standard"
					/>
				</div>
				<Button
					sx={{
						px: "20px",
						py: "5px",
						outline: "solid",
						outlineColor: "black",
						outlineWidth: "1px",
						maxWidth: "max-content",
						borderRadius: "10px",
					}}
					type="submit"
					onClick={() => {}}
				>
					Submit
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image width={600} height={500} src={"/map.png"} alt="googlemaps" />
			</Box>
		</Box>
	);
}
