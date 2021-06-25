import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../graphql/Queries';
import Continent from './Continent';

interface ContinentsType {
  name: string;
  code: string;
  countries: Object[];
}

function Continents() {
  let { path } = useRouteMatch();

  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const continents = data.continents.map(
    (item: ContinentsType, index: number) => (
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
    )
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {continents}
      <div style={{ width: '100%', marginTop: '50px' }}>
        <Switch>
          <Route path={`${path}/:code`}>
            <Continent />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Continents;
