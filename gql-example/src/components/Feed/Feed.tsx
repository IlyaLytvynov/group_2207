import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import { Link } from "../Link";
// @ts-ignore
const query = gql`
  query Feed($skip: Int) {
    feed(skip: $skip) {
      links {
        id
        url
        description
      }
    }
  }
`;

export const Feed: React.FC = () => {
  const { loading, error, data } = useQuery(query, {variables: {skip: 0}});
  const renderLoading = () => <h2>Loading...</h2>;

  if (loading) {
    return renderLoading();
  }
  if (error) {
    return <div>Error!!</div>;
  }
  return <>
    {data.feed.links.map((link: any) => <Link key={link.id} {...link}/>)}
    {data.visibilityFilter}
    </>
};
