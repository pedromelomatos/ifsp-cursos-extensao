import Breadcrumb from '../components/Breadcrumb.jsx';
import CourseFilters from '../components/CourseFilters.jsx';
import CourseList from '../components/CourseList.jsx';

export default function Courses({ courses, filters, onFiltersChange, onCourseSelect }) {
  return (
    <div id="conteudo" className="content-frame">
      <Breadcrumb items={['Início', 'Extensão', 'Cursos de Extensão']} />

      <section className="page-heading">
        <p className="section-label">Cursos de Extensão</p>
        <h1>Cursos de Extensão</h1>
        <p>
          Encontre cursos de extensão oferecidos pelo Instituto Federal de São Paulo.
          Consulte as oportunidades disponíveis, informações sobre cada curso e
          períodos de inscrição.
        </p>
      </section>

      <CourseFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
        resultCount={courses.length}
      />
      <CourseList courses={courses} onCourseSelect={onCourseSelect} />
    </div>
  );
}
