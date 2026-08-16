export default function SearchBar({ value, onChange }) {
  return (
    <div className="field field--search">
      <label htmlFor="course-search">Buscar curso por nome</label>
      <input
        id="course-search"
        type="search"
        value={value}
        placeholder="Buscar curso por nome"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
