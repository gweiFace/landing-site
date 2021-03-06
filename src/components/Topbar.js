import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../logo.png";

const Wrapper = styled.section`
	padding: 0px 20px;
	margin: 10px auto;
	max-width: 85%;
	margin-bottom: 20px;

	@media (max-width: 600px) {
		max-width: 100%;
		padding: 0 10px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.img`
	height: 50px;
	margin-right: -10px;
`;

const Text = styled.p`
	font-size: 20px;
	font-weight: 600px;
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

const LogoText = styled(Text)`
	@media (max-width: 600px) {
		display: none;
	}
`;

const ListEl = styled(Text)`
	margin: 0 10px;
	cursor: pointer;
	@media (max-width: 600px) {
		margin: 0 5px;
	}
`;

const Button = styled.a`
	font-size: 20px;
	font-weight: 600px;
	text-decoration: none;
	border-radius: 20px;
	padding: 10px; 20px;
	background-color: rgb(107, 3, 252);
	color: white;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

const NavItem = (props) => {
	return (
		<ListEl>
			<NavLink
				exact
				to={props.path}
				style={{ textDecoration: "none", color: "black" }}
				activeStyle={{
					fontWeight: 600,
					color: "rgb(107, 3, 252)",
				}}
			>
				{props.text}
			</NavLink>
		</ListEl>
	);
};

const Topbar = () => {
	return (
		<Wrapper>
			<Container>
				<Container>
					<Logo src={logo} alt="Logo" />
					<LogoText>
						<NavLink
							to="/"
							style={{ color: "black", textDecoration: "none" }}
						>
							gweiFace
						</NavLink>
					</LogoText>
				</Container>
				<Container>
					<NavItem path="/" text="Home" />
					<NavItem path="/overview" text="Overview" />
					<NavItem path="/gallery" text="Gallery" />
					<Button href="https://opensea.io/" target="_blank">
						Marketplace
					</Button>
				</Container>
			</Container>
		</Wrapper>
	);
};

export default Topbar;
