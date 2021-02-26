import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

interface PlaceOrderProps {}

const pinCode = [412101, 411001, 21001, 28981, 47823, 32324, 43242, 4324234];

export const PlaceOrder: React.FC<PlaceOrderProps> = ({}) => {
	const [pin_code, setPin_code] = useState(0);
	let [available, setavailable] = useState(0);

	const checkAvailability = (pin: number) => {
		const found = pinCode.find((element) => element == pin);

		if (found == undefined) setavailable(2);
		else setavailable(1);
	};

	return (
		<View style={styles.parent}>
			<View>
				<Text
					style={{
						fontFamily: "Poppins-Medium",
						fontWeight: "bold",
						fontSize: 20,
					}}
				>
					Check Availability
				</Text>

				<View style={{ flexDirection: "row" }}>
					<TextInput
						label="Pin Code"
						mode="outlined"
						style={{ height: 35, width: "40%", paddingTop: 5 }}
						onChangeText={(value) => setPin_code(parseInt(value))}
					/>

					<Button
						mode="contained"
						color="red"
						style={{
							marginTop: 15,
							right: 0,
							position: "absolute",
						}}
						onPress={() => checkAvailability(pin_code)}
					>
						Check
					</Button>
				</View>
				{available == 1 ? (
					<Text style={{ color: "green" }}>Service is Available</Text>
				) : null}
				{available == 2 ? (
					<Text style={{ color: "red" }}>
						Service is not available
					</Text>
				) : null}
			</View>

			<View style={{ padding: 10 }}>
				<Text
					style={{
						fontFamily: "Poppins-Medium",
						fontWeight: "bold",
						fontSize: 20,
					}}
				>
					Your Items
				</Text>
			</View>
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

export default PlaceOrder;
