import { Nullable } from 'vitest';
import { CardType } from '../consts/consts.ts';
import { Offer } from '../types/offer';
import OfferCard from './offer-card';

type OfferCardListProps = {
  offerCards: Offer[];
  onOfferCardChange: (offer: Nullable<Offer>) => void;
  cardClass: CardType;
  wrapperClassName: string;
};

function OfferCardList({
  offerCards,
  onOfferCardChange,
  cardClass,
  wrapperClassName,
}: OfferCardListProps): JSX.Element {
  return (
    <div className={wrapperClassName}>
      {offerCards.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => onOfferCardChange(offer)}
          onMouseLeave={() => onOfferCardChange(null)}
        >
          <OfferCard offerCard={offer} cardClass={cardClass} />
        </div>
      ))}
    </div>
  );
}

export default OfferCardList;
