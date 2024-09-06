import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { happyMomemtSelector } from './selector';

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
    const happyMoments = useSelector(happyMomemtSelector);

    return (
        <div>
            {happyMoments.map((m: any, index: number) => (
                <div key={index}>
                    Happiness Intensity: {m.intensity}, when: {m.when.toISOString()}
                </div>
            ))}
        </div>
    );
};

HappyTracker.defaultProps = {};
export default memo(HappyTracker);
