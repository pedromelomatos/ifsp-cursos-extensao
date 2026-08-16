import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function CourseDetails({ course, onBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOpen = course.status === 'open';

  return (
    <div id="conteudo" className="content-frame">
      <Breadcrumb items={['Início', 'Extensão', 'Cursos de Extensão', course.name]} />

      <button className="back-button" type="button" onClick={onBack}>
        Voltar para cursos
      </button>

      <article className="course-details">
        <header className="details-header">
          <div>
            <p className="section-label">Detalhes do curso</p>
            <h1>{course.name}</h1>
          </div>
          <StatusBadge status={course.status} label={course.statusLabel} />
        </header>

        <div className="details-layout">
          <div className="details-main">
            <section>
              <h2>Descrição</h2>
              <p>{course.description}</p>
            </section>
            <section>
              <h2>Objetivo</h2>
              <p>{course.objective}</p>
            </section>
            <section>
              <h2>Público-alvo</h2>
              <p>{course.audience}</p>
            </section>
            <section>
              <h2>Requisitos</h2>
              <ul className="simple-list">
                {course.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Documentos necessários</h2>
              <ul className="simple-list">
                {course.documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="details-aside" aria-label="Informações principais do curso">
            <dl className="details-facts">
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
                <dt>Vagas</dt>
                <dd>{course.vacancies}</dd>
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
                <dt>Dias e horários</dt>
                <dd>{course.schedule}</dd>
              </div>
              <div>
                <dt>Responsável</dt>
                <dd>{course.coordinator}</dd>
              </div>
              <div>
                <dt>Contato</dt>
                <dd>{course.contact}</dd>
              </div>
            </dl>

            <div className="enrollment-box">
              <strong>{course.statusLabel}</strong>
              {isOpen ? (
                <button className="button button--primary" type="button" onClick={() => setIsModalOpen(true)}>
                  Inscrever-se
                </button>
              ) : (
                <button className="button button--disabled" type="button" disabled>
                  {course.statusLabel}
                </button>
              )}
            </div>
          </aside>
        </div>
      </article>

      {isModalOpen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="modal-title">Demonstração de inscrição</h2>
            <p>
              Esta é uma demonstração do processo de inscrição. Nenhuma informação
              será enviada neste protótipo.
            </p>
            <button className="button button--primary" type="button" onClick={() => setIsModalOpen(false)}>
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
