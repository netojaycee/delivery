import { Spinner } from "@material-tailwind/react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <Spinner className="h-16 w-16 text-secondary" color="white" />
    </div>
  );
}
