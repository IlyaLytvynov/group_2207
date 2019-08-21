import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import { Button } from '../components/Button';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<MuiLink color="inherit" href="https://material-ui.com/">
				Your Website
			</MuiLink>{' '}
			{new Date().getFullYear()}
			{'. Built with '}
			<MuiLink color="inherit" href="https://material-ui.com/">
				Material-UI.
			</MuiLink>
		</Typography>
	);
}

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js example
				</Typography>
				<Button color={'warning'}>Click me</Button>
				<Copyright />
			</Box>
		</Container>
	);
}