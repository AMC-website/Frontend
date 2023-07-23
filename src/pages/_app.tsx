import Navbar from "@/components/Navbar/Navbar";
import { AppProps } from "next/app";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme.js";
import Footer from "@/components/Footer";
import "@/styles/global.css";
import Cursor from "@/components/Cursor";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Cursor>
				<></>
			</Cursor>

			<Box position="relative" overflow="hidden">
				<div
					style={{
						backgroundColor: "black",
						width: "100%",
					}}
				>
					<Navbar />
				</div>

				<Component {...pageProps} />

				<Box width="100%">
					<Footer color={"white"} titleColor={"white"} bgColor={"#000000"} />
				</Box>
			</Box>
		</ThemeProvider>
	);
}
