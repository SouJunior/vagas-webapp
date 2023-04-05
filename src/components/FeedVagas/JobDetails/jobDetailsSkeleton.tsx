import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
    Title,
    Company,
    Location,
    Type,
    Description,
    Prerequisites,
    Benefits,
} from './styles';

const JobDetailsSkeleton = () => {
    return (
        <div>
            <Title>
                <Skeleton height={32} width={300} />
            </Title>
            <Company>
                <Skeleton height={16} width={200} />
            </Company>
            <Location>
                <Skeleton height={16} width={100} />
            </Location>
            <Type>
                <Skeleton height={16} width={200} />
            </Type>
            <Description>
                <Skeleton count={4} />
            </Description>
            <Prerequisites>
                <Skeleton width={300} />
            </Prerequisites>
            <Benefits>
                <Skeleton width={200} />
            </Benefits>
        </div>
    );
};

export default JobDetailsSkeleton;
