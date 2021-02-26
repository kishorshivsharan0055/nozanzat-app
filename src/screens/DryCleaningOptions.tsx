import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { FAB } from "react-native-paper";
import { prices } from "../utils/prices";

interface DryCleaningOptionsProps {
	navigation: any;
	route: {
		params: {
			services: Array<string>;
			options: Array<string>;
		};
	};
}
let Options = Array<string>();

export const DryCleaningOptions: React.FC<DryCleaningOptionsProps> = ({
	route,
	navigation,
}) => {
	const { services } = route.params;

	return (
		<View style={styles.parent}>
			<Text
				style={{
					fontFamily: "Poppins-Medium",
					fontWeight: "bold",
					fontSize: 18,
				}}
			>
				Select options from Dry Cleaning
			</Text>

			<ScrollView>
				<View>
					<Text
						style={{
							fontFamily: "Poppins-Medium",
							fontWeight: "bold",
							fontSize: 18,
							marginTop: 10,
						}}
					>
						Men's
					</Text>

					{prices.map(
						(value, index) =>
							index < 13 && (
								<OptionCard title={value.item} key={index} />
							)
					)}

					<Text
						style={{
							fontFamily: "Poppins-Medium",
							fontWeight: "bold",
							fontSize: 18,
							marginTop: 10,
						}}
					>
						Women's
					</Text>

					{prices.map(
						(value, index) =>
							index >= 13 &&
							index < 27 && (
								<OptionCard title={value.item} key={index} />
							)
					)}

					<Text
						style={{
							fontFamily: "Poppins-Medium",
							fontWeight: "bold",
							fontSize: 18,
							marginTop: 10,
						}}
					>
						Wolens's
					</Text>

					{prices.map(
						(value, index) =>
							index >= 27 &&
							index < 40 && (
								<OptionCard title={value.item} key={index} />
							)
					)}

					<Text
						style={{
							fontFamily: "Poppins-Medium",
							fontWeight: "bold",
							fontSize: 18,
							marginTop: 10,
						}}
					>
						Non-Wearable Household Items
					</Text>

					{prices.map(
						(value, index) =>
							index >= 40 && (
								<OptionCard title={value.item} key={index} />
							)
					)}
				</View>
			</ScrollView>

			<FAB
				style={styles.fab}
				color="white"
				icon={require("../images/tick.png")}
				onPress={() => {
					navigation.navigate("ServiceSelection", {
						services: services,
						options: Options,
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		padding: 10,
	},
	fab: {
		position: "absolute",
		margin: 5,
		right: 0,
		backgroundColor: "red",
		bottom: 0,
	},
});

interface OptionCardProps {
	title: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({ title }) => {
	let [color, setcolor] = useState("white");
	let [Selected, setSelected] = useState(false);
	let [colorText, setcolorText] = useState("black");

	return (
		<TouchableOpacity
			style={{
				width: "100%",
				height: 40,
				justifyContent: "center",
				elevation: 0,
				backgroundColor: color,
				padding: 10,
				margin: 2,
				borderRadius: 5,
			}}
			onPress={() => {
				Selected ? setSelected(false) : setSelected(true);
				!Selected ? setcolor("red") : setcolor("white");
				!Selected ? setcolorText("white") : setcolorText("black");

				if (!Selected) {
					setcolor("red");
					setcolorText("white");
					Options.push(title);
				} else {
					setcolor("white");
					setcolorText("black");
					let index = Options.indexOf(title);
					Options.splice(index, 1);
				}
			}}
		>
			<Text
				style={{
					fontFamily: "Poppins-Medium",
					fontWeight: "900",
					fontSize: 15,
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default { OptionCard, DryCleaningOptions };
