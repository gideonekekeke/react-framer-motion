import React, { useContext } from "react";
import { UserContext } from "../../Global/UserContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RoomList from "./RoomList";
import { AiOutlineArrowLeft } from "react-icons/ai";
import io from "socket.io-client";
let socket;
const HomeScreen = () => {
	const ENDPT = "localhost:4000";
	const [roomValue, setRoomValue] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		socket.emit("create-room", roomValue);
		console.log(roomValue);

		setRoomValue("");
	};

	React.useEffect(() => {
		socket = io(ENDPT);

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}, []);

	const roomUser = [
		{
			name: "room1",
			_id: 1,
		},

		{
			name: "room2",
			_id: "2",
		},
	];

	const { user, setUser } = useContext(UserContext);
	const setAsJohn = () => {
		const john = {
			name: "John",
			email: "john@gmail.com",
			password: "john123",
			id: 1,
		};
		setUser(john);
	};
	const setAsMalush = () => {
		const malush = {
			name: "malush",
			email: "malush@gmail.com",
			password: "malush123",
			id: 2,
		};
		setUser(malush);
	};

	return (
		<Container>
			<ContentHolder>
				<Card>
					<But2 to='/chat' bg='red'>
						<AiOutlineArrowLeft /> Go to Chat
					</But2>
					<Title>Welcome {user ? user.name : ""}</Title>
					<br />
					<br />
					<br />
					<input
						onChange={(e) => {
							setRoomValue(e.target.value);
						}}
						value={roomValue}
						placeHolder='Create a room name'
					/>
					<br />
					<But bg='brown' onClick={handleSubmit}>
						Create Room
					</But>
					<br />
					<br />
					<ButtonHold>
						<But bg='#212429' onClick={setAsJohn}>
							Click john
						</But>
						<But onClick={setAsMalush}>Click malush</But>
					</ButtonHold>
				</Card>
			</ContentHolder>

			<RoomList roomUser={roomUser} />
		</Container>
	);
};

export default HomeScreen;

const Title = styled.div`
	margin-top: 20px;
	font-size: 17px;
	font-weight: bold;
`;

const ContentHolder = styled.div`
	display: flex;
	/* justify-content: space-between; */
	/* align-items: center; */
`;
const Card = styled.div`
	/* height: 350px; */
	width: 450px;
	background-color: #212429;
	display: flex;
	/* justify-content: center; */
	color: white;
	flex-direction: column;
	align-items: center;
	padding-bottom: 30px;
	border-radius: 5px;

	input {
		height: 30px;
		width: 90%;
		background-color: black;
		border: none;
		outline: none;
		border-bottom: 1px solid silver;
		color: white;

		:hover {
			transition: all 350ms;
		}
	}
`;

const ButtonHold = styled.div`
	display: flex;

	justify-content: space-between;
	width: 400px;
	margin: 10px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	/* flex-direction: column; */
	margin-top: 200px;
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

	:hover {
		background-color: #377dff;
	}
`;
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
	border-radius: 5px;
	margin-top: 50px;
	margin-left: 10px;
`;
