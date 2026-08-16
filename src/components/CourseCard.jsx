import StatusBadge from './StatusBadge.jsx';

export default function CourseCard({ course, onSelect }) {
  return (
    <article className="course-card">
      <div className="course-card__header">
        <h3>{course.name}</h3>
        <StatusBadge status={course.status} label={course.statusLabel} />
      </div>
      <p>{course.summary}</p>

      <dl className="course-facts">
        <div>
          <dt>Campus</dt>
          <dd>{course.campus}</dd>
        </div>
        <div>
          <dt>Modalidade</dt>
          <dd>{course.modality}</dd>
        </div>
        <div>
          <dt>Carga horária</dt>
          <dd>{course.workload} horas</dd>
        </div>
        <div>
          <dt>Inscrições</dt>
          <dd>{course.registrationPeriod}</dd>
        </div>
        <div>
          <dt>Realização</dt>
          <dd>{course.executionPeriod}</dd>
        </div>
        <div>
          <dt>Vagas</dt>
          <dd>{course.vacancies}</dd>
        </div>
      </dl>

      <button className="button button--secondary" type="button" onClick={() => onSelect(course.id)}>
        Ver detalhes
      </button>
    </article>
  );
}
