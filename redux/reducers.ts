import { closeMenuAction, MenuActions, showMenuAction } from "./actions";

export interface IMenuState {
  readonly status: MenuActions;
}

const initialState: IMenuState = {
  status: MenuActions.MENU_CLOSE
};

export const menuReducer = (
  state = initialState,
  action: showMenuAction | closeMenuAction
) => {
  switch (action.type) {
    case MenuActions.MENU_SHOW:
      return {
        status: MenuActions.MENU_SHOW
      };
    case MenuActions.MENU_CLOSE:
      return {
        status: MenuActions.MENU_CLOSE
      };
  }
  return state;
};
