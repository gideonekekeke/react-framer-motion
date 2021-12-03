import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Chat from "./Components/ChatPage/Chat";
import { AuthProvider } from "./Global/UserContext";
import NavBar from "./Components/NavBar/NavBar";
function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<NavBar />
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/chat/:room_id/:room_name' element={<Chat />} />
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
