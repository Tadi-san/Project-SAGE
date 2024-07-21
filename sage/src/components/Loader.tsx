import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <RotatingLines
      strokeColor="green"
      strokeWidth="5"
      animationDuration="0.75"
      width="70"
      visible={true}
    />
  );
}