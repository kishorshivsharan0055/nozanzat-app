import React, { useContext, useEffect } from "react";
import { Image, Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { prices } from "../utils/prices";
import { TotalPriceContext } from "../utils/TotalPriceContext";

interface selectedQuantitiesProps {
	title: string;
}

export const SelectedQuantities: React.FC<selectedQuantitiesProps> = ({
	title,
}) => {
	let { price, setPrice } = useContext(TotalPriceContext);

	// prices.map((value, index) => {
	// 	console.log(value + " hello" + index);
	// });
	const getPrice = (item: string) => {
		let price = 0;
		prices.map((value, index) => {
			if (value.item == item) price = value.price;
		});

		return price;
	};

	return (
		<View style={{ padding: 10, paddingBottom: 25 }}>
			<Text> {title} </Text>
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
					buttonStyle={{ borderRadius: 30, width: 30 }}
					background="white"
					onIncrease={(value: number) => {
						const cost: number = getPrice(title);
						setPrice(price + cost);
					}}
					onDecrease={(value: number) => {
						const cost: number = getPrice(title);
						setPrice(price - cost);
					}}
				/>
				{/* <Image
					source={require("../images/delete.png")}
					style={{ width: 15, height: 20, marginLeft: 10 }}
				/> */}
			</View>
		</View>
	);
};

export default SelectedQuantities;
