import {btnResetDefault, Theme} from '../../styles';

export default (theme: Theme) => ({
  root: {
    ...btnResetDefault(),
    backgroundColor: theme.palette.primary.main,
    padding: '12px 15px',
    textTransform: 'none' as any,
  },
  content: {},
  disabled: {
    boxShadow: 'none !important'
  }
});
