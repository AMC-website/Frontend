import { Box, Typography, Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Email } from "@mui/icons-material";
import { useRouter } from "next/router";
import Image from "next/image";

interface FooterProps {
	bgColor?: string;
	color?: string;
	titleColor?: string;
}

function Footer({ color, bgColor, titleColor }: FooterProps) {
	const route = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const theme = useTheme();

	function handleClick() {
		setIsOpen(!isOpen);
	}
	color = "#000000";
	titleColor = "#000000";
	const iconStyles = {
		"&:hover": {
			scale: "1.2",
		},
		transition: "300ms ease",
		fontSize: "40px",
		color: "black",
	};

	return (
		<>
			<Box
				style={{
					backgroundColor: "#F0E4DC",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					position: "relative",
				}}
			>
				<Box
					sx={{
						display: {
							xs: "flex",
							md: "grid",
						},
						gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
						flexDirection: "column",
						borderStyle: "solid",
						borderColor: "black",
						borderWidth: "0.3px 0 0 0",
						gap: "70px",
						width: "85%",
						margin: "0 auto",
						padding: "40px 0",
					}}
				>
					<Box>
						<Typography
							variant="h1"
							style={{
								color: titleColor,
								paddingBottom: "20px",
								fontSize: "30px",
								fontWeight: "bolder",
							}}
						>
							<Image
								width={140}
								height={100}
								src={"/logo.png"}
								alt="mylogo"
							/>{" "}
						</Typography>
						<Box
							style={{
								display: "flex",
								gap: "6px",

								justifyContent: "space-between",
								maxWidth: "40%",
								color: color,
							}}
						>
							<Link href="https://www.facebook.com/amc.iitbhu/">
								<FacebookIcon fontSize="inherit" sx={iconStyles}></FacebookIcon>
							</Link>
							<Link href="/">
								<InstagramIcon
									fontSize="inherit"
									sx={iconStyles}
								></InstagramIcon>
							</Link>
							<Link href="/">
								<Email fontSize="inherit" sx={iconStyles}></Email>
							</Link>
						</Box>
					</Box>

					<Box>
						<Typography
							variant="h1"
							style={{
								color: titleColor,
								paddingBottom: "20px",
								fontSize: "30px",
								fontWeight: "bolder",
							}}
						>
							Navigation
						</Typography>

						<Box
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
								fontWeight: "normal",
							}}
						>
							<Link
								underline="none"
								fontSize="16px"
								href="/projects"
								color={color}
								marginBottom="12px"
							>
								<Typography variant="h1" fontSize="16px">
									Projects
								</Typography>
							</Link>

							<Link
								underline="none"
								fontSize="16px"
								href="/events"
								color={color}
								marginBottom="12px"
							>
								<Typography variant="h1" fontSize="16px">
									Events
								</Typography>
							</Link>

							<Link
								underline="none"
								href="/about"
								fontSize="16px"
								color={color}
								marginBottom="12px"
							>
								<Typography variant="h1" fontSize="16px">
									About
								</Typography>
							</Link>
						</Box>
					</Box>

					<Box padding="0">
						<Typography
							variant="h1"
							style={{
								color: titleColor,
								paddingBottom: "20px",
								fontSize: "30px",
								fontWeight: "bolder",
							}}
						>
							Contact
						</Typography>

						<Box
							style={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
								color: color,
								fontWeight: "normal",
							}}
						>
							<Typography
								variant="h1"
								style={{
									fontSize: "16px",
								}}
								marginBottom="20px"
							>
								Largos, Largo Santos 9, 1200-656 Lisboa
							</Typography>
							<Typography
								variant="h1"
								style={{
									fontSize: "16px",
								}}
								marginBottom="20px"
							>
								info@nunospace.com
							</Typography>
							<Typography
								variant="h1"
								style={{
									fontSize: "16px",
								}}
								marginBottom="20px"
							>
								Call us
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
