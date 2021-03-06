import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.section`
	padding: 30px 20px;
	margin: auto;
	max-width: 85%;
	@media (max-width: 600px) {
		max-width: 100%;
		margin: 0 10px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 50%;
	@media (max-width: 600px) {
		margin: 0;
	}
`;

const Copyright = styled.p`
	text-align: right;
	float: right;
	margin-top: -30px;
`;

const Footer = () => {
	return (
		<Wrapper>
			<div
				style={{
					width: "50%",
					height: "2px",
					backgroundColor: "rgb(240, 240, 240)",
					margin: "10px auto",
					marginBottom: "20px",
				}}
			></div>
			<Container>
				<FontAwesomeIcon
					icon={["fab", "discord"]}
					style={{
						fontSize: "35px",
						margin: "0 5px",
						color: "rgb(114, 137, 217)",
					}}
				/>
				<a href="https://twitter.com/gweiFaceNFT" target="_blank">
					<FontAwesomeIcon
						icon={["fab", "twitter-square"]}
						style={{
							fontSize: "35px",
							margin: "0 5px",
							color: "rgb(29, 161, 242)",
						}}
					/>
				</a>
			</Container>
			<Copyright>
				IndexLabs LLC DBA gweiFace
				<br /> © 2021 IndexLabs LLC
			</Copyright>
		</Wrapper>
	);
};

export default Footer;
