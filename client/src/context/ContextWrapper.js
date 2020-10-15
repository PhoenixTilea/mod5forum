import React from "react";
import { UserContextProvider } from "./UserContext";
import { CategoryContextProvider } from "./CategoryContext";

export default function ContextWrapper(props) {
	return (
		<UserContextProvider>
			<CategoryContextProvider>
			{props.children}
			</CategoryContextProvider>
		</UserContextProvider>
	);
}