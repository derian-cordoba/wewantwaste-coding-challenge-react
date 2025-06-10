import Lottie from "lottie-react";
import LoadingAnimation from "./loading-animation.json";

export function Loading(): React.ReactElement {
  return (
    <div className="h-dvh flex justify-center items-center">
      <Lottie animationData={LoadingAnimation} loop={true} />
    </div>
  );
}
