import React, { useState } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import Table from '../components/Table/Table';

export default function Home() {
  const [search, setSearch] = useState('');
  return (
    <main>
      <h1>Star Wars Project</h1>
      <SearchInput setSearch={ setSearch } />
      <Table search={ search } />
    </main>
  );
}
