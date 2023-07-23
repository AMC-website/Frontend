import * as React from "react";
import { white } from "@mui/material/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { h4_, h5, h6 } from "@/constants";
import { color } from "@/constants";

interface ContactFormProps {
    color: string;
}

export default function ContactForm() {
    const breakPoint = useMediaQuery("(min-width:600px)");
    const inputs = ["First Name", "Last Name", "Email"];
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
                    "& .MuiInputBase-input": { fontSize: "1.1rem", color: "white" },
                    "& .MuiButton-root": {
                        fontSize: "1.2rem",
                        padding: "10px 24px",
                    },
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

                {inputs.map((input) => (
                    <div>
                        <TextField
                            focused
                            sx={{
                                minWidth: "100%",
                                borderColor: color,
                            }}
                            id="outlined-error"
                            color="neutral"
                            label={input}
                            variant="standard"
                        />
                    </div>
                ))}

                <Button
                    sx={{
                        px: "20px",
                        py: "5px",
                        outline: "solid",
                        maxWidth: breakPoint ? "max-content" : "100%",
                        outlineColor: "white",
                        outlineWidth: "1px",
                        borderRadius: "10px",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "lightcoral",
                        },
                        sm: {
                            maxWidth: "max-content",
                        },
                        fontSize: h6,
                    }}
                    type="submit"
                    onClick={() => { }}
                >
                    Send
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
