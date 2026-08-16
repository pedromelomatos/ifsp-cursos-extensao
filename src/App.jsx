import { useMemo, useState } from 'react';
import { courses } from './data/courses.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Courses from './pages/Courses.jsx';
import CourseDetails from './pages/CourseDetails.jsx';

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    campus: 'Todos os campi',
    modality: 'Todas',
    status: 'Todos',
  });

  const selectedCourse = courses.find((course) => course.id === selectedCourseId);

  const filteredCourses = useMemo(() => {
    const query = normalizeText(filters.search.trim());

    return courses.filter((course) => {
      const matchesSearch =
        !query ||
        normalizeText(course.name).includes(query) ||
        normalizeText(course.summary).includes(query);
      const matchesCampus =
        filters.campus === 'Todos os campi' || course.campus === filters.campus;
      const matchesModality =
        filters.modality === 'Todas' || course.modality === filters.modality;
      const matchesStatus =
        filters.status === 'Todos' || course.statusLabel === filters.status;

      return matchesSearch && matchesCampus && matchesModality && matchesStatus;
    });
  }, [filters]);

  function handleCourseSelect(courseId) {
    setSelectedCourseId(courseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBackToList() {
    setSelectedCourseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="main-layout">
        {selectedCourse ? (
          <CourseDetails course={selectedCourse} onBack={handleBackToList} />
        ) : (
          <Courses
            courses={filteredCourses}
            filters={filters}
            onFiltersChange={setFilters}
            onCourseSelect={handleCourseSelect}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
