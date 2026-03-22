import { TestResult, Page } from "@/pages/Index";

interface ResultsPageProps {
  result: TestResult | null;
  setPage: (p: Page) => void;
}

interface ProfInfo {
  emoji: string;
  environment: string;
  envName: string;
  envDescription: string;
  mainSubjects: string[];
  extracurricular: string[];
  recommended: string[];
}

const PROF_INFO: Record<string, ProfInfo> = {
  biology: {
    emoji: "🌿",
    environment: "Здоровая",
    envName: "Биотехнологии",
    envDescription: "Забота о здоровье человека, борьба с болезнями и увеличение продолжительности жизни – это основа любого современного общества (или общества будущего). В это направление входит все, что связано с нашим здоровьем, его охраной и заботой о нем.",
    mainSubjects: ["Биология", "Физика", "Технология"],
    extracurricular: ["Фармакология", "Основа медицинских знаний"],
    recommended: ["Биотехнологии"],
  },
  geography: {
    emoji: "🌍",
    environment: "Комфортная",
    envName: "Благоустройство",
    envDescription: "Человеку необходимо, чтобы пространство вокруг него было комфортным – чтобы близко была вся необходимая инфраструктура, чтобы были удобные и надежные дома, чтобы в них было светло и тепло, чтобы можно было легко добраться из точки А в точку B, чтобы у нас на столе всегда была свежая и вкусная еда, да и, в конце концов, чтобы было красиво вокруг! Кто сделает так, чтобы наша жизнь была удобной и приятной?",
    mainSubjects: ["География", "Биология"],
    extracurricular: ["Ландшафтный дизайн"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  geology: {
    emoji: "🪨",
    environment: "Индустриальная",
    envName: "Добыча и переработка",
    envDescription: "Для обеспечения жизнедеятельности обществу необходимы ресурсы и промышленность. Для того чтобы строить дома и дороги, обеспечивать их теплом и электричеством, производить технику, автомобили, мебель, электроприборы и вообще все, что нас окружает, – нужны ресурсы и полезные ископаемые, а также заводы и промышленные предприятия, которые будут из сырья получать необходимые человеку вещи.",
    mainSubjects: ["География", "Физика"],
    extracurricular: ["Нефтегазовое дело"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  medicine: {
    emoji: "🩺",
    environment: "Здоровая",
    envName: "Медицина",
    envDescription: "Забота о здоровье человека, борьба с болезнями и увеличение продолжительности жизни – это основа любого современного общества (или общества будущего). В это направление входит все, что связано с нашим здоровьем, его охраной и заботой о нем.",
    mainSubjects: ["Химия", "Биология"],
    extracurricular: ["Анатомия", "Основа медицинских знаний", "Микробиология и вирусология"],
    recommended: ["Патологическая анатомия"],
  },
  light_industry: {
    emoji: "🧵",
    environment: "Индустриальная",
    envName: "Лёгкая промышленность",
    envDescription: "Для обеспечения жизнедеятельности обществу необходимы ресурсы и промышленность. Для того чтобы строить дома и дороги, обеспечивать их теплом и электричеством, производить технику, автомобили, мебель, электроприборы и вообще все, что нас окружает, – нужны ресурсы и полезные ископаемые, а также заводы и промышленные предприятия, которые будут из сырья получать необходимые человеку вещи.",
    mainSubjects: ["Технология", "География"],
    extracurricular: ["Швейное дело"],
    recommended: ["ИЗО", "Основы дизайна"],
  },
  physics: {
    emoji: "⚛️",
    environment: "Умная",
    envName: "Фундаментальные науки",
    envDescription: "Высокий уровень образования не просто так считается признаком развитого общества, а ученые, исследователи и научные сотрудники – его бесценными «мозгами». Технологии, которые есть у нас сегодня, лекарства и уровень медицины, все наши знания о планете – это все результат работы многих поколений ученых, их исследований и экспериментов.",
    mainSubjects: ["Физика", "Математика"],
    extracurricular: ["Основы научных исследований"],
    recommended: ["Клуб интеллектуальных игр"],
  },
  chemistry: {
    emoji: "🧪",
    environment: "Здоровая",
    envName: "Фармация",
    envDescription: "Забота о здоровье человека, борьба с болезнями и увеличение продолжительности жизни – это основа любого современного общества (или общества будущего). В это направление входит все, что связано с нашим здоровьем, его охраной и заботой о нем.",
    mainSubjects: ["Химия", "Биология"],
    extracurricular: ["Фармакология", "Основа медицинских знаний"],
    recommended: ["Биохимия"],
  },
  engineering: {
    emoji: "⚙️",
    environment: "Умная",
    envName: "ИИ и робототехника",
    envDescription: "Высокий уровень образования не просто так считается признаком развитого общества, а ученые, исследователи и научные сотрудники – его бесценными «мозгами». Технологии, которые есть у нас сегодня, лекарства и уровень медицины, все наши знания о планете – это все результат работы многих поколений ученых, их исследований и экспериментов.",
    mainSubjects: ["Математика", "Информатика", "Технология"],
    extracurricular: ["Робототехника"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  electronics: {
    emoji: "🔌",
    environment: "Умная",
    envName: "Телекоммуникации",
    envDescription: "Высокий уровень образования не просто так считается признаком развитого общества, а ученые, исследователи и научные сотрудники – его бесценными «мозгами». Технологии, которые есть у нас сегодня, лекарства и уровень медицины, все наши знания о планете – это все результат работы многих поколений ученых, их исследований и экспериментов.",
    mainSubjects: ["Физика", "Математика"],
    extracurricular: ["Радиотехника"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  metalwork: {
    emoji: "🔩",
    environment: "Индустриальная",
    envName: "Тяжёлая промышленность",
    envDescription: "Для обеспечения жизнедеятельности обществу необходимы ресурсы и промышленность. Для того чтобы строить дома и дороги, обеспечивать их теплом и электричеством, производить технику, автомобили, мебель, электроприборы и вообще все, что нас окружает, – нужны ресурсы и полезные ископаемые, а также заводы и промышленные предприятия, которые будут из сырья получать необходимые человеку вещи.",
    mainSubjects: ["География", "Технология", "Физика"],
    extracurricular: ["Металлургия", "Электроэнергетика"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  design: {
    emoji: "🎨",
    environment: "Креативная",
    envName: "Дизайн",
    envDescription: "Каждый человек уникален, у каждой страны и народа есть своя история и своя культура. Сохранение и развитие этой культуры, возможность самовыражения и духовного развития, возможность просто делать нашу жизнь ярче и веселее – ключевые моменты для любого общества.",
    mainSubjects: ["Русский язык", "Литература", "ИЗО"],
    extracurricular: ["Основы дизайна"],
    recommended: ["Инженерная графика"],
  },
  construction: {
    emoji: "🏗️",
    environment: "Комфортная",
    envName: "Строительство",
    envDescription: "Человеку необходимо, чтобы пространство вокруг него было комфортным – чтобы близко была вся необходимая инфраструктура, чтобы были удобные и надежные дома, чтобы в них было светло и тепло, чтобы можно было легко добраться из точки А в точку B, чтобы у нас на столе всегда была свежая и вкусная еда, да и, в конце концов, чтобы было красиво вокруг!",
    mainSubjects: ["География", "Физика", "Технология"],
    extracurricular: ["Основы строительства", "Строительные материалы"],
    recommended: ["Архитектура", "Инженерная графика"],
  },
  transport: {
    emoji: "🚗",
    environment: "Комфортная",
    envName: "Транспортная инфраструктура",
    envDescription: "Человеку необходимо, чтобы пространство вокруг него было комфортным – чтобы близко была вся необходимая инфраструктура, чтобы были удобные и надежные дома, чтобы в них было светло и тепло, чтобы можно было легко добраться из точки А в точку B, чтобы у нас на столе всегда была свежая и вкусная еда.",
    mainSubjects: ["География", "Математика", "Технология"],
    extracurricular: ["Логистика"],
    recommended: ["Инженерная графика"],
  },
  it: {
    emoji: "💻",
    environment: "Безопасная",
    envName: "Кибербезопасность",
    envDescription: "Безопасность – одна из базовых потребностей человека, наравне со здоровьем и комфортом. XXI век принес человеку не только достижения научно-технического прогресса, но и новые проблемы – изменение климата, экологические катастрофы, киберпреступники. Кто защитит от всего этого?",
    mainSubjects: ["Информатика", "Математика"],
    extracurricular: ["Кибербезопасность в сети интернет"],
    recommended: ["Криптография"],
  },
  military: {
    emoji: "🎖️",
    environment: "Безопасная",
    envName: "Вооружённые силы",
    envDescription: "Безопасность – одна из базовых потребностей человека, наравне со здоровьем и комфортом. Что может нанести вред человеку? Стихийные бедствия, техногенные катастрофы, аварии, социально-политические конфликты. Кто защитит от всего этого?",
    mainSubjects: ["ОБЗР", "Физическая культура"],
    extracurricular: ["НВП", "БПЛА"],
    recommended: ["3D моделирование", "Баскетбол"],
  },
  history: {
    emoji: "📜",
    environment: "Социальная",
    envName: "Туризм",
    envDescription: "Человеку испокон веков свойственно собираться в группы, формировать сообщества, города, страны. И, как бы не разрасталось общество, все равно именно межличностное общение остается основой любого социума. Люди помогают друг другу, предлагают друг другу разные услуги.",
    mainSubjects: ["Русский язык", "Иностранный язык", "География"],
    extracurricular: ["Краеведение"],
    recommended: ["Основы делового общения"],
  },
  literature: {
    emoji: "📖",
    environment: "Креативная",
    envName: "Искусство — литература",
    envDescription: "Каждый человек уникален, у каждой страны и народа есть своя история и своя культура. Сохранение и развитие этой культуры, возможность самовыражения и духовного развития, возможность просто делать нашу жизнь ярче и веселее – ключевые моменты для любого общества.",
    mainSubjects: ["Русский язык", "Литература", "История"],
    extracurricular: ["Словесное действие", "Анализ литературного произведения"],
    recommended: ["MEDIA-журнал", "Основы написания текстов"],
  },
  journalism: {
    emoji: "📰",
    environment: "Креативная",
    envName: "Медиа",
    envDescription: "Каждый человек уникален, у каждой страны и народа есть своя история и своя культура. Сохранение и развитие этой культуры, возможность самовыражения и духовного развития – ключевые моменты для любого общества. В эту сферу входит: творчество, кино, литература, музеи, музыка, дизайн, медиа и мультимедиа.",
    mainSubjects: ["Русский язык", "Литература", "Обществознание"],
    extracurricular: ["Пресс-центр"],
    recommended: ["MEDIA-журнал", "Основы написания текстов"],
  },
  social: {
    emoji: "🤝",
    environment: "Социальная",
    envName: "Социальная сфера",
    envDescription: "Человеку испокон веков свойственно собираться в группы, формировать сообщества, города, страны. Люди помогают друг другу, предлагают друг другу разные услуги, стараются удовлетворять потребности и желания друг друга. Создание общественных благ и помощь человеку – основа социальной среды.",
    mainSubjects: ["Русский язык", "Обществознание"],
    extracurricular: ["Социология"],
    recommended: ["Волонтёрство"],
  },
  pedagogy: {
    emoji: "👩‍🏫",
    environment: "Умная",
    envName: "Сфера образования",
    envDescription: "Высокий уровень образования не просто так считается признаком развитого общества, а ученые, исследователи и научные сотрудники – его бесценными «мозгами». Технологии, которые есть у нас сегодня, лекарства и уровень медицины – это все результат работы многих поколений ученых.",
    mainSubjects: ["Русский язык"],
    extracurricular: ["Педагогика", "Психология"],
    recommended: ["Методика преподавания предмета"],
  },
  law: {
    emoji: "⚖️",
    environment: "Деловая",
    envName: "Юриспруденция",
    envDescription: "Экономическое развитие и финансовая жизнь общества также является одним из важнейших факторов в его существовании. Крупные бизнесмены и небольшие стартаперы, банкиры и финансисты – без них невозможно существование финансовой системы общества.",
    mainSubjects: ["Русский язык", "Обществознание"],
    extracurricular: ["Основы Римского права", "История права"],
    recommended: ["Клуб интеллектуальных игр", "Романо-германская правовая семья"],
  },
  service: {
    emoji: "🛎️",
    environment: "Социальная",
    envName: "Сервис и торговля",
    envDescription: "Человеку испокон веков свойственно собираться в группы, формировать сообщества, города, страны. Люди помогают друг другу, предлагают друг другу разные услуги, стараются удовлетворять потребности и желания друг друга.",
    mainSubjects: ["Русский язык", "Иностранные языки"],
    extracurricular: ["Краеведение"],
    recommended: ["Основы делового общения"],
  },
  math: {
    emoji: "📐",
    environment: "Деловая",
    envName: "Финансы",
    envDescription: "Экономическое развитие и финансовая жизнь общества также является одним из важнейших факторов в его существовании. Человек, открывший небольшой продуктовый магазин, или художник, рисующий иллюстрации на заказ, – это все так или иначе предприниматели и часть здоровой экономики.",
    mainSubjects: ["Математика", "Обществознание"],
    extracurricular: ["Управление финансами", "Финансовая грамотность"],
    recommended: ["Клуб интеллектуальных игр"],
  },
  economics: {
    emoji: "📈",
    environment: "Деловая",
    envName: "Экономика",
    envDescription: "Экономическое развитие и финансовая жизнь общества также является одним из важнейших факторов в его существовании. Крупные бизнесмены и небольшие стартаперы, банкиры и финансисты – без них невозможно существование финансовой системы общества.",
    mainSubjects: ["Математика", "Обществознание"],
    extracurricular: ["Экономика", "Основы макроэкономики"],
    recommended: ["Клуб интеллектуальных игр"],
  },
  food: {
    emoji: "🍽️",
    environment: "Индустриальная",
    envName: "Пищевая промышленность",
    envDescription: "Для обеспечения жизнедеятельности обществу необходимы ресурсы и промышленность. В эту сферу входит: металлургия, добыча и переработка полезных ископаемых, тяжелая и легкая промышленность, машиностроение, атомная промышленность, переработка/утилизация мусора.",
    mainSubjects: ["География", "Биология", "Обществознание"],
    extracurricular: ["Основы пищевой промышленности", "Аграрное дело"],
    recommended: ["Растениеводство"],
  },
  fine_arts: {
    emoji: "🖌️",
    environment: "Креативная",
    envName: "Изобразительное искусство",
    envDescription: "Каждый человек уникален, у каждой страны и народа есть своя история и своя культура. Сохранение и развитие этой культуры, возможность самовыражения и духовного развития, возможность просто делать нашу жизнь ярче и веселее – ключевые моменты для любого общества.",
    mainSubjects: ["Русский язык", "Литература", "ИЗО"],
    extracurricular: ["Изобразительное искусство"],
    recommended: ["MEDIA-журнал", "Иллюстрация"],
  },
  performing_arts: {
    emoji: "🎭",
    environment: "Креативная",
    envName: "Артистическое искусство",
    envDescription: "Каждый человек уникален, у каждой страны и народа есть своя история и своя культура. Сохранение и развитие этой культуры, возможность самовыражения и духовного развития, возможность просто делать нашу жизнь ярче и веселее – ключевые моменты для любого общества.",
    mainSubjects: ["Русский язык", "Литература"],
    extracurricular: ["Малая сцена"],
    recommended: ["Ораторское искусство"],
  },
  music: {
    emoji: "🎵",
    environment: "Креативная",
    envName: "Искусство — музыка",
    envDescription: "Каждый человек уникален, у каждой страны и народа есть своя история и своя культура. Сохранение и развитие этой культуры, возможность самовыражения и духовного развития, возможность просто делать нашу жизнь ярче и веселее – ключевые моменты для любого общества.",
    mainSubjects: ["Русский язык", "Литература", "Музыка"],
    extracurricular: ["Основы музыки"],
    recommended: ["Хор"],
  },
  sports: {
    emoji: "🏆",
    environment: "Безопасная",
    envName: "МЧС и пожарные",
    envDescription: "Безопасность – одна из базовых потребностей человека, наравне со здоровьем и комфортом. Что может нанести вред человеку? Стихийные бедствия, техногенные катастрофы, аварии, социально-политические конфликты. Кто защитит от всего этого?",
    mainSubjects: ["ОБЗР", "Физическая культура"],
    extracurricular: ["НВП", "Пожарное дело"],
    recommended: ["Баскетбол"],
  },
};

const ENV_COLORS: Record<string, string> = {
  "Здоровая": "#22c55e",
  "Комфортная": "#3b82f6",
  "Индустриальная": "#f97316",
  "Умная": "#8b5cf6",
  "Безопасная": "#ef4444",
  "Креативная": "#ec4899",
  "Социальная": "#06b6d4",
  "Деловая": "#eab308",
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

  const info = PROF_INFO[result.type] ?? {
    emoji: "🎯",
    environment: "Профессиональная",
    envName: result.label,
    envDescription: "Ваш уникальный профиль сформирован по результатам диагностики.",
    mainSubjects: [],
    extracurricular: [],
    recommended: [],
  };

  const envColor = ENV_COLORS[info.environment] ?? "var(--color-accent)";

  const sortedScores = Object.entries(result.scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const maxScore = 30;

  return (
    <main className="min-h-screen pt-16 px-6 pb-24">
      <div className="max-w-3xl mx-auto pt-12">

        {/* Header */}
        <div className="mb-10">
          <span
            className="inline-block text-xs uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
            style={{ background: "var(--color-tag-bg)", color: "var(--color-accent)" }}
          >
            Ваш результат
          </span>

          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl mt-1">{info.emoji}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: envColor + "22", color: envColor }}
                >
                  Среда: {info.environment}
                </span>
              </div>
              <h1 className="font-display text-3xl font-semibold" style={{ color: "var(--color-text)" }}>
                {info.envName}
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                Ваша профессиональная среда по результатам диагностики
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            {info.envDescription}
          </p>
        </div>

        {/* Recommendations block */}
        <div
          className="rounded-3xl p-8 mb-8"
          style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
        >
          <h2 className="font-display text-lg font-semibold mb-6" style={{ color: "var(--color-text)" }}>
            Рекомендуемые направления обучения
          </h2>

          {info.mainSubjects.length > 0 && (
            <div className="mb-5">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                Основные предметы
              </p>
              <div className="flex flex-wrap gap-2">
                {info.mainSubjects.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-xl font-medium"
                    style={{ background: envColor + "18", color: envColor }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {info.extracurricular.length > 0 && (
            <div className="mb-5">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                Внеурочная деятельность
              </p>
              <div className="flex flex-wrap gap-2">
                {info.extracurricular.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-xl"
                    style={{ background: "var(--color-tag-bg)", color: "var(--color-text)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {info.recommended.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                Рекомендуем вам
              </p>
              <div className="flex flex-wrap gap-2">
                {info.recommended.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-xl font-medium"
                    style={{ background: "var(--color-line)", color: "var(--color-text)" }}
                  >
                    ★ {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Top-10 scores */}
        <div
          className="rounded-3xl p-8 mb-8"
          style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
        >
          <h2 className="font-display text-lg font-semibold mb-6" style={{ color: "var(--color-text)" }}>
            Топ-10 направлений
          </h2>
          <div className="flex flex-col gap-4">
            {sortedScores.map(([key, score], idx) => {
              const pInfo = PROF_INFO[key];
              const pct = (score / maxScore) * 100;
              const label = pInfo ? pInfo.envName : key;
              const color = pInfo ? (ENV_COLORS[pInfo.environment] ?? "var(--color-accent)") : "var(--color-accent)";
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm flex items-center gap-2" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                      <span>{pInfo?.emoji}</span>
                      <span>{idx === 0 ? <strong>{label}</strong> : label}</span>
                      {pInfo && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: color + "18", color }}>
                          {pInfo.environment}
                        </span>
                      )}
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
                        background: idx === 0 ? color : "var(--color-muted)",
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
