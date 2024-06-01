import React from 'react';

export async function getStaticProps() {
  // Simulate fetching data
  const movies = [
    {
      page: 1,
      results: { original_title: 'Movie Title 1' },
      release_date: '2023-01-01',
    },
    {
      page: 2,
      results: { original_title: 'Movie Title 2' },
      release_date: '2023-02-01',
    },
  ];

  console.log('Fetched movies:', movies);

  return {
    props: {
      movies,
    },
  };
}

function TestPage({ movies }) {
  console.log('Movies in component:', movies);

  return (
    <div>
      <h1>Test Page</h1>
      {movies.map((movie) => (
        <div key={movie.page}>
          <h2>{movie.results.original_title}</h2>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default TestPage;
