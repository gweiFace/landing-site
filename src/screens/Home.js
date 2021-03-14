import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Banner from "../banner.png";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Container = styled.div`
	width: 85%;
	margin: auto;
	text-align: center;
	border-radius: 15px;
`;

const GreyContainer = styled(Container)`
	background-color: rgb(240, 240, 240);
	text-align: left;
`;

const BannerContainer = styled.div`
	height: 250px;
	width: 100%;
	overflow: hidden;
	position: relative;
	background-image: url(${Banner});
	filter: blur(2px);
	transition: 0.2s;

	:hover {
		filter: blur(4px);
	}
`;

const PrimaryHeading = styled.h1`
	padding: 18px;
	padding-bottom: 0px;
	font-size: 25px;
	font-weight: 700;
	color: rgb(107, 3, 252);
`;

const Heading = styled.h3`
	padding: 18px;
	line-height: 30px;
	font-weight: 500;
`;

const Highlight = styled.span`
	color: rgb(107, 3, 252);
	font-weight: 800;
`;

const LinkHighlight = styled(Highlight)`
	cursor: pointer;
	text-decoration: underline;
`;

const Link = styled.a`
	:visited {
		text-decoration: underline;
		color: rgb(107, 3, 252);
	}
`;

const Button = styled.a`
	border-radius: 15px;
	padding: 10px 20px;
	color: white;
	background-color: rgb(107, 3, 252);
	border: none;
	cursor: pointer;
	text-align: center;
	font-size: 20px;
	font-weight: 700;
	text-decoration: none;
	transition: 0.1s;

	:hover {
		background-color: black;
		color: rgb(107, 3, 252);
	}
`;

const PieceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: auto;
	width: 75%;
	text-align: center;

	@media (max-width: 600px) {
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 85%;
	}
`;

const PieceItem = styled.div`
	width: 20%;

	@media (max-width: 600px) {
		width: 35%;
	}
`;

const PieceCount = styled.h1`
	margin: 0px;
	font-size: 28px;
	color: rgb(107, 3, 252);
`;

const PieceLabel = styled.p`
	margin-top: 0px;
`;

const url = "https://testnets-api.opensea.io/graphql/";
const data =
	'{"id":"collectionQuery","query":"query collectionQuery( $collection: CollectionSlug! ) { collection(collection: $collection) {  ...CollectionInfoBar_data } } fragment CollectionInfoBar_data on CollectionType { stats { averagePrice numOwners sevenDayVolume totalSupply totalVolume } }","variables":{"collection":"gweiface"}}';
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async (setCollectionData, state) => {
	state === true ? await timeout(0) : await timeout(60000);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);

	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	};

	setCollectionData(xhr.send(data));
	fetchData(setCollectionData, false);
};

const Home = () => {
	const [collectionData, setCollectionData] = useState(null);

	useEffect(() => {
		fetchData(setCollectionData, true);
	}, []);

	return (
		<section>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<BannerContainer></BannerContainer>
				<h1
					style={{
						position: "absolute",
						color: "white",
						fontSize: "3rem",
						margin: "0 10px",
						fontWeight: 600,
					}}
				>
					<Highlight
						style={{
							textShadow: "0px 0px 5px black",
						}}
					>
						gweiFace
					</Highlight>{" "}
					- Coming Soon
				</h1>
			</div>
			<PrimaryHeading>Project Insight</PrimaryHeading>
			<GreyContainer>
				<Heading>
					gweiFace is a collection of <Highlight>9,999</Highlight>{" "}
					unique <Highlight>600x600</Highlight> pixel pieces of art.
					Each unique work of art exists as a single Non-Fungible
					Token <Highlight>(NFT)</Highlight> under the ERC-721
					standard on the Ethereum blockchain. Therefore, there can
					only be <Highlight>one owner</Highlight> of each unique
					gweiFace.
				</Heading>
			</GreyContainer>
			<Container>
				<div style={{ padding: "10px 0px" }}>
					<Button>TO MARKETPLACE</Button>
				</div>
			</Container>

			{/*SECTION 2*/}
			<GreyContainer>
				<Heading>
					Each gweiFace is different from the rest due to its unique
					combination of <Highlight>face</Highlight>,{" "}
					<Highlight>hair</Highlight>, <Highlight>shirt</Highlight>,{" "}
					<Highlight>accessory</Highlight>, and{" "}
					<Highlight>background</Highlight>. The rarities of these
					five characteristics vary, so look out for the rare
					gweiFaces!
				</Heading>
			</GreyContainer>
			<Container>
				<h1>Piece Stats</h1>
				<PieceWrapper>
					<PieceItem>
						<PieceCount>8x</PieceCount>
						<PieceLabel>Faces</PieceLabel>
					</PieceItem>
					<PieceItem>
						<PieceCount>8x</PieceCount>
						<PieceLabel>Hairs</PieceLabel>
					</PieceItem>
					<PieceItem>
						<PieceCount>12x</PieceCount>
						<PieceLabel>Shirts</PieceLabel>
					</PieceItem>
					<PieceItem>
						<PieceCount>9x</PieceCount>
						<PieceLabel>Accessories</PieceLabel>
					</PieceItem>
					<PieceItem>
						<PieceCount>10x</PieceCount>
						<PieceLabel>Backgrounds</PieceLabel>
					</PieceItem>
				</PieceWrapper>
				<div style={{ padding: "10px 0px" }}>
					<Button href="/overview">TO OVERVIEW</Button>
				</div>
			</Container>

			{/*SECTION 3*/}
			<GreyContainer>
				<Heading>
					gweiFaces can be purchased from peers and on marketplaces
					such as{" "}
					<LinkHighlight>
						<Link
							href="https://opensea.io/"
							target="_blank"
							rel="noreferrer"
						>
							Opensea
						</Link>
					</LinkHighlight>{" "}
					<Link
						href="https://opensea.io/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faExternalLinkAlt}
							style={{
								fontSize: "16px",
								color: "rgb(107, 3, 252)",
							}}
						/>
					</Link>
					. Follow us on{" "}
					<LinkHighlight>
						<Link
							href="https://twitter.com/gweiFaceNFT"
							target="_blank"
							rel="noreferrer"
						>
							Twitter
						</Link>
					</LinkHighlight>{" "}
					<Link
						href="https://twitter.com/gweiFaceNFT"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faExternalLinkAlt}
							style={{
								fontSize: "16px",
								color: "rgb(107, 3, 252)",
								cursor: "pointer",
							}}
						/>
					</Link>{" "}
					and join our{" "}
					<LinkHighlight>
						<Link
							href="https://discord.gg/T5yTHunCfW"
							target="_blank"
							rel="noreferrer"
						>
							Discord
						</Link>
					</LinkHighlight>{" "}
					<Link
						href="https://discord.gg/T5yTHunCfW"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faExternalLinkAlt}
							style={{
								fontSize: "16px",
								color: "rgb(107, 3, 252)",
							}}
						/>
					</Link>{" "}
					to stay up to date on the latest gweiFace news!
				</Heading>
			</GreyContainer>
			<Container>
				<h1>Collection Stats</h1>
				<div style={{ padding: "10px 0px" }}>
					<Button>TO MARKETPLACE</Button>
				</div>
			</Container>

			{/*SECTION 4*/}
			<GreyContainer>
				<Heading>
					gweiFaces will be initially sold with an{" "}
					<Highlight>increasing</Highlight> price structure to{" "}
					<Highlight>reward</Highlight> those who have been with us
					since our humble beginnings.
				</Heading>
			</GreyContainer>
			<Container>
				<h1>Live Sales</h1>
				<div style={{ padding: "10px 0px" }}>
					<Button href="/gallery">TO GALLERY</Button>
				</div>
			</Container>
		</section>
	);
};

export default Home;
