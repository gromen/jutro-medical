import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../graphql/Queries';

function Continents() {
  type Continents = {
    name: string;
    code: string;
    countries: Object[];
  };
  let { code } = useParams<{ code: string }>();
  console.log(code);

  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const continents = data.continents.map((item: Continents, index: number) => (
    <Link
      key={index}
      to={`/continents/${item.code}`}
      style={{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        width: '100px',
        height: '100px',
      }}
    >
      <div
        style={{
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.name}
      </div>
      <div
        style={{
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.code}
      </div>
    </Link>
  ));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {continents}
    </div>
  );
}

export default Continents;
