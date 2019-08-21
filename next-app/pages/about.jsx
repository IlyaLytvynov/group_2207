import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Button} from "../components/Button";
import React from "react";

export default function About() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					About Us page
				</Typography>
				<Button color={'warning'}>Click me</Button>
			</Box>
		</Container>
	);
}