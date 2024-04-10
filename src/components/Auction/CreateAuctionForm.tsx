import { Box, MenuItem, Typography } from "@mui/material";
import { BasicButton, BasicInput, BasicSelect } from "../Basic";
import statuses from "../../data/statuses.json";
import categories from "../../data/categories.json";
const CreateAuctionForm = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
				Crear subasta
			</Typography>

			<Box
				sx={{
					mt: 3,
					display: "flex",
					gap: 2,
					flexDirection: "column",
					width: 400,
				}}
			>
				<BasicInput label="Nombre" />
				<BasicInput label="Descripción" type="textarea" rows={4} multiline />
				<BasicInput label="Precio" type="number" />
				<BasicInput label="Fecha de finalización" type="date" />
				<BasicSelect label="Categoría">
					{categories.map((status) => (
						<MenuItem key={status.id} value={status.name}>
							{status.name}
						</MenuItem>
					))}
				</BasicSelect>
				<BasicSelect label="Estado">
					{statuses.map((status) => (
						<MenuItem key={status} value={status}>
							{status}
						</MenuItem>
					))}
				</BasicSelect>
				<BasicButton>Crear subasta</BasicButton>
			</Box>
		</Box>
	);
};

export default CreateAuctionForm;
