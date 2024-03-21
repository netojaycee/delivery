import { Typography } from "@material-tailwind/react";

export default function SpecialFooter() {
  return (
    <footer className="">
      
      <div className="w-full bg-white p-8 bottom-0 "><hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      </div>
    </footer>
  );
}
