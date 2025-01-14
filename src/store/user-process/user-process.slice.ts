import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, StoreNameSpace } from '../../consts/consts.ts';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user-data.ts';
import { Offer } from '../../types/offer';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  isUserDataStillLoading: false,
  favoriteOffers: [],
};

export const userProcess = createSlice({
  name: StoreNameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData | null>) => {
      state.user = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<Offer[]>) => {
      state.favoriteOffers = action.payload;
    },
    updateUserFavorites: (
      state,
      action: PayloadAction<{ editedOffer: Offer }>
    ) => {
      const { editedOffer } = action.payload;
      const offerIndex = state.favoriteOffers.findIndex(
        (offer) => offer.id === editedOffer.id
      );
      if (offerIndex === -1) {
        state.favoriteOffers.push(editedOffer);
      } else {
        state.favoriteOffers.splice(offerIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { setUserData, setFavoriteOffers, updateUserFavorites } =
  userProcess.actions;
