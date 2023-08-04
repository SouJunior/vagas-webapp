import { Img, JourneyDescription, JourneyWrapper } from './styles';

interface JourneyCardProps {
    Img: string;
    Description: string;
}

const JourneyCard = (props: JourneyCardProps) => {
    return (
        <JourneyWrapper>
            <Img src={props.Img} />
            <JourneyDescription>{props.Description}</JourneyDescription>
        </JourneyWrapper>
    );
};

export default JourneyCard;
