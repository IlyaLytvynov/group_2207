import { Theme } from '../../styles';

export default (theme: Theme) => ({
  root: {
    background: theme.header.background.main,
    color: theme.header.background.contrastText,
    height: theme.header.height,
  },
  content: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 768,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  }
});
