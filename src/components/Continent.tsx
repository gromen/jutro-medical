import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_CONTINENT } from '../graphql/Queries';

function Continent() {
  let { code } = useParams<{ code?: string }>();

  const { loading, error, data } = useQuery(GET_CONTINENT, {
    variables: { code: 'AN' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{code}</div>;
}

export default Continent;
