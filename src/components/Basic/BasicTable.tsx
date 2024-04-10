import DataTable, { TableProps, createTheme } from "react-data-table-component";
import { Box, Checkbox } from "@mui/material";
import { ReactNode } from "react";
// import { useTranslation } from "react-i18next";
//  Data table documentation https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page
// https://github.com/jbetancur/react-data-table-component/blob/next/src/DataTable/styles.ts
interface TablePropsType<T> extends Omit<TableProps<T>, "data"> {
	columns: any;
	data?: Array<T> | undefined;
	title?: string;
	reverse?: boolean;
	cellStyle?: any;
	maxHeight?: string;
	hidePagination?: boolean;
	isLoading?: boolean;
}
createTheme("co-products", {
	background: {
		default: "#FFF",
	},
	divider: {
		default: "transparent",
	},
});

export default function BasicTable<T>({
	columns,
	data = [],
	reverse,
	title,
	cellStyle,
	maxHeight,
	hidePagination,
	isLoading,
	...props
}: TablePropsType<T>) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: `column${reverse ? "-reverse" : ""}`,
			}}
		>
			<DataTable
				columns={columns}
				data={data}
				title={title}
				selectableRowsComponent={Checkbox as unknown as ReactNode}
				striped
				highlightOnHover
				customStyles={{
					table: {
						style: {
							maxHeight: maxHeight || "75vh !important",
							overflowY: "auto",
						},
					},
					headCells: {
						style: {
							fontSize: "14px",
							minHeight: "56px",
							paddingRight: "8px",
						},
					},
					cells: {
						style: {
							fontSize: "14px",
							width: "100%",
							wordWrap: "break-word",
							...cellStyle,
						},
					},
				}}
				{...props}
			/>
		</Box>
	);
}
