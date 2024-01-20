import {signalStore, withMethods, withState} from '@ngrx/signals';

export type Item = {
  id: string;
}

export type AppState = {
  items: Item[];
};

const initialState: AppState = {
  items: [],
};

export const AppStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(() => ({
    test() {}
  })),
);
