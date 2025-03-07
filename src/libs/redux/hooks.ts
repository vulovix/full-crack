// src/hooks/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type IRootState = TypedUseSelectorHook<RootState>;
export interface IPersistable {
  _persist?: {
    version: number;
    rehydrated: boolean;
  };
}
