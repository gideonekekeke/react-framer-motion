import { motion } from "framer-motion";
import "./App.css";
import styled from "styled-components";
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div>
					<motion.h1
						transition={{
							delay: 0.5,
							duration: 5,
							type: "spring",
							stiffness: 300,
						}}
						animate={{ scale: 1.1, x: 0, opacity: 1 }}
						initial={{ x: "-100%", opacity: 0 }}>
						Welcome Gideon
					</motion.h1>
					<ButtonHold whileHover={{ scale: 1.1 }}>Framer button</ButtonHold>
				</div>
			</header>
		</div>
	);
}

export default App;

const ButtonHold = styled(motion.div)`
	height: 70px;
	background: coral;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	cursor: pointer;
`;
