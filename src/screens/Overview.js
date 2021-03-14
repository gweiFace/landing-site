import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import annotation from "../annotation.png";

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

const ContentContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: start;
	width: 75%;
	flex-wrap: wrap;

	@media (max-width: 1200px) {
		width: 85%;
	}
`;

const CategoryContainer = styled.div`
	width: 15%;
	margin: 0px 10px;
	@media (max-width: 1200px) {
		width: 35%;
	}
	@media (max-width: 600px) {
		width: 80%;
		margin: 0 auto;
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

const Asterisk = styled(Heading)`
	padding: 0px;
	margin: 0px;
	@media (max-width: 600px) {
		text-align: left;
	}
`;

const CategoryHeading = styled.h1`
	@media (max-width: 600px) {
		text-align: left;
	}
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

const components = [
	[
		"Faces",
		[
			"Hooman 1",
			"Hooman 2",
			"Hooman 3",
			"Skelly",
			"Zombo",
			"Alien",
			"Demon",
			"???",
		],
		[1999, 1999, 1999, 1298, 1198, 798, 698, 10],
	],
	[
		"Hairs",
		["None", "Short", "Long", "Afro", "Beard", "Mohawk", "Stache", "Clown"],
		[2500, 1790, 1400, 1000, 1000, 900, 800, 599],
	],
	[
		"Shirts",
		[
			"Yellow",
			"Pink",
			"Red",
			"Orange",
			"Green",
			"Blue",
			"Purple",
			"Tank Top",
			"Chainmail",
			"Suspenders",
			"Jacket",
			"Suit",
		],
		[975, 975, 975, 975, 975, 975, 975, 800, 700, 600, 575, 499],
	],
	[
		"Accessories",
		[
			"None",
			"Halo",
			"Mask",
			"Headband",
			"Necklace",
			"Sombrero",
			"Viking",
			"Crown",
			"Unihorn",
		],
		[2090, 1300, 1200, 1100, 1000, 950, 950, 900, 499],
	],
	[
		"Backgrounds",
		[
			"Triangles",
			"Circles",
			"Squares",
			"Wings",
			"Tiles",
			"Snowed In",
			"Outer Space",
			"Coral Reef",
			"Sun and Moon",
			"gweiFace",
		],
		[1500, 1500, 1490, 900, 900, 900, 800, 750, 750, 499],
	],
];

const Overview = () => {
	return (
		<section>
			<PrimaryHeading>Characteristics</PrimaryHeading>
			<GreyContainer>
				<Heading>
					gweiFaces are composed of a unique combination of{" "}
					<Highlight>five</Highlight> mutable characteristics:{" "}
					<Highlight>face</Highlight>, <Highlight>hair</Highlight>,{" "}
					<Highlight>shirt</Highlight>,{" "}
					<Highlight>accessory</Highlight>, and{" "}
					<Highlight>background</Highlight>.
				</Heading>
			</GreyContainer>
			<ContentContainer>
				{components.map((component, index) => {
					return (
						<CategoryContainer>
							<CategoryHeading>{component[0]}</CategoryHeading>
							<div>
								{component[1].map((name, idx) => {
									return (
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												margin: "-20px 0",
												fontSize: "20px",
											}}
										>
											<p style={{ textAlign: "left" }}>
												{name}
											</p>
											<Highlight>
												{component[2][idx]}
											</Highlight>
										</div>
									);
								})}
							</div>
						</CategoryContainer>
					);
				})}
			</ContentContainer>
			<Container style={{ marginTop: "25px" }}>
				<Asterisk>
					*Characteristics exist with different rarities, which can be
					inspected on{" "}
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
					</Link>{" "}
					gweiFace listings or our{" "}
					<LinkHighlight>
						<Link href="/gallery">Gallery</Link>
					</LinkHighlight>{" "}
					<Link href="/gallery">
						<FontAwesomeIcon
							icon={faExternalLinkAlt}
							style={{
								fontSize: "16px",
								color: "rgb(107, 3, 252)",
							}}
						/>
					</Link>{" "}
					page
				</Asterisk>
				<Asterisk>
					**All <Highlight>non-face</Highlight> categories display
					rarities of the first <Highlight>9,989</Highlight>{" "}
					gweiFaces. The remaining <Highlight>10</Highlight> gweiFaces
					will be <Highlight>specially curated</Highlight> towards the
					end of our sale.
				</Asterisk>
				<img
					src={annotation}
					alt="Characteristic annotation"
					style={{ marginTop: "20px", height: "350px" }}
				/>
			</Container>
		</section>
	);
};

export default Overview;
