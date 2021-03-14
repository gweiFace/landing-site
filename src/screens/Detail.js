import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
	text-align: center;
`;

const Image = styled.img`
	padding: 10px;
	margin: auto;
	@media (max-width: 600px) {
		width: 85%;
	}
`;

const TraitContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 65%;
	margin: auto;

	@media (max-width: 900px) {
		justify-content: center;
		width: 90%;
	}
`;

const InnerTraitContainer = styled.div`
	@media (max-width: 600px) {
		width: 30%;
	}
`;

const TraitDescription = styled.h1`
	color: rgb(107, 3, 252);
`;

const Detail = () => {
	const { tokenid } = useParams();
	const [resObj, setResObj] = useState(null);

	useEffect(() => {
		axios
			.get("https://gwei-face.herokuapp.com/token/" + tokenid)
			.then((res) => {
				console.log(res.data);
				setResObj(res.data);
			});
	}, []);

	return (
		<section>
			{resObj ? (
				<>
					<Wrapper>
						<h1>{resObj.name}</h1>
						<Image src={resObj.image} alt="gweiFace" />
						<TraitContainer>
							{resObj.attributes.map((attrib, index) => {
								return !attrib.display_type ? (
									<InnerTraitContainer>
										<h3>{attrib.trait_type}</h3>
										<TraitDescription>
											{attrib.value}
										</TraitDescription>
									</InnerTraitContainer>
								) : null;
							})}
						</TraitContainer>
					</Wrapper>
				</>
			) : null}
		</section>
	);
};

export default Detail;
