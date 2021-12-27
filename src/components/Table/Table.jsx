import React, { useEffect, useState } from 'react';
import { useFilters } from '../../context/context';
import API_REQUEST from '../../services/API_REQUEST';

export default function Table() {
  const [planets, setPlanets] = useState({ results: [] });
  const [filters] = useFilters();
  const { filterByName: { name } } = filters;
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await API_REQUEST();
      setPlanets({ results });
    };

    getPlanets();
  }, []);
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Tarrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      { planets.results
        .filter((planet) => planet.name.toLowerCase().includes(name))
        .map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        )) }
    </table>
  );
}
