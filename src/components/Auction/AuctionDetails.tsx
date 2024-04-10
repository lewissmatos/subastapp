import { Box, Typography } from "@mui/material";
import auctionsExample from "../../data/auctionsExample.json";

import { useParams } from "react-router-dom";
import { IAuction } from "../../types/types.global";
import dayjs from "dayjs";
import BidsTable from "./BidsTable";
import { BasicModal } from "../Basic";
import { useState } from "react";
import BidForm from "./BidForm";

const AuctionDetails = () => {
	const { id } = useParams();

	const [openBidModal, setOpenBidModal] = useState(false);

	const handleCloseBidModal = () => {
		setOpenBidModal(false);
	};

	const selectedAuction =
		auctionsExample.find((auction: any) => auction.id === Number(id)) ||
		({} as IAuction);
	if (!selectedAuction) {
		return <h1>Subasta no encontrada</h1>;
	}
	return (
		<>
			<BasicModal open={openBidModal} onClose={handleCloseBidModal}>
				<BidForm />
			</BasicModal>
			<Box>
				<Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
					{selectedAuction.name}
				</Typography>

				<Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
					<Box>
						<Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
							Descripción
						</Typography>
						<Typography>{selectedAuction.description}</Typography>
					</Box>
					<Typography sx={{ fontSize: 20 }}>
						Precio:{" "}
						<Typography
							sx={{ fontSize: 20, fontWeight: "bold", display: "inline-block" }}
						>
							${selectedAuction.price}
						</Typography>
					</Typography>
					<Typography sx={{ fontSize: 20 }}>
						Fecha de finalización :{" "}
						<Typography
							sx={{ fontSize: 20, fontWeight: "bold", display: "inline-block" }}
						>
							{dayjs(selectedAuction.limitDate).format("DD-MM-YYYY, HH:mm")}
						</Typography>
					</Typography>
					<Typography sx={{ fontSize: 20 }}>
						Categorías:{" "}
						<Typography
							sx={{ fontSize: 20, fontWeight: "bold", display: "inline-block" }}
						>
							{selectedAuction.categories.join(", ")}
						</Typography>
					</Typography>
					<Typography sx={{ fontSize: 20 }}>
						Estado:{" "}
						<Typography
							sx={{ fontSize: 20, fontWeight: "bold", display: "inline-block" }}
						>
							{selectedAuction.status}
						</Typography>
					</Typography>
					<Box sx={{ mt: 2 }}>
						<BidsTable setOpenBidModal={setOpenBidModal} />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AuctionDetails;
