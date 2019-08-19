export interface HomeState {
  title: string;
}

export const INITIAL_STATE = {
  title: 'HELLO WORLD'
};

export default (state: HomeState = INITIAL_STATE, action: any) => {
  return { ...state };
};
