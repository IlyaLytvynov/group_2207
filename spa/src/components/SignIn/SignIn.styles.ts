import { Theme } from '../../styles';

export default (theme: Theme) => ({
	root: {
		background: theme.palette.primary.main
	},
	container: {
		maxWidth: 960,
		margin: '0 auto'
	},
	signInLinkWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	signInLink: {
		color: theme.palette.primary.text,
		border: ''
	}
});
