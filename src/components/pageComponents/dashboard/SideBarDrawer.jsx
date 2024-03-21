import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "./SideBar";

export default function SideBarDrawer() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      {/* <Button }> */}

      <FontAwesomeIcon
        onClick={openDrawer}
        icon={faBars}
        className="md:hidden"
      />
      {/* </Button>/ */}
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="flex items-center justify-end">
          {/* <Typography variant="h5" color="blue-gray"></Typography> */}
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <SideBar />
      </Drawer>
    </React.Fragment>
  );
}
