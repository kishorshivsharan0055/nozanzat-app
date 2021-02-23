import React, { createContext, useState } from "react";

type TotalContextType = {
	price: number;
	setPrice: (newPrice: number) => void;
};

export const TotalPriceContext = createContext<TotalContextType>({
	price: 0,
	setPrice: () => {},
});

type Props = {
	children: React.ReactNode;
};

const TotalPriceContextProvider: React.FC<Props> = ({ children }) => {
	const [price, setPrice] = useState(0);

	const updatePrice = (newPrice: number) => {
		setPrice(newPrice);
	};

	return (
		<TotalPriceContext.Provider
			value={{
				price,
				setPrice: updatePrice,
			}}
		>
			{children}
		</TotalPriceContext.Provider>
	);
};

export default TotalPriceContextProvider;
