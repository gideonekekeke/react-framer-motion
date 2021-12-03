import React, { useContext } from "react";
import { UserContext } from "../../Global/UserContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Chat = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<h2>Chat {JSON.stringify(user)}</h2>
			<But2 to='/' bg='red'>
				Go to Home
			</But2>
		</div>
	);
};

export default Chat;

const But2 = styled(NavLink)`
	text-decoration: none;
	height: 40px;
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ bg }) => bg};
	color: white;
	cursor: pointer;
`;
