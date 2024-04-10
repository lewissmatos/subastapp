import { Box, Typography } from "@mui/material";
import { BasicInput } from "../Basic";
import BasicButton from "../Basic/BasicButton";

const BidForm = () => {
	return (
		<Box>
			<Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
				Nueva oferta
			</Typography>
			<Box sx={{ mt: 2 }}>
				<BasicInput label="Monto" type="number" />
				<Typography sx={{ fontSize: 20, fontWeight: "bold", mt: 2 }}>
					Mayor oferta actual: {"$700"}
				</Typography>
				<Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
					<BasicButton>Hacer oferta</BasicButton>
				</Box>
			</Box>
		</Box>
	);
};

export default BidForm;
