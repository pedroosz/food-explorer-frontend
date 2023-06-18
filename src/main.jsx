import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";

import { App } from "./App.jsx";
import { AuthProvider } from "./hooks/auth.jsx";
import { GlobalStyle } from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
);
