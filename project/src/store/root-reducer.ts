import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offerData} from './offer-data/offer-data';
import {offerProcess} from './offer-process/offer-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: offerData.reducer,
  [NameSpace.offer]: offerProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
