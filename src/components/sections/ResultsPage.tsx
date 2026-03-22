import { TestResult, Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface ResultsPageProps {
  result: TestResult | null;
  setPage: (p: Page) => void;
}

const interpretations: Record<string, {
  emoji: string;
  description: string;
  strengths: string[];
  challenges: string[];
  professions: string[];
  recommendations: string[];
}> = {
  R: {
    emoji: "🔧",
    description: "Вы — человек дела. Предпочитаете конкретные, осязаемые результаты абстрактным идеям. Вам комфортно работать с техникой, инструментами и физическими объектами. Вы надёжны, практичны и ценете стабильность.",
    strengths: ["Техническое мышление", "Практическая сметка", "Надёжность", "Внимание к качеству"],
    challenges: ["Рутинное общение с людьми", "Абстрактное планирование", "Бумажная работа"],
    professions: ["Инженер", "Архитектор", "Строитель", "Механик", "Пилот", "Геолог", "Агроном"],
    recommendations: [
      "Рассмотрите технические специальности: инженер-конструктор, механик, строитель",
      "Ищите работу, где виден конкретный результат ваших усилий",
      "Развивайте технические навыки через практику и курсы",
      "Рабочая среда должна быть активной, а не офисной",
    ],
  },
  I: {
    emoji: "🔬",
    description: "Вы — аналитик и исследователь. Вас захватывают сложные вопросы, данные и эксперименты. Вы любите глубоко разбираться в теме и находить нестандартные решения через логику и знания.",
    strengths: ["Аналитическое мышление", "Любопытство", "Самостоятельность", "Системный подход"],
    challenges: ["Социальная коммуникация", "Продажи и убеждение", "Рутинные задачи"],
    professions: ["Учёный", "Программист", "Аналитик данных", "Врач", "Экономист", "Психолог-исследователь"],
    recommendations: [
      "Ваш путь — наука, IT, аналитика или медицина",
      "Ищите среду, где ценится глубина знаний, а не скорость",
      "Развивайте навыки презентации своих идей — это усилит влияние",
      "Найдите ментора в интересной вам сфере",
    ],
  },
  A: {
    emoji: "🎨",
    description: "Вы — творец. Вам важно самовыражение, оригинальность и красота. Шаблоны и правила — не для вас. Вы видите мир через призму эмоций и образов, и лучше всего работаете, когда есть свобода творчества.",
    strengths: ["Креативность", "Эмоциональный интеллект", "Оригинальность", "Визуальное мышление"],
    challenges: ["Структура и дедлайны", "Рутинные задачи", "Коммерческое мышление"],
    professions: ["Дизайнер", "Художник", "Писатель", "Режиссёр", "Музыкант", "Архитектор", "UX-исследователь"],
    recommendations: [
      "Ищите работу, где ценится уникальность, а не соответствие стандарту",
      "Портфолио важнее диплома — создавайте и показывайте свои работы",
      "Развивайте базу в дизайне, копирайтинге или медиа",
      "Фриланс или творческие студии — ваша среда",
    ],
  },
  S: {
    emoji: "🤝",
    description: "Вы — человек для людей. Вы чувствуете себя в своей стихии, когда помогаете, обучаете или поддерживаете других. Вас мотивирует развитие окружающих и возможность делать жизнь лучше.",
    strengths: ["Эмпатия", "Коммуникабельность", "Умение слушать", "Педагогический дар"],
    challenges: ["Конкуренция и жёсткость", "Работа в одиночку", "Технические задачи"],
    professions: ["Учитель", "Психолог", "HR-менеджер", "Социальный работник", "Тренер", "Врач", "Консультант"],
    recommendations: [
      "Ваш путь — образование, здравоохранение, психология или HR",
      "Ищите команды с тёплой культурой и общей миссией",
      "Развивайте навыки коучинга или фасилитации",
      "Волонтёрство поможет понять, в какой сфере помощи вы наиболее эффективны",
    ],
  },
  E: {
    emoji: "🚀",
    description: "Вы — лидер и предприниматель. Вас привлекает влияние, результат и возможность вести за собой. Вы умеете убеждать, видите возможности и не боитесь рисковать. Статус и достижения важны для вас.",
    strengths: ["Лидерство", "Убедительность", "Стратегическое мышление", "Инициативность"],
    challenges: ["Детальная аналитика", "Монотонная работа", "Зависимость от других решений"],
    professions: ["Предприниматель", "Менеджер", "Юрист", "Продюсер", "Маркетолог", "Политик", "Брокер"],
    recommendations: [
      "Ваш путь — управление, предпринимательство, продажи или юриспруденция",
      "Берите на себя лидерские роли даже в небольших проектах",
      "Развивайте навыки переговоров и публичных выступлений",
      "Найдите наставника-предпринимателя или присоединитесь к бизнес-сообществу",
    ],
  },
  C: {
    emoji: "📊",
    description: "Вы — систематизатор. Вам нравится порядок, точность и предсказуемость. Вы отличный исполнитель с высоким вниманием к деталям. Структурированная среда с чёткими правилами — ваша стихия.",
    strengths: ["Точность", "Надёжность", "Организованность", "Аналитика данных"],
    challenges: ["Творческая неопределённость", "Лидерство", "Гибкость в хаосе"],
    professions: ["Бухгалтер", "Финансист", "Аудитор", "Делопроизводитель", "Актуарий", "Системный администратор"],
    recommendations: [
      "Ваш путь — финансы, бухгалтерия, право, IT-администрирование",
      "Ищите компании с выстроенными процессами и стабильностью",
      "Развивайте навыки в Excel, 1С, SQL — это ваши инструменты силы",
      "Сертификации и дипломы — важный сигнал вашего профессионализма",
    ],
  },
};

export default function ResultsPage({ result, setPage }: ResultsPageProps) {
  if (!result) {
    return (
      <main className="min-h-screen pt-16 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-2xl mb-4">📋</p>
          <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--color-text)" }}>
            Результатов пока нет
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            Пройдите тест, чтобы увидеть свой профиль и рекомендации
          </p>
          <button
            onClick={() => setPage("test")}
            className="px-6 py-3 rounded-2xl font-medium text-sm"
            style={{ background: "var(--color-text)", color: "var(--color-bg)", fontFamily: "var(--font-body)" }}
          >
            Пройти тест
          </button>
        </div>
      </main>
    );
  }

  const info = interpretations[result.type];
  const sortedScores = Object.entries(result.scores).sort((a, b) => b[1] - a[1]);
  const maxScore = 30;

  const typeNames: Record<string, string> = {
    R: "Реалистичный",
    I: "Исследовательский",
    A: "Артистический",
    S: "Социальный",
    E: "Предпринимательский",
    C: "Конвенциональный",
  };

  return (
    <main className="min-h-screen pt-16 px-6 pb-24">
      <div className="max-w-3xl mx-auto pt-12">

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-block text-xs uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
            style={{ background: "var(--color-tag-bg)", color: "var(--color-accent)" }}
          >
            Ваш профиль
          </span>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{info.emoji}</span>
            <div>
              <h1 className="font-display text-4xl font-semibold" style={{ color: "var(--color-text)" }}>
                {result.label} тип
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                Холланд тип · {result.type}
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            {info.description}
          </p>
        </div>

        {/* Scores */}
        <div
          className="rounded-3xl p-8 mb-8"
          style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
        >
          <h2 className="font-display text-lg font-semibold mb-6" style={{ color: "var(--color-text)" }}>
            Распределение по типам
          </h2>
          <div className="flex flex-col gap-4">
            {sortedScores.map(([type, score]) => (
              <div key={type}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                    {typeNames[type]}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--color-muted)" }}>
                    {score}/{maxScore}
                  </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-line)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(score / maxScore) * 100}%`,
                      background: type === result.type ? "var(--color-accent)" : "var(--color-text)",
                      opacity: type === result.type ? 1 : 0.3,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-3xl p-8"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
          >
            <h2 className="font-display text-lg font-semibold mb-5" style={{ color: "var(--color-text)" }}>
              Сильные стороны
            </h2>
            <ul className="flex flex-col gap-3">
              {info.strengths.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl p-8"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
          >
            <h2 className="font-display text-lg font-semibold mb-5" style={{ color: "var(--color-text)" }}>
              Зоны роста
            </h2>
            <ul className="flex flex-col gap-3">
              {info.challenges.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-line)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professions */}
        <div
          className="rounded-3xl p-8 mb-8"
          style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
        >
          <h2 className="font-display text-lg font-semibold mb-5" style={{ color: "var(--color-text)" }}>
            Подходящие профессии
          </h2>
          <div className="flex flex-wrap gap-2">
            {info.professions.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: "var(--color-tag-bg)",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div
          className="rounded-3xl p-8 mb-10"
          style={{ background: "var(--color-text)" }}
        >
          <h2 className="font-display text-lg font-semibold mb-6" style={{ color: "var(--color-bg)" }}>
            Рекомендации
          </h2>
          <ul className="flex flex-col gap-4">
            {info.recommendations.map((r, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(252,251,249,0.15)", color: "var(--color-bg)" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(252,251,249,0.75)", fontFamily: "var(--font-body)" }}>
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setPage("professions")}
            className="flex-1 px-6 py-4 rounded-2xl font-medium text-sm transition-all hover:scale-[1.02]"
            style={{
              background: "var(--color-card)",
              color: "var(--color-text)",
              border: "1px solid var(--color-line)",
              fontFamily: "var(--font-body)",
            }}
          >
            <Icon name="Briefcase" size={16} className="inline mr-2" />
            Все профессии
          </button>
          <button
            onClick={() => setPage("test")}
            className="flex-1 px-6 py-4 rounded-2xl font-medium text-sm transition-all hover:scale-[1.02]"
            style={{
              background: "var(--color-card)",
              color: "var(--color-text)",
              border: "1px solid var(--color-line)",
              fontFamily: "var(--font-body)",
            }}
          >
            <Icon name="RefreshCw" size={16} className="inline mr-2" />
            Пройти снова
          </button>
        </div>
      </div>
    </main>
  );
}
