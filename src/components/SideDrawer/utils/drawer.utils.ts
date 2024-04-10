//Auctions
import { AddRounded } from "@mui/icons-material";
import GavelIcon from "@mui/icons-material/Gavel";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
// Drawer items type
export type DrawerItemType = {
	label: string;
	countKey?: string;
	Icon: OverridableComponent<SvgIconTypeMap>;
	url: string;
	children?: DrawerItemTypeChildren[];
	screenName?: string;
};

export type DrawerItemTypeChildren = DrawerItemType & {
	parent?: string;
};

// Drawer items
export const drawerItems: DrawerItemType[] = [
	{
		label: "Subastas",
		countKey: "auction",
		Icon: GavelIcon,
		url: `/dashboard/subastas`,
		screenName: "Auctions Screen",
	},
	{
		label: "Crear Subasta",
		countKey: "create-auction",
		Icon: AddRounded,
		url: `/dashboard/crear-subasta`,
		screenName: "Auctions Screen",
	},
];
