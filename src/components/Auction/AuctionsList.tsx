import { Box, Typography } from "@mui/material";
import auctionsExample from "../../data/auctionsExample.json";
import AuctionListItem from "./AuctionListItem";
import { IAuction } from "../../types/types.global";
import { BasicIconButton, BasicInput } from "../Basic";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import { useState } from "react";
import { Colors } from "../../styles/colors";
const AuctionsList = () => {
	const [auctionsExampleList, setAuctionsExampleList] = useState(
		auctionsExample.map((auction: any) => ({
			...auction,
		}))
	);
	const [searchText, setSearchText] = useState("");
	const [isFiltering, setIsFiltering] = useState(false);

	const onSearchAuction = () => {
		setAuctionsExampleList((prevVal) => {
			return prevVal.filter((auction: IAuction) => {
				return (
					auction.name.toLowerCase().includes(searchText.toLowerCase()) ||
					auction.description
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					auction.categories.some((category) =>
						category.toLowerCase().includes(searchText.toLowerCase())
					)
				);
			});
		});
		setIsFiltering(true);
	};

	const onResetFilters = () => {
		setAuctionsExampleList(
			auctionsExample.map((auction: any) => ({ ...auction }))
		);
		setIsFiltering(false);
		setSearchText("");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				overflowX: "hidden",
			}}
		>
			<Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
				Subastas
			</Typography>

			<BasicInput
				label="Buscar subasta"
				style={{ width: "30%" }}
				placeholder="Buscar por Nombre, Descripción o Categoría"
				size="small"
				value={searchText}
				endAdornment={
					<>
						{isFiltering ? (
							<BasicIconButton
								size="small"
								remix="text"
								onClick={onResetFilters}
							>
								<CloseRounded sx={{ color: Colors.red }} />
							</BasicIconButton>
						) : null}
						<BasicIconButton
							size="small"
							remix="text"
							onClick={onSearchAuction}
						>
							<SearchRounded />
						</BasicIconButton>
					</>
				}
				onChange={(e) => setSearchText(e.target.value)}
			/>

			<Box
				sx={{
					mt: 3,
					display: "grid",
					gap: 2,
					gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
				}}
			>
				{auctionsExampleList.map((auction, i) => (
					<AuctionListItem key={i} item={auction} />
				))}
			</Box>
		</Box>
	);
};

export default AuctionsList;
