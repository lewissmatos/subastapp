import { Box, Typography } from "@mui/material";
import BasicTable from "../Basic/BasicTable";
import bidsExample from "../../data/bidsExample.json";
import { IBid } from "../../types/types.global";
import dayjs from "dayjs";
import { BasicButton } from "../Basic";
import { MoneyRounded } from "@mui/icons-material";
import { FC } from "react";

type BidsTableProps = {
	setOpenBidModal: any;
};

const BidsTable: FC<BidsTableProps> = ({ setOpenBidModal }) => {
	const columns = [
		{
			name: "Usuario",
			selector: (bid: IBid) => bid.bidderName,
		},
		{
			name: "Monto",
			selector: (bid: IBid) => `$${bid.amount}`,
		},
		{
			name: "Fecha",
			selector: (bid: IBid) => dayjs(bid.date).format("DD-MM-YYYY, HH:mm"),
		},
	];

	const data = bidsExample
		.map(
			(bid: any) =>
				({
					bidderName: bid.bidderName,
					amount: bid.amount,
					date: bid.date,
				} || ([] as IBid[]))
		)
		.reverse();

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "row",
				}}
			>
				<Typography sx={{ fontSize: 24 }}>Ofertas</Typography>
				<BasicButton
					onClick={() => setOpenBidModal(true)}
					endIcon={<MoneyRounded />}
				>
					Ofertar
				</BasicButton>
			</Box>

			<BasicTable columns={columns} data={data} />
			<Typography sx={{ fontSize: 20, fontWeight: "bold", mt: 2 }}>
				Mayor oferta actual: ${data[0].amount} - Usuario: {data[0].bidderName}
			</Typography>
			<Typography sx={{ fontSize: 16 }}>
				El usuario con esta oferta está previsto que gane la subasta
			</Typography>
		</Box>
	);
};

export default BidsTable;
