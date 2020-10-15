import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

const CategoryContext = React.createContext();

export function CategoryContextProvider(props) {
	const { userAxios } = useContext(Usercontext);
	const [categories, setCategories] = useState([]);
	const [currentCategory, setCurrentCategory] = useState(null); // Should be a category ID
	
	useEffect(() => {
		axios.get("/categories").then(response => {
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
		userAxios.put`"/api/categories/${id}`, data).then(response => {
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
	
	const value = {categories, currentCategory, setcurrentCategory, addCategory, updateCategory, deleteCategory};
	return (
		<CategoryContext.Provider value={value}>
			{props.children}
		</CategoryContext.Provider>
	);
}