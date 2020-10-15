import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { CategoryContext } from "./CategoryContext";

export const TopicContext = React.createContext();

export default function TopicProvider(props) {
	const { userAxios } = useContext(UserContext);
	const { currentCategory } = useContext(CategoryContext);
	const [topics, setTopics] = useState([]);
	const [currentTopic, setCurrentTopic] = useState(null);
	
	useEffect(() => {
		if (currentCategory) {
			axios.get(`/topics/${currentCategory}`).then(response => {
				setTopics(response.data);
			}).catch(err => console.dir(err));
		} else {
			setTopics([]);
		} // eslint-disable-next-line
	}, [currentCategory]);
	
	const addTopic = (topic, post) => {
		userAxios.post(`/api/topics/${currentCategory}`, {topic, post}).then(response => {
			setTopics(prevTopics => [...prevTopics, response.data]);
		}).catch(err => console.dir(err));
	};
	
	const updatetopic = (id, data) => {
		userAxios.put(`/api/topics/${id}`, data).then(response => {
			const index = topics.findIndex(t => t._id === id);
			const updated = [...topics];
			updated[index].topic = response.data;
			setTopics(updated);
		}).catch(err => console.dir(err));
	};
	
	const deleteTopic = id => {
		userAxios.delete(`/api/topics/${id}`).then(response => {
			setTopics(prevTopics => prevTopics.filter(t => t._id !== id));
		}).catch(err => console.dir(err));
	};
	
	const value = {topics, currentTopic, setCurrentTopic, addTopic, updatetopic, deleteTopic};
	return (
		<TopicContext.Provider value={value}>
			{props.children}
		</TopicContext.Provider>
	);
}