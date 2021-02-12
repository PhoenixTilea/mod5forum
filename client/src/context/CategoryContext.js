import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const CategoryContext = React.createContext();

export default function CategoryProvider(props) {
	const { userAxios } = useContext(UserContext);
	const [categories, setCategories] = useState([{title: "Web Development"}, {title: "User Interface UI"}, {title: "Career Development"}, {title: "Alumni"}]);
	const [currentCategory, setCurrentCategory] = useState(categories._id); // Should be a category ID
	
	useEffect(() => {
		axios.get("/categories").then(response => {
			console.log("Category Response", response)
			setCategories(response.data);
		}).catch(err => console.dir(err));
		// eslint-disable-next-line
	}, []);
	
	const addCategory = data => {
		userAxios.post("/api/categories", data).then(response => {
			setCategories(prevCategories => [...prevCategories, response.data]);
		}).catch(err => console.dir(err));
	};
	
	const updateCategory = (id, data) => {
		userAxios.put(`/api/categories/${id}`, data).then(response => {
			const index = categories.findIndex(c => c._id === id);
			const updated = [...categories];
			updated[index] = response.data;
			setCategories(updated);
		}).catch(err => console.dir(err));
	};
	
	const deleteCategory = id => {
		userAxios.delete(`/api/categories/${id}`).then(response => {
			const updated = categories.filter(c => c._id !== id);
			setCategories(updated);
		}).catch(err => console.dir(err));
	};
	
	const value = {categories, currentCategory, setCurrentCategory, addCategory, updateCategory, deleteCategory};
	return (
		<CategoryContext.Provider value={value}>
			{props.children}
		</CategoryContext.Provider>
	);
}