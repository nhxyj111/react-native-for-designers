export enum MenuActions {
  MENU_SHOW = "MENU_SHOW",
  MENU_CLOSE = "MENU_CLOSE"
}

export interface showMenuAction {
  type: MenuActions.MENU_SHOW;
}

export function showMenu(): showMenuAction {
  return {
    type: MenuActions.MENU_SHOW
  };
}

export interface closeMenuAction {
  type: MenuActions.MENU_CLOSE;
}

export function closeMenu(): closeMenuAction {
  return {
    type: MenuActions.MENU_CLOSE
  };
}
