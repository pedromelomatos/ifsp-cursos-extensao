import SearchBar from './SearchBar.jsx';
import { campusOptions, modalityOptions, statusOptions } from '../data/courses.js';

export default function CourseFilters({ filters, onFiltersChange, resultCount }) {
  function updateFilter(key, value) {
    onFiltersChange({ ...filters, [key]: value });
  }

  return (
    <section className="filter-panel" aria-labelledby="filter-title">
      <div className="filter-panel__header">
        <h2 id="filter-title">Busca e filtros</h2>
        <span>
          {resultCount} {resultCount === 1 ? 'curso encontrado' : 'cursos encontrados'}
        </span>
      </div>

      <div className="filter-grid">
        <SearchBar value={filters.search} onChange={(value) => updateFilter('search', value)} />

        <label className="field" htmlFor="campus-filter">
          Campus
          <select
            id="campus-filter"
            value={filters.campus}
            onChange={(event) => updateFilter('campus', event.target.value)}
          >
            {campusOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="modality-filter">
          Modalidade
          <select
            id="modality-filter"
            value={filters.modality}
            onChange={(event) => updateFilter('modality', event.target.value)}
          >
            {modalityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="status-filter">
          Situação
          <select
            id="status-filter"
            value={filters.status}
            onChange={(event) => updateFilter('status', event.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
