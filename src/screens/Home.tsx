import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FAB } from "react-native-paper";
import Banner from "../components/Banner";
import Header from "../components/Header";

interface HomeProps {
	navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
	let [selected1, setselected1] = useState(false);
	let [selected2, setselected2] = useState(false);
	let [selected3, setselected3] = useState(false);
	let [selected4, setselected4] = useState(false);
	let [selected5, setselected5] = useState(false);
	let [selected6, setselected6] = useState(false);

	const [Button, setButton] = useState(false);

	let [Color1, setColor1] = useState("white");
	let [Color2, setColor2] = useState("white");
	let [Color3, setColor3] = useState("white");
	let [Color4, setColor4] = useState("white");
	let [Color5, setColor5] = useState("white");
	let [Color6, setColor6] = useState("white");

	let [services] = useState<Array<string>>(["", ""]);
	let [options] = useState<Array<string>>(["", ""]);
	let [Len, setLen] = useState(0);

	return (
		<View style={styles.parent}>
			<Header />

			<View style={{ paddingTop: 10 }}></View>
			<Banner />

			<View>
				<Text
					style={{
						fontFamily: "Poppins-Medium",
						fontWeight: "bold",
						fontSize: 25,
					}}
				>
					Services
				</Text>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 20,
					}}
				>
					<TouchableOpacity
						style={{
							marginHorizontal: 8,
							width: 110,
							height: 150,
							backgroundColor: Color1,
							elevation: 4,
							borderRadius: 10,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => {
							setButton(true);
							if (!selected1) {
								setColor1("red");
								services[Len] = "Dry Cleaning";
								setLen(Len + 1);
							} else {
								let index = services.indexOf("Dry Cleaning");
								services.splice(index, 1);
								setLen(Len - 1);
								setColor1("white");
							}

							if (!selected1) {
								setselected1(true);
							} else {
								setselected1(false);
							}
						}}
					>
						<View>
							<Image
								source={require("../images/dry-cleaning.png")}
								style={{
									width: 90,
									height: 90,
								}}
							/>
							<Text
								style={{
									marginTop: 8,
								}}
							>
								Dry Cleaning
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							marginHorizontal: 8,
							width: 110,
							height: 150,
							backgroundColor: Color2,
							elevation: 4,
							borderRadius: 10,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => {
							setButton(true);
							if (!selected2) {
								setColor2("red");
								services[Len] = "Premium Laundry";
								setLen(Len + 1);
							} else {
								let index = services.indexOf("Premium Laundry");
								services.splice(index, 1);
								setLen(Len - 1);
								setColor2("white");
							}

							if (!selected2) {
								setselected2(true);
							} else {
								setselected2(false);
							}
						}}
					>
						<Image
							source={require("../images/premium-laundry.png")}
							style={{
								width: 90,
								height: 90,
							}}
						/>
						<Text
							style={{
								marginTop: 8,
								textAlign: "center",
							}}
						>
							Premium Laundry
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							marginHorizontal: 8,
							width: 110,
							height: 150,
							backgroundColor: Color3,
							elevation: 4,
							borderRadius: 10,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => {
							setButton(true);
							if (!selected3) {
								setColor3("red");
								services[Len] = "Steam Ironing";
								setLen(Len + 1);
							} else {
								let index = services.indexOf("Steam Ironing");
								services.splice(index, 1);
								setLen(Len - 1);
								setColor3("white");
							}

							if (!selected3) {
								setselected3(true);
							} else {
								setselected3(false);
							}
						}}
					>
						<Image
							source={require("../images/steam-ironing.png")}
							style={{
								width: 90,
								height: 90,
							}}
						/>
						<Text
							style={{
								marginTop: 8,
							}}
						>
							Steam Ironing
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 20,
					}}
				>
					<TouchableOpacity
						style={{
							marginHorizontal: 8,
							width: 110,
							height: 150,
							backgroundColor: Color4,
							elevation: 4,
							borderRadius: 10,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => {
							setButton(true);
							if (!selected4) {
								setColor4("red");
								services[Len] = "Wash and Iron (Unit)";
								setLen(Len + 1);
							} else {
								let index = services.indexOf(
									"Wash and Iron (Unit)"
								);
								services.splice(index, 1);
								setLen(Len - 1);
								setColor4("white");
							}

							if (!selected4) {
								setselected4(true);
							} else {
								setselected4(false);
							}
						}}
					>
						<Image
							source={require("../images/iron-unit.png")}
							style={{
								width: 90,
								height: 90,
							}}
						/>
						<Text
							style={{
								marginTop: 8,
								textAlign: "center",
							}}
						>
							Wash and Iron (Unit)
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							marginHorizontal: 8,
							width: 110,
							height: 150,
							backgroundColor: Color5,
							elevation: 4,
							borderRadius: 10,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => {
							setButton(true);
							if (!selected5) {
								setColor5("red");
								services[Len] = "Wash and Iron (Kg)";
								setLen(Len + 1);
							} else {
								let index = services.indexOf(
									"Wash and Iron (Kg)"
								);
								services.splice(index, 1);
								setLen(Len - 1);
								setColor5("white");
							}

							if (!selected5) {
								setselected5(true);
							} else {
								setselected5(false);
							}
						}}
					>
						<Image
							source={require("../images/iron-kg.png")}
							style={{
								width: 90,
								height: 90,
							}}
						/>
						<Text
							style={{
								marginTop: 8,
								textAlign: "center",
							}}
						>
							Wash and Iron (Kg)
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							marginHorizontal: 8,
							width: 110,
							height: 150,
							backgroundColor: Color6,
							elevation: 4,
							borderRadius: 10,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => {
							setButton(true);
							if (!selected6) {
								setColor6("red");
								services[Len] = "Wash and Fold (Kg)";
								setLen(Len + 1);
							} else {
								let index = services.indexOf(
									"Wash and Fold (Kg)"
								);
								services.splice(index, 1);
								setLen(Len - 1);
								setColor6("white");
							}

							if (!selected6) {
								setselected6(true);
							} else {
								setselected6(false);
							}
						}}
					>
						<Image
							source={require("../images/fold-kg.png")}
							style={{
								width: 90,
								height: 90,
							}}
						/>
						<Text
							style={{
								marginTop: 8,
								textAlign: "center",
							}}
						>
							Wash and Fold (Kg)
						</Text>
					</TouchableOpacity>

					{Button ? (
						<FAB
							style={styles.fab}
							label="Continue"
							color="white"
							icon={require("../images/tick.png")}
							onPress={() => {
								services.find((el) => el == "Dry Cleaning")
									? navigation.navigate("DryCleaning", {
											services: services,
									  })
									: navigation.navigate("ServiceSelection", {
											services: services,
											options: options,
									  });
							}}
						/>
					) : null}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		padding: 20,
		backgroundColor: "white",
	},

	servicesImg: {
		width: "30%",
		height: "30%",
		borderRadius: 20,
	},
	selected: {
		backgroundColor: "black",
	},
	fab: {
		position: "absolute",
		margin: 16,
		right: 0,
		backgroundColor: "red",
		bottom: 10,
	},
});

export default Home;
