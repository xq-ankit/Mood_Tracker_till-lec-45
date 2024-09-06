import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { happyMomemtSelector } from './selector';
import { Moment } from './store';

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
    const happyMoments = useSelector(happyMomemtSelector);

    return (
        <div>
            {happyMoments.map((m: Moment) => (
                <div>
                    Happiness Intensity: {m.intensity}, when: {m.when.toISOString()}
                </div>
            ))}
        </div>
    );
};

HappyTracker.defaultProps = {};
export default memo(HappyTracker);
