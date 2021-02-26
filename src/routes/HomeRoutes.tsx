import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { DryCleaningOptions } from "../screens/DryCleaningOptions";
import PlaceOrder from "../screens/PlaceOrder";
import ServiceSelections from "../screens/ServiceSelections";
import TabNavigator from "../screens/TabNavigator";

const Stack = createStackNavigator();

export const HomeRoutes = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				title: "",
				headerTransparent: false,
				headerStyle: { height: 45, elevation: 10 },
			}}
		>
			<Stack.Screen
				options={{ animationEnabled: true, headerShown: false }}
				name="Home"
				component={TabNavigator}
			/>

			<Stack.Screen
				options={{ title: "NoZanzat", headerTitleAlign: "center" }}
				name="DryCleaning"
				component={DryCleaningOptions}
			/>

			<Stack.Screen
				options={{ title: "NoZanzat", headerTitleAlign: "center" }}
				name="ServiceSelection"
				component={ServiceSelections}
			/>

			<Stack.Screen
				options={{ title: "NoZanzat", headerTitleAlign: "center" }}
				name="PlaceOrder"
				component={PlaceOrder}
			/>
		</Stack.Navigator>
	);
};

export default HomeRoutes;
