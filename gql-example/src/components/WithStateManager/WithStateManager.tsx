import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

export const WithStateManager: React.FC<any> = ({ children }) =>{
	const { data, client } = useQuery(GET_VISIBILITY_FILTER);
	console.log(client, data);
	return (
		<button
			onClick={() => client.writeData({ data: { visibilityFilter: 'helloWorld' } })}
		>
			Click me
		</button>
	)
};
