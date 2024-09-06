import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { sadMomemtSelector } from './selector';

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
    const sadMoments = useSelector(sadMomemtSelector);

    return (
        <div>
            {sadMoments.map((m: any, index: number) => (
                <div key={index}>
                    Sadness Intensity: {m.intensity}, when: {m.when.toISOString()}
                </div>
            ))}
        </div>
    );
};

SadTracker.defaultProps = {};
export default memo(SadTracker);
