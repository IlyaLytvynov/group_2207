import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import { Link } from "../Link";
// @ts-ignore
const query = gql`
  query Feed {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`;

export const Feed: React.FC = () => {
  const { loading, error, data } = useQuery(query, {variables: {}});
  const renderLoading = () => <h2>Loading...</h2>;

  if (loading) {
    return renderLoading();
  }
  if (error) {
    console.log(error);
    return <div>Error!!</div>;
  }
  console.log(data);
  return data.feed.links.map((link: any) => <Link key={link.id} {...link}/>)
};
