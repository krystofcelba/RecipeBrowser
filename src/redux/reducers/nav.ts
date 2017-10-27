export const ON_NAV_SCREEN_CHANGED = 'ON_NAV_SCREEN_CHANGE';

export type Actions = {
  ON_NAV_SCREEN_CHANGE: {
    type: typeof ON_NAV_SCREEN_CHANGED;
    screenId: string;
  };
};

export const actionCreators = {
  onNavScreenChange: (
    screenId: string,
  ): Actions[typeof ON_NAV_SCREEN_CHANGED] => ({
    type: ON_NAV_SCREEN_CHANGED,
    screenId,
  }),
};

export type State = {
  readonly currentScreenId: string;
};

export const reducer = (
  state = { currentScreenId: '' },
  action: Actions[keyof Actions],
) => {
  switch (action.type) {
    case ON_NAV_SCREEN_CHANGED:
      return { ...state, currentScreenId: action.screenId };
    default:
      return state;
  }
};
