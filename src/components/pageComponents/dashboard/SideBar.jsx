import React, { useContext } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

export default function SideBar() {
  const [openProducts, setOpenProducts] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const { logout } = useContext(AuthContext);
  const handleOpenProducts = () => {
    setOpenProducts(!openProducts);
    setOpenCategory(false); // Close category accordion
  };

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
    setOpenProducts(false); // Close products accordion
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 pt-0">
      <div className="mb-2 p-4">
        {/* <img
          src={logo}
          className="object-cover w-[130px] h-[80px] cursor-pointer"
          alt="logo"
        /> */}
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={"/admin/dashboard"}> Dashboard</Link>
        </ListItem>
        <Accordion
          open={openProducts}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                openProducts ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpenProducts()}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to={"/admin/all-product"}>All Products</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to={"/admin/add-product"}>Add Product</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={openCategory}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                openCategory ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpenCategory()}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Category
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to={"/admin/all-category"}>All Categories</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to={"/admin/add-category"}>All Category</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={"/admin/orders"}>Orders</Link>
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>

        <ListItem onClick={logout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
