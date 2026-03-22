import { useState } from "react";
import { Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface ProfessionsPageProps {
  setPage: (p: Page) => void;
}

const professions = [
  {
    title: "Программист",
    type: "I",
    typeLabel: "Исследовательский",
    desc: "Создаёт программное обеспечение, приложения и сайты. Решает сложные технические задачи с помощью кода.",
    skills: ["Логическое мышление", "Математика", "Внимательность"],
    salary: "от 80 000 ₽",
    demand: "Высокий",
  },
  {
    title: "Дизайнер",
    type: "A",
    typeLabel: "Артистический",
    desc: "Создаёт визуальные решения для продуктов и коммуникаций. Объединяет эстетику и функциональность.",
    skills: ["Творческое мышление", "Визуальный вкус", "Эмпатия"],
    salary: "от 60 000 ₽",
    demand: "Высокий",
  },
  {
    title: "Психолог",
    type: "S",
    typeLabel: "Социальный",
    desc: "Помогает людям справляться с психологическими трудностями, развиваться и улучшать качество жизни.",
    skills: ["Эмпатия", "Коммуникация", "Аналитика поведения"],
    salary: "от 50 000 ₽",
    demand: "Средний",
  },
  {
    title: "Инженер",
    type: "R",
    typeLabel: "Реалистичный",
    desc: "Проектирует и создаёт технические системы, конструкции и оборудование для различных отраслей.",
    skills: ["Техническое мышление", "Точность", "Пространственное мышление"],
    salary: "от 70 000 ₽",
    demand: "Высокий",
  },
  {
    title: "Маркетолог",
    type: "E",
    typeLabel: "Предпринимательский",
    desc: "Разрабатывает стратегии продвижения продуктов и брендов, изучает рынок и поведение потребителей.",
    skills: ["Убедительность", "Аналитика", "Творчество"],
    salary: "от 65 000 ₽",
    demand: "Высокий",
  },
  {
    title: "Бухгалтер",
    type: "C",
    typeLabel: "Конвенциональный",
    desc: "Ведёт финансовый учёт организации, составляет отчётность и следит за соблюдением налоговых норм.",
    skills: ["Точность", "Усидчивость", "Знание законодательства"],
    salary: "от 55 000 ₽",
    demand: "Стабильный",
  },
  {
    title: "Учитель",
    type: "S",
    typeLabel: "Социальный",
    desc: "Передаёт знания и формирует навыки у учеников. Помогает молодым людям раскрыть их потенциал.",
    skills: ["Педагогический дар", "Терпение", "Организованность"],
    salary: "от 45 000 ₽",
    demand: "Стабильный",
  },
  {
    title: "Аналитик данных",
    type: "I",
    typeLabel: "Исследовательский",
    desc: "Изучает данные, строит модели и помогает бизнесу принимать решения на основе фактов.",
    skills: ["Статистика", "SQL", "Критическое мышление"],
    salary: "от 90 000 ₽",
    demand: "Очень высокий",
  },
  {
    title: "Предприниматель",
    type: "E",
    typeLabel: "Предпринимательский",
    desc: "Создаёт и развивает собственный бизнес. Видит возможности, берёт на себя риски и формирует команды.",
    skills: ["Лидерство", "Стратегия", "Устойчивость к неопределённости"],
    salary: "Неограниченно",
    demand: "Зависит от ниши",
  },
  {
    title: "Архитектор",
    type: "A",
    typeLabel: "Артистический",
    desc: "Проектирует здания и пространства, объединяя эстетику, функциональность и технические требования.",
    skills: ["Визуальное мышление", "Техническое проектирование", "Внимание к деталям"],
    salary: "от 75 000 ₽",
    demand: "Средний",
  },
  {
    title: "HR-менеджер",
    type: "S",
    typeLabel: "Социальный",
    desc: "Управляет персоналом компании: подбор, адаптация, обучение и создание корпоративной культуры.",
    skills: ["Коммуникация", "Эмпатия", "Организация"],
    salary: "от 60 000 ₽",
    demand: "Высокий",
  },
  {
    title: "Финансист",
    type: "C",
    typeLabel: "Конвенциональный",
    desc: "Управляет финансовыми потоками компании, оценивает риски и разрабатывает стратегии инвестирования.",
    skills: ["Аналитика", "Внимательность", "Стратегическое мышление"],
    salary: "от 85 000 ₽",
    demand: "Высокий",
  },
];

const typeColors: Record<string, string> = {
  R: "#6B7280",
  I: "#3B82F6",
  A: "#EC4899",
  S: "#10B981",
  E: "#F59E0B",
  C: "#8B5CF6",
};

const filters = ["Все", "Реалистичный", "Исследовательский", "Артистический", "Социальный", "Предпринимательский", "Конвенциональный"];

export default function ProfessionsPage({ setPage }: ProfessionsPageProps) {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все"
    ? professions
    : professions.filter((p) => p.typeLabel === active);

  return (
    <main className="min-h-screen pt-16 px-6 pb-24">
      <div className="max-w-5xl mx-auto pt-12">

        {/* Header */}
        <div className="mb-10">
          <span
            className="inline-block text-xs uppercase tracking-widest mb-5 px-4 py-2 rounded-full"
            style={{ background: "var(--color-tag-bg)", color: "var(--color-accent)" }}
          >
            Каталог
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: "var(--color-text)" }}>
            Профессиональные среды
          </h1>
          <p className="text-base" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            Изучите профессиональные среды по типу личности. Пройдите тест, чтобы найти свою.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background: active === f ? "var(--color-text)" : "var(--color-card)",
                color: active === f ? "var(--color-bg)" : "var(--color-muted)",
                border: `1px solid ${active === f ? "var(--color-text)" : "var(--color-line)"}`,
                fontFamily: "var(--font-body)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl p-6 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02] cursor-default"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-line)",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                    {p.title}
                  </h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${typeColors[p.type]}18`,
                      color: typeColors[p.type],
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {p.typeLabel}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "var(--color-line)", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid var(--color-line)" }}>
                <div>
                  <p className="text-xs" style={{ color: "var(--color-subtle)" }}>Зарплата</p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                    {p.salary}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs" style={{ color: "var(--color-subtle)" }}>Спрос</p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                    {p.demand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-base" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            Не знаете, какой тип вам подходит?
          </p>
          <button
            onClick={() => setPage("test")}
            className="px-8 py-4 rounded-2xl font-medium text-base transition-all hover:scale-[1.02]"
            style={{
              background: "var(--color-text)",
              color: "var(--color-bg)",
              fontFamily: "var(--font-body)",
            }}
          >
            <Icon name="Zap" size={16} className="inline mr-2" />
            Пройти диагностику
          </button>
        </div>
      </div>
    </main>
  );
}