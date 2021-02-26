import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import NavigationRoutes from "./src/routes/NavigationRoutes";
import TotalPriceContextProvider from "./src/utils/TotalPriceContext";

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "red",
		accent: "#f1c40f",
	},
};

const App = () => {
	return (
		<NavigationContainer>
			<PaperProvider theme={theme}>
				<TotalPriceContextProvider>
					<NavigationRoutes />
				</TotalPriceContextProvider>
			</PaperProvider>
		</NavigationContainer>
	);
};

export default App;
