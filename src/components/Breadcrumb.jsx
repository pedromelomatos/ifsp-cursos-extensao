export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Você está aqui">
      <ol>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ol>
    </nav>
  );
}
