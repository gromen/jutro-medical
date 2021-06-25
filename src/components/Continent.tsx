import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_CONTINENT } from '../graphql/Queries';

interface CountryType {
  name: string;
  emoji: {};
  languages: {};
}
interface LanguageType {
  name: string;
}

function Continent() {
  let { code } = useParams<{ code?: string }>();

  const [continent, setContinent] = useState({
    name: '',
    emoji: {},
    countries: [],
  });
  const { loading, error, data } = useQuery(GET_CONTINENT, {
    variables: { code },
  });

  useEffect(() => {
    if (data) {
      setContinent({
        name: data.continent.name,
        emoji: data.continent.emoji,
        countries: data.continent.countries,
      });
    }
    return () => {
      setContinent({ name: '', emoji: {}, countries: [] });
    };
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gap: '30px 15px',
        gridAutoFlow: 'row',
        gridTemplateAreas: `
          ". . ."
          ". . ."
          ". . ."
        `,
      }}
    >
      {continent.countries.map((country: CountryType) => {
        let countryLanguages: LanguageType = country.languages
          // @ts-ignore: Unreachable code error
          .map((language: LanguageType) => language.name)
          .slice(0, 1);

        return (
          <div key={country.name} style={{ border: '1px solid black' }}>
            <div>{country.name}</div>
            <div style={{ marginBottom: '10px', marginTop: '10px' }}>
              {country.emoji}
            </div>
            {countryLanguages}
          </div>
        );
      })}
    </div>
  );
}

export default Continent;
