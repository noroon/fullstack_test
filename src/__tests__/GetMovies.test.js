import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { LOAD_MOVIES } from '../hooks/movies/queries';
import GetMovies from '../components/GetMovies.js';

const mocks = [
  {
    request: {
      query: LOAD_MOVIES,
      variables: {
        query: 'Darth by Darthwest',
      },
    },
    result: {
      data: {
        searchMovies: {
          id: '533644',
          name: 'Darth by Darthwest',
          overview:
            'Close encounters of the third kind for Cary Grant in "Darth by Darthwest"! When Alfred Hitchcock meets George Lucas...',
          releaseDate: '2016-05-13T00:00:00.000Z',
          __typename: 'Movie',
        },
      },
    },
  },
];

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetMovies query="Darth by Darthwest" />
    </MockedProvider>,
  );
  expect(await screen.findByText('Darth by Darthwest')).toBeInTheDocument();
});
