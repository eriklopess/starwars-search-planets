import React from 'react';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';
import FiltersProvider from '../context/context';

export default function Home() {
  return (
    <main>
      <h1>Star Wars Project</h1>
      <FiltersProvider>
        <Filters />
        <Table />
      </FiltersProvider>
    </main>
  );
}
