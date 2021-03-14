import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const options = {
	faces: [
		"",
		"Demon",
		"Skelly",
		"Alien",
		"Zombo",
		"Hooman 1",
		"Hooman 2",
		"Hooman 3",
	],
	hairs: [
		"",
		"None",
		"Short",
		"Long",
		"Mohawk",
		"Beard",
		"Afro",
		"Stache",
		"Clown",
	],
	shirts: [
		"",
		"Suit",
		"Tank Top",
		"Chain Mail",
		"Suspenders",
		"Jacket",
		"Yellow",
		"Pink",
		"Red",
		"Orange",
		"Green",
		"Blue",
		"Purple",
	],
	accessories: [
		"",
		"None",
		"Mask",
		"Halo",
		"Sombrero",
		"Viking",
		"Unihorn",
		"Headband",
		"Crown",
		"Necklace",
	],
	backgrounds: [
		"",
		"Outer Space",
		"Wings",
		"Sun and Moon",
		"Triangles",
		"Tiles",
		"Snowed In",
		"Coral Reef",
		"Squares",
		"Circles",
		"gweiFace",
	],
};

const OptionController = (props) => {
	return (
		<div>
			<select
				value={props.value}
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
			>
				{options[props.category].map((option) => {
					return <option value={option}>{option}</option>;
				})}
			</select>
		</div>
	);
};

const Gallery = () => {
	const entries = [15, 50, 100, 500];

	const [gallery, setGallery] = useState([]);
	const [view, setView] = useState([]);
	const [page, setPage] = useState(0);
	const [entriesPerPage, setEntriesPerPage] = useState(15);

	const [face, setFace] = useState("");
	const [hair, setHair] = useState("");
	const [shirt, setShirt] = useState("");
	const [accessory, setAccessory] = useState("");
	const [background, setBackground] = useState("");

	useEffect(() => {
		if (gallery) {
			setView(
				gallery.slice(
					page * entriesPerPage,
					page * entriesPerPage + entriesPerPage
				)
			);
		}
	}, [gallery, entriesPerPage, page]);

	useEffect(() => {
		if (page !== 0) {
			setPage(0);
		}
	}, [entriesPerPage]);

	useEffect(() => {
		axios
			.get("https://gwei-face.herokuapp.com/query", {
				params: {
					face: face,
					hair: hair,
					shirt: shirt,
					accessory: accessory,
					background: background,
				},
			})
			.then((res) => {
				setGallery(res.data);
				setPage(0);
			})
			.catch((err) => {});
	}, [face, hair, shirt, accessory, background]);

	return (
		<div
			style={{
				padding: "20px",
			}}
		>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ display: "flex" }}>
					<OptionController
						value={face}
						setValue={setFace}
						category="faces"
					/>
					<OptionController
						value={hair}
						setValue={setHair}
						category="hairs"
					/>
					<OptionController
						value={shirt}
						setValue={setShirt}
						category="shirts"
					/>
					<OptionController
						value={accessory}
						setValue={setAccessory}
						category="accessories"
					/>
					<OptionController
						value={background}
						setValue={setBackground}
						category="backgrounds"
					/>
				</div>
				<div style={{ display: "flex" }}>
					<button
						onClick={() => {
							if (gallery && page > 0) {
								setPage(page - 1);
							}
						}}
					>
						Prev
					</button>
					<p>{page + 1}</p>
					<button
						onClick={() => {
							if (
								gallery &&
								(page + 1) * entriesPerPage < gallery.length
							) {
								setPage(page + 1);
							}
						}}
					>
						Next
					</button>
				</div>
				<div style={{ display: "flex" }}>
					{entries.map((val) => {
						return (
							<button
								onClick={() => {
									setEntriesPerPage(val);
								}}
							>
								{val}
							</button>
						);
					})}
				</div>
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				{view.map((el) => {
					return (
						<a
							style={{
								color: "white",
								WebkitTextStrokeColor: "black",
								WebkitTextStrokeWidth: "2px",
								width: "20%",
								position: "relative",
							}}
							href={el[1].external_url}
							target="_blank"
							rel="noreferrer"
						>
							<h1
								style={{
									margin: 10,
									position: "absolute",
									top: 0,
									right: 0,
									fontWeight: "600",
									fontSize: "3vw",
								}}
							>
								{el[1].name.slice(8)}
							</h1>
							<img
								src={el[1].image}
								alt={el[1].name}
								width="100%"
								style={{ verticalAlign: "bottom" }}
							/>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Gallery;
