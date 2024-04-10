import { Box, Divider, Typography } from "@mui/material";
import { IAuction } from "../../types/types.global";
import dayjs from "dayjs";
import "./auction.scss";
import { Colors } from "../../styles/colors";
import { CalendarToday } from "@mui/icons-material";
import GavelIcon from "@mui/icons-material/Gavel";

import { BasicButton } from "../Basic";
import { useNavigate } from "react-router-dom";
const AuctionListItem = ({ item }: { item: IAuction }) => {
	const navigate = useNavigate();
	const onGoToAuction = () => {
		navigate(`/dashboard/subastas/${item.id}`);
	};

	return (
		<Box className="auction-item__container">
			<Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
				{item.name}
			</Typography>
			<Typography sx={{ fontSize: 16 }}>$ {item.price}</Typography>
			<Divider />
			<Typography sx={{ fontSize: 14, color: Colors.darkGray }}>
				{item.description}
			</Typography>
			<Typography sx={{ fontSize: 13 }}>{item.status}</Typography>
			<Typography sx={{ fontSize: 14 }}>
				<CalendarToday sx={{ fontSize: 14 }} />{" "}
				{dayjs(item.limitDate).format("DD-MM-YYYY, HH:mm")}
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					flexDirection: "column",
				}}
			>
				<Typography
					sx={{ fontSize: 13, color: Colors.darkGray, fontStyle: "italic" }}
				>
					#{item.categories.join(", #")}
				</Typography>
				<BasicButton
					remix="blured"
					style={{ marginTop: 1 }}
					endIcon={<GavelIcon />}
					onClick={onGoToAuction}
				>
					Ver
				</BasicButton>
			</Box>
		</Box>
	);
};

export default AuctionListItem;
