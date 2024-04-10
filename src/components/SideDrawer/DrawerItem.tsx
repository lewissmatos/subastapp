import { FC } from "react";
import { Box, Typography } from "@mui/material";
import {
	DrawerItemType,
	DrawerItemTypeChildren,
	drawerItems,
} from "./utils/drawer.utils";
import "./side-drawer.scss";
import { ButtonRemixesType } from "../utils/shared-components.utils";
import { Colors } from "../../styles/colors";
import { BasicButton, BasicIconButton, BasicTooltip } from "../Basic";

// DrawerItem props type which extends DrawerItemType
type DrawerItemProps = {
	selected: string;
	onSelectDrawerItem: (label: string, url: string) => void;
	setSelectedItem: any;
	item: DrawerItemType & DrawerItemTypeChildren;
};

// IconStylePropsType props type
type IconStylePropsType = {
	buttonRemix: ButtonRemixesType;
	labelColor: string;
	iconColor?: string;
};

const DrawerItem: FC<DrawerItemProps> = ({
	selected,
	onSelectDrawerItem,
	item,
}) => {
	const { label, Icon, url } = item;

	const allItems = [
		...drawerItems,
		...drawerItems.flatMap((item) => {
			if (item?.children) return item?.children;
		}),
	];

	// Check if the current item is selected
	const isSelected = selected === label;
	// Icon style props
	const iconStyleProps: IconStylePropsType = isSelected
		? {
				buttonRemix: "contained",
				labelColor: Colors.white,
				iconColor: Colors.accent,
		  }
		: {
				buttonRemix: "soft",
				labelColor: Colors.darkGray,
		  };

	const handleItemClick = (label: string) => {
		let newUrl = "";
		if (!url) {
			const { url } = allItems?.find((item) => item?.label.includes(label)) || {
				url: "auctions",
			};

			newUrl = url as string;
		}
		const _url = url || newUrl;
		onSelectDrawerItem(label, _url);
	};

	return (
		<Box className="app-drawer-item" key={label}>
			<BasicButton
				onClick={() => handleItemClick(label)}
				remix={iconStyleProps?.buttonRemix}
				label={label}
				style={{
					width: "100%",
					justifyContent: "flex-start",
				}}
				startIcon={
					<Icon
						className={
							isSelected ? "app-drawer-icon-selected" : "app-drawer-icon"
						}
					/>
				}
			>
				<Typography
					sx={{
						color: iconStyleProps?.labelColor,
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
						width: "100%",
						px: 0.3,
						fontSize: 15,
					}}
				>
					<span>{label}</span>
				</Typography>
			</BasicButton>
		</Box>
	);
};

export default DrawerItem;
