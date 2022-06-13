import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colors: {
        primary: {
            main: "#009688",
        },
        secondary: {
            main: "#00b0ff",
        },
        text: {
            wite: "#fff",
            black: "#000",
        },
    },
    spacing: (value) => `${4 * value}px`,
});
