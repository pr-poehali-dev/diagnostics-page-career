import { TestResult, Page } from "@/pages/Index";

interface ResultsPageProps {
  result: TestResult | null;
  setPage: (p: Page) => void;
}

const PROF_INFO: Record<string, { emoji: string; description: string }> = {
  biology: { emoji: "🌿", description: "Вам близок живой мир — растения, животные, природные процессы. Это путь учёного-биолога, эколога, агронома или ветеринара." },
  geography: { emoji: "🌍", description: "Вас влечёт изучение земного шара, стран и природных явлений. Географ, картограф, специалист по туризму или геоинформатике." },
  geology: { emoji: "🪨", description: "Вам интересны недра Земли, экспедиции и минералы. Геолог, геофизик, горный инженер или специалист по добыче ресурсов." },
  medicine: { emoji: "🩺", description: "Вам близка забота о здоровье людей. Врач, фармацевт, медсестра, стоматолог или специалист в области общественного здравоохранения." },
  light_industry: { emoji: "🧵", description: "Вам интересно создание одежды, текстиля и товаров повседневного спроса. Технолог лёгкой промышленности, модельер, конструктор одежды." },
  physics: { emoji: "⚛️", description: "Вас захватывают законы природы и физические явления. Физик, инженер-исследователь, специалист в области оптики, ядерной энергетики." },
  chemistry: { emoji: "🧪", description: "Вам нравится мир химических реакций и веществ. Химик, фармацевт, технолог химического производства, аналитик." },
  engineering: { emoji: "⚙️", description: "Техника и механизмы — ваша стихия. Инженер-конструктор, технолог производства, механик, машиностроитель." },
  electronics: { emoji: "🔌", description: "Вы хорошо разбираетесь в схемах и электронике. Электронщик, радиотехник, инженер по автоматизации, специалист по IoT." },
  metalwork: { emoji: "🔩", description: "Вам интересна работа с металлами и машинами. Слесарь, токарь, сварщик, инженер-металлург, конструктор деталей." },
  design: { emoji: "🪵", description: "Вы умеете создавать красивые вещи из материалов. Дизайнер мебели, резчик по дереву, художник-прикладник, декоратор интерьеров." },
  construction: { emoji: "🏗️", description: "Вам по душе создание зданий и сооружений. Строитель, архитектор, прораб, инженер-проектировщик, сметчик." },
  transport: { emoji: "🚗", description: "Вас интересует движение и транспортные системы. Водитель, механик, диспетчер, инженер транспортной инфраструктуры." },
  it: { emoji: "💻", description: "Цифровой мир и программирование — ваша среда. Программист, системный аналитик, DevOps, специалист по кибербезопасности." },
  military: { emoji: "🎖️", description: "Вас привлекают дисциплина, стратегия и защита. Офицер вооружённых сил, военный инженер, специалист по безопасности." },
  history: { emoji: "📜", description: "Вы любите прошлое и исторические процессы. Историк, архивист, преподаватель истории, музейный работник, краевед." },
  literature: { emoji: "📖", description: "Вас захватывает мир слова и образов. Писатель, редактор, литературный критик, сценарист, библиотекарь." },
  journalism: { emoji: "📰", description: "Вам важно говорить и рассказывать о событиях. Журналист, репортёр, пресс-секретарь, медиааналитик, блогер." },
  social: { emoji: "🤝", description: "Вы активны в общественной жизни и умеете организовывать людей. Политик, общественный деятель, PR-менеджер, организатор мероприятий." },
  pedagogy: { emoji: "👩‍🏫", description: "Вы умеете передавать знания и работать с детьми. Учитель, воспитатель, педагог-психолог, тренер, методист." },
  law: { emoji: "⚖️", description: "Вас интересует справедливость и правовые нормы. Юрист, адвокат, прокурор, нотариус, правовой консультант." },
  service: { emoji: "🛎️", description: "Вам нравится помогать людям в повседневных нуждах. Менеджер по сервису, продавец, администратор, специалист по туризму." },
  math: { emoji: "📐", description: "Вас привлекают числа, логика и точные науки. Математик, статистик, актуарий, аналитик данных, преподаватель математики." },
  economics: { emoji: "📈", description: "Вы хорошо понимаете экономические процессы. Экономист, финансист, бухгалтер, инвестиционный аналитик, аудитор." },
  food: { emoji: "🍽️", description: "Кулинария и пищевая промышленность — ваша страсть. Повар, шеф-повар, технолог пищевого производства, кондитер." },
  fine_arts: { emoji: "🎨", description: "Вы видите мир через цвет и форму. Художник, иллюстратор, дизайнер, скульптор, арт-директор." },
  performing_arts: { emoji: "🎭", description: "Вас влечёт сцена и перевоплощение. Актёр, режиссёр, сценарист, хореограф, театральный менеджер." },
  music: { emoji: "🎵", description: "Музыка — часть вашей жизни. Музыкант, композитор, звукорежиссёр, педагог по музыке, дирижёр." },
  sports: { emoji: "🏆", description: "Спорт и физическая активность — ваша среда. Спортсмен, тренер, преподаватель физкультуры, спортивный менеджер." },
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

  const info = PROF_INFO[result.type] ?? { emoji: "🎯", description: "Ваш уникальный профиль сформирован." };

  const sortedScores = Object.entries(result.scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const maxScore = 30;

  return (
    <main className="min-h-screen pt-16 px-6 pb-24">
      <div className="max-w-3xl mx-auto pt-12">

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-block text-xs uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
            style={{ background: "var(--color-tag-bg)", color: "var(--color-accent)" }}
          >
            Ваш результат
          </span>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{info.emoji}</span>
            <div>
              <h1 className="font-display text-4xl font-semibold" style={{ color: "var(--color-text)" }}>
                {result.label}
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                Наиболее подходящая сфера по результатам диагностики
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            {info.description}
          </p>
        </div>

        {/* Top-10 scores */}
        <div
          className="rounded-3xl p-8 mb-8"
          style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
        >
          <h2 className="font-display text-lg font-semibold mb-6" style={{ color: "var(--color-text)" }}>
            Топ-10 подходящих сфер
          </h2>
          <div className="flex flex-col gap-4">
            {sortedScores.map(([key, score], idx) => {
              const pInfo = PROF_INFO[key];
              const pct = (score / maxScore) * 100;
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm flex items-center gap-2" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                      <span>{pInfo?.emoji}</span>
                      <span>{result.scores && Object.keys(result.scores).length > 0
                        ? (idx === 0
                          ? <strong>{key === result.type ? result.label : key}</strong>
                          : (key === result.type ? result.label : key))
                        : key}
                      </span>
                    </span>
                    <span className="text-xs font-medium" style={{ color: "var(--color-muted)" }}>
                      {score}/{maxScore}
                    </span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-line)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        background: idx === 0 ? "var(--color-accent)" : "var(--color-muted)",
                        opacity: idx === 0 ? 1 : 0.45,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setPage("test")}
            className="flex-1 py-4 rounded-2xl font-medium text-sm transition-all hover:scale-[1.01]"
            style={{
              background: "var(--color-card)",
              color: "var(--color-text)",
              border: "1px solid var(--color-line)",
              fontFamily: "var(--font-display)",
            }}
          >
            Пройти тест заново
          </button>
        </div>
      </div>
    </main>
  );
}