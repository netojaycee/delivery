import React, { useContext, useState } from "react";
import {
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

export default function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { auth, logout } = useContext(AuthContext);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialogAcc, setOpenDialogAcc] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen}
            >
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
                    fill="#90A4AE"
                  />
                </svg>
                {auth && auth?.profile?.name}
                {/* {auth && auth?.profile?.name.length > 10
                  ? `${auth?.profile?.name.slice(0, 10)}...`
                  : auth?.profile?.name} */}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </Typography>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="">
          <Card className="w-70">
            <CardHeader shadow={false} floated={false} className="">
              <Typography variant="h6" color="blue-gray">
                Hello, {auth && auth?.profile?.name}
              </Typography>
              <hr className="w-[80%] mx-auto border  my-2" />
            </CardHeader>

            <CardFooter className="pt-0">
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="h6"
                  className="cursor-pointer"
                  color="green"
                >
                  <Link to={"/admin/dashboard"}>Dashboard</Link>
                </Typography>
                <button onClick={() => logout()} color="primary">
                  <Typography
                    variant="h6"
                    className="cursor-pointer"
                    color="green"
                  >
                    Logout
                  </Typography>
                </button>
              </div>
            </CardFooter>
          </Card>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}
