import React from "react";
import { NavLink } from "react-router-dom";
import Room from "./Room";

const RoomList = ({ roomUser }) => {
	return (
		<div>
			{roomUser &&
				roomUser.map((room) => (
					<NavLink
						style={{ textDecoration: "none", color: "black" }}
						to={`/chat/${room._id}/${room.name}`}>
						<Room props={room} key={room._id} />
					</NavLink>
				))}
		</div>
	);
};

export default RoomList;
