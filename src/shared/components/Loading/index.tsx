import Lottie from "lottie-react";
import LoadingAnimation from "./loading-animation.json";

export function Loading(): React.ReactElement {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        width={100}
        height={100}
        animationData={LoadingAnimation}
        loop={true}
      />
    </div>
  );
}
