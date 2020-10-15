import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { TopicContext } from "./TopicContext";

export const PostContext = React.createContext();

export default function PostProvider(props) {
	const { userAxios } = useContext(UserContext);
	const { currentTopic } = useContext(TopicContext);
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		if (currentTopic) {
			axios.get(`/posts/${currentTopic}`).then(response => {
				setPosts(response.data);
			}).catch(err => console.dir(err));
		} else {
			setPosts([]);
		}
	}, [currentTopic]);
	
	const addPost = data => {
		userAxios.post(`/api/posts/${currentTopic}`, data).then(response => {
			setPosts(prevtopics => [...prevtopics, response.data]);
		}).catch(err => console.dir(err));
	};
	
	const updatePost = (id, data) => {
		userAxios.put(`/api/topics/${id}`, data).then(response => {
			const index = posts.findIndex(p => p._id === id);
			const updated = [...posts];
			updated[index] = response.data;
			setPosts(updated);
		}).catch(err => console.dir(err));
	};
	
	const deletePost = id => {
		userAxios.delete(`/api/posts/${id}`).then(response => {
			setPosts(prevPosts => prevPosts.filter(p => p._id !== id));
		}).catch(err => console.dir(err));
	};
	
	const value = {posts, addPost, updatePost, deletePost};
	return (
		<PostContext.Provider value={value}>
			{props.children}
		</PostContext.Provider>
	);
}