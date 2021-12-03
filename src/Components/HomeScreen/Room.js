import React from "react";
import styled from "styled-components";
const Room = ({ props }) => {
	return (
		<div>
			<Card>
				<h5>{props.name}</h5>
			</Card>
		</div>
	);
};

export default Room;

const Card = styled.div`
	height: 70px;
	width: 300px;
	background-color: white;
	box-shadow: 0px 5px 7px -1px rgba(0, 0, 0, 0.35);

	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;
