import CourseCard from './CourseCard.jsx';

export default function CourseList({ courses, onCourseSelect }) {
  if (courses.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <h2>Nenhum curso encontrado</h2>
        <p>Revise a busca ou altere os filtros para visualizar outras oportunidades.</p>
      </section>
    );
  }

  return (
    <section className="course-list" aria-label="Lista de cursos de extensão">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onSelect={onCourseSelect} />
      ))}
    </section>
  );
}
