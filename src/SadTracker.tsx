import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomemtSelector } from "./selector";
import { Moment } from "./store";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
  const sadMoments = useSelector(sadMomemtSelector);

  return (
    <div>
      {sadMoments.map((m: Moment, index: number) => (
        <div key={index} className="bg-blue-400">
          Sadness Intensity: {m.intensity}, when: {m.when.toISOString()}
        </div>
      ))}
    </div>
  );
};

SadTracker.defaultProps = {};
export default memo(SadTracker);
