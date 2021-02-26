import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import SelectedQuantities from "../components/SelectedQuantity";
import InputSpinner from "react-native-input-spinner";
import { prices } from "../utils/prices";
import { SelectedService } from "../utils/types";

interface ServiceSelectionsProps {
	route: {
		params: {
			services: Array<string>;
			options: Array<string>;
		};
	};
	navigation: any;
}

export const ServiceSelections: React.FC<ServiceSelectionsProps> = ({
	route,
	navigation,
}) => {
	// let { price: total, setPrice } = useContext(TotalPriceContext);
	const [total, setTotal] = useState(0);
	let { services, options } = route.params;
	const [Bool, setBool] = useState(false);

	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused

			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
				if (!Bool) {
					// setPrice(0);
				}
			};
		}, [])
	);

	// prices.map((value, index) => {
	// 	console.log(value + " hello" + index);
	// });

	const getPrice = (item: string) => {
		let price = 0;
		prices.map((value) => {
			if (value.item == item) price = value.price;
		});
		return price;
	};

	return (
		<View style={styles.parent}>
			<Text
				style={{
					fontFamily: "Poppins-Medium",
					fontWeight: "bold",
					fontSize: 20,
				}}
			>
				Select Quantity
			</Text>

			<ScrollView
				style={{
					maxHeight: 399,
					minHeight: "20%",
					elevation: 5,
					backgroundColor: "white",
					padding: 10,
					margin: 5,
				}}
			>
				{services.map((el, index) =>
					el != "Dry Cleaning" ? (
						<View
							style={{ padding: 10, paddingBottom: 25 }}
							key={index}
						>
							<Text> {el} </Text>
							<View
								style={{
									position: "absolute",
									right: 10,
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<InputSpinner
									max={50}
									min={0}
									initialValue={0}
									rounded={false}
									showBorder
									color="white"
									buttonTextColor="black"
									buttonFontSize={20}
									width={120}
									style={{
										borderRadius: 30,
										elevation: 10,
										marginTop: 5,
									}}
									height={35}
									buttonStyle={{
										borderRadius: 30,
										width: 30,
									}}
									background="white"
									onIncrease={(value: number) => {
										const cost: number = getPrice(el);
										setTotal(total + cost);
									}}
									onDecrease={(value: number) => {
										const cost: number = getPrice(el);
										setTotal(total - cost);
									}}
								/>
								{/* <Image
						source={require("../images/delete.png")}
						style={{ width: 15, height: 20, marginLeft: 10 }}
					/> */}
							</View>
						</View>
					) : null
				)}

				{services.find((element) => element == "Dry Cleaning") && (
					<View>
						<Text style={{ padding: 10, fontWeight: "bold" }}>
							Pick Quantities for Dry CLeaning
						</Text>

						{options.map((el, index) => (
							<View
								style={{ padding: 10, paddingBottom: 25 }}
								key={index}
							>
								<Text> {el} </Text>
								<View
									style={{
										position: "absolute",
										right: 10,
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									<InputSpinner
										max={50}
										min={0}
										initialValue={0}
										rounded={false}
										showBorder
										color="white"
										buttonTextColor="black"
										buttonFontSize={20}
										width={120}
										style={{
											borderRadius: 30,
											elevation: 10,
											marginTop: 5,
										}}
										height={35}
										buttonStyle={{
											borderRadius: 30,
											width: 30,
										}}
										background="white"
										onIncrease={(value: number) => {
											const cost: number = getPrice(el);
											setTotal(total + cost);
										}}
										onDecrease={(value: number) => {
											const cost: number = getPrice(el);
											setTotal(total - cost);
										}}
									/>
									{/* <Image
									source={require("../images/delete.png")}
									style={{ width: 15, height: 20, marginLeft: 10 }}
								/> */}
								</View>
							</View>
						))}
					</View>
				)}
			</ScrollView>

			<View style={{ flexDirection: "row" }}>
				<Text
					style={{
						fontFamily: "Poppins-Medium",
						fontWeight: "bold",
						fontSize: 20,
						margin: 10,
					}}
				>
					Total
				</Text>

				<Text
					style={{
						fontFamily: "Poppins-Medium",
						fontWeight: "bold",
						fontSize: 20,
						margin: 10,
						right: 10,
						position: "absolute",
					}}
				>
					Rs. {total}
				</Text>
			</View>

			<FAB
				style={styles.fab}
				label="Continue"
				color="white"
				icon={require("../images/tick.png")}
				onPress={() => {
					setBool(true);
					navigation.navigate("PlaceOrder", {});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		padding: 10,
		backgroundColor: "white",
	},
	fab: {
		position: "absolute",
		margin: 5,
		right: 0,
		backgroundColor: "red",
		bottom: 20,
	},
});

export default ServiceSelections;
