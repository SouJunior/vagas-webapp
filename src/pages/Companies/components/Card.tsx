import * as s from './Card.styles';

interface ICard {
  heading: string;
  img: string;
  description: string;
}

export function Card({ heading, description, img }: ICard) {
  return (
    <s.Card>
      <s.CardHeader>
        <img src={img} alt="" />
        <s.CardHeading>{heading}</s.CardHeading>
      </s.CardHeader>

      <s.CardDescription>{description}</s.CardDescription>
    </s.Card>
  );
}
