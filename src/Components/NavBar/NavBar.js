import React from "react";
import styled from "styled-components";
import { RiChatVoiceFill } from "react-icons/ri";
const NavBar = () => {
	return (
		<Container>
			<Logo>
				<RiChatVoiceFill />
			</Logo>

			<DivHold>
				<But bg='brown'>Login </But>
				<But bg='#377dff'>Sign Up </But>
			</DivHold>
		</Container>
	);
};

export default NavBar;

const DivHold = styled.div`
	display: flex;
	justify-content: space-between;
	width: 340px;
`;

const But = styled.div`
	height: 40px;
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ bg }) => bg};
	color: white;
	cursor: pointer;
	border-radius: 5px;
`;

const Text = styled.div`
	color: white;
	margin-top: 100px;
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	background-color: #212429;
	color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Logo = styled(RiChatVoiceFill)`
	height: 30px;
	width: 100px;
	color: white;
	object-fit: cover;
`;
