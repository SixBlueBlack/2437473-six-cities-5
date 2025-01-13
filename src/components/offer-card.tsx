import { Link } from 'react-router-dom';
import { Offer } from '../types/offer';
import { AppRoutes, CardType, RoomTypes } from '../consts/consts.ts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAuthCheckedStatus } from '../store/user-process/user-process.selectors';
import { redirectToRoute } from '../store/actions';
import { editFavoritesAction } from '../store/api-actions';

type OfferCardProps = {
  offerCard: Offer;
  cardClass: CardType;
};

function OfferCard({ offerCard, cardClass }: OfferCardProps): JSX.Element {
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const dispatch = useAppDispatch();
  const handleBookmarkClick = () => {
    if (!isAuth) {
      dispatch(redirectToRoute(AppRoutes.Login));
    } else {
      dispatch(
        editFavoritesAction({
          offerId: offerCard.id,
          isFavoriteNow: offerCard.isFavorite,
        })
      );
    }
  };
  return (
    <article className="cities__card place-card">
      {offerCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offerCard.id}`}>
          <img
            className="place-card__image"
            src={offerCard.previewImage}
            width={cardClass === CardType.Favorites ? 150 : 260}
            height={cardClass === CardType.Favorites ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`${
          cardClass === CardType.Favorites ? 'favorites__card-info' : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offerCard.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              offerCard.isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {offerCard.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offerCard.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offerCard.id}`}>{offerCard.title}</Link>
        </h2>
        <p className="place-card__type">{RoomTypes[offerCard.type]}</p>
      </div>
    </article>
  );
}

export default OfferCard;
