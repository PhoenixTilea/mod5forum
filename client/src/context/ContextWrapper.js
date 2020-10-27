import React from "react";
import UserProvider from "./UserContext";
import CategoryProvider from "./CategoryContext";
import TopicProvider from "./TopicContext";
import PostProvider from "./PostContext";

export default function ContextWrapper(props) {
	return (
		<UserProvider>
			<CategoryProvider>
				<TopicProvider>
					<PostProvider>
					{props.children}
					</PostProvider>
				</TopicProvider>
			</CategoryProvider>
		</UserProvider>
	);
}