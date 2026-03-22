import { useState } from "react";
import { Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface ProfessionsPageProps {
  setPage: (p: Page) => void;
}

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

const environments = [
  {
    key: "biology",
    emoji: "🌿",
    name: "Биотехнологии",
    environment: "Здоровая",
    mainSubjects: ["Биология", "Физика", "Технология"],
    extracurricular: ["Фармакология", "Основа медицинских знаний"],
    recommended: ["Биотехнологии"],
  },
  {
    key: "medicine",
    emoji: "🩺",
    name: "Медицина",
    environment: "Здоровая",
    mainSubjects: ["Химия", "Биология"],
    extracurricular: ["Анатомия", "Основа медицинских знаний", "Микробиология и вирусология"],
    recommended: ["Патологическая анатомия"],
  },
  {
    key: "chemistry",
    emoji: "🧪",
    name: "Фармация",
    environment: "Здоровая",
    mainSubjects: ["Химия", "Биология"],
    extracurricular: ["Фармакология", "Основа медицинских знаний"],
    recommended: ["Биохимия"],
  },
  {
    key: "geography",
    emoji: "🌍",
    name: "Благоустройство",
    environment: "Комфортная",
    mainSubjects: ["География", "Биология"],
    extracurricular: ["Ландшафтный дизайн"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  {
    key: "construction",
    emoji: "🏗️",
    name: "Строительство",
    environment: "Комфортная",
    mainSubjects: ["География", "Физика", "Технология"],
    extracurricular: ["Основы строительства", "Строительные материалы"],
    recommended: ["Архитектура", "Инженерная графика"],
  },
  {
    key: "transport",
    emoji: "🚗",
    name: "Транспортная инфраструктура",
    environment: "Комфортная",
    mainSubjects: ["География", "Математика", "Технология"],
    extracurricular: ["Логистика"],
    recommended: ["Инженерная графика"],
  },
  {
    key: "geology",
    emoji: "🪨",
    name: "Добыча и переработка",
    environment: "Индустриальная",
    mainSubjects: ["География", "Физика"],
    extracurricular: ["Нефтегазовое дело"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  {
    key: "light_industry",
    emoji: "🧵",
    name: "Лёгкая промышленность",
    environment: "Индустриальная",
    mainSubjects: ["Технология", "География"],
    extracurricular: ["Швейное дело"],
    recommended: ["ИЗО", "Основы дизайна"],
  },
  {
    key: "metalwork",
    emoji: "🔩",
    name: "Тяжёлая промышленность",
    environment: "Индустриальная",
    mainSubjects: ["География", "Технология", "Физика"],
    extracurricular: ["Металлургия", "Электроэнергетика"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  {
    key: "food",
    emoji: "🍽️",
    name: "Пищевая промышленность",
    environment: "Индустриальная",
    mainSubjects: ["География", "Биология", "Обществознание"],
    extracurricular: ["Основы пищевой промышленности", "Аграрное дело"],
    recommended: ["Растениеводство"],
  },
  {
    key: "physics",
    emoji: "⚛️",
    name: "Фундаментальные науки",
    environment: "Умная",
    mainSubjects: ["Физика", "Математика"],
    extracurricular: ["Основы научных исследований"],
    recommended: ["Клуб интеллектуальных игр"],
  },
  {
    key: "engineering",
    emoji: "⚙️",
    name: "ИИ и робототехника",
    environment: "Умная",
    mainSubjects: ["Математика", "Информатика", "Технология"],
    extracurricular: ["Робототехника"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  {
    key: "electronics",
    emoji: "🔌",
    name: "Телекоммуникации",
    environment: "Умная",
    mainSubjects: ["Физика", "Математика"],
    extracurricular: ["Радиотехника"],
    recommended: ["3D моделирование", "Инженерная графика"],
  },
  {
    key: "pedagogy",
    emoji: "👩‍🏫",
    name: "Сфера образования",
    environment: "Умная",
    mainSubjects: ["Русский язык"],
    extracurricular: ["Педагогика", "Психология"],
    recommended: ["Методика преподавания предмета"],
  },
  {
    key: "it",
    emoji: "💻",
    name: "Кибербезопасность",
    environment: "Безопасная",
    mainSubjects: ["Информатика", "Математика"],
    extracurricular: ["Кибербезопасность в сети интернет"],
    recommended: ["Криптография"],
  },
  {
    key: "military",
    emoji: "🎖️",
    name: "Вооружённые силы",
    environment: "Безопасная",
    mainSubjects: ["ОБЗР", "Физическая культура"],
    extracurricular: ["НВП", "БПЛА"],
    recommended: ["3D моделирование", "Баскетбол"],
  },
  {
    key: "sports",
    emoji: "🏆",
    name: "МЧС и пожарные",
    environment: "Безопасная",
    mainSubjects: ["ОБЗР", "Физическая культура"],
    extracurricular: ["НВП", "Пожарное дело"],
    recommended: ["Баскетбол"],
  },
  {
    key: "design",
    emoji: "🎨",
    name: "Дизайн",
    environment: "Креативная",
    mainSubjects: ["Русский язык", "Литература", "ИЗО"],
    extracurricular: ["Основы дизайна"],
    recommended: ["Инженерная графика"],
  },
  {
    key: "literature",
    emoji: "📖",
    name: "Искусство — литература",
    environment: "Креативная",
    mainSubjects: ["Русский язык", "Литература", "История"],
    extracurricular: ["Словесное действие", "Анализ литературного произведения"],
    recommended: ["MEDIA-журнал", "Основы написания текстов"],
  },
  {
    key: "journalism",
    emoji: "📰",
    name: "Медиа",
    environment: "Креативная",
    mainSubjects: ["Русский язык", "Литература", "Обществознание"],
    extracurricular: ["Пресс-центр"],
    recommended: ["MEDIA-журнал", "Основы написания текстов"],
  },
  {
    key: "fine_arts",
    emoji: "🖌️",
    name: "Изобразительное искусство",
    environment: "Креативная",
    mainSubjects: ["Русский язык", "Литература", "ИЗО"],
    extracurricular: ["Изобразительное искусство"],
    recommended: ["MEDIA-журнал", "Иллюстрация"],
  },
  {
    key: "performing_arts",
    emoji: "🎭",
    name: "Артистическое искусство",
    environment: "Креативная",
    mainSubjects: ["Русский язык", "Литература"],
    extracurricular: ["Малая сцена"],
    recommended: ["Ораторское искусство"],
  },
  {
    key: "music",
    emoji: "🎵",
    name: "Искусство — музыка",
    environment: "Креативная",
    mainSubjects: ["Русский язык", "Литература", "Музыка"],
    extracurricular: ["Основы музыки"],
    recommended: ["Хор"],
  },
  {
    key: "history",
    emoji: "📜",
    name: "Туризм",
    environment: "Социальная",
    mainSubjects: ["Русский язык", "Иностранный язык", "География"],
    extracurricular: ["Краеведение"],
    recommended: ["Основы делового общения"],
  },
  {
    key: "social",
    emoji: "🤝",
    name: "Социальная сфера",
    environment: "Социальная",
    mainSubjects: ["Русский язык", "Обществознание"],
    extracurricular: ["Социология"],
    recommended: ["Волонтёрство"],
  },
  {
    key: "service",
    emoji: "🛎️",
    name: "Сервис и торговля",
    environment: "Социальная",
    mainSubjects: ["Русский язык", "Иностранные языки"],
    extracurricular: ["Краеведение"],
    recommended: ["Основы делового общения"],
  },
  {
    key: "law",
    emoji: "⚖️",
    name: "Юриспруденция",
    environment: "Деловая",
    mainSubjects: ["Русский язык", "Обществознание"],
    extracurricular: ["Основы Римского права", "История права"],
    recommended: ["Клуб интеллектуальных игр", "Романо-германская правовая семья"],
  },
  {
    key: "math",
    emoji: "📐",
    name: "Финансы",
    environment: "Деловая",
    mainSubjects: ["Математика", "Обществознание"],
    extracurricular: ["Управление финансами", "Финансовая грамотность"],
    recommended: ["Клуб интеллектуальных игр"],
  },
  {
    key: "economics",
    emoji: "📈",
    name: "Экономика",
    environment: "Деловая",
    mainSubjects: ["Математика", "Обществознание"],
    extracurricular: ["Экономика", "Основы макроэкономики"],
    recommended: ["Клуб интеллектуальных игр"],
  },
];

const ALL_ENVS = ["Все", "Здоровая", "Комфортная", "Индустриальная", "Умная", "Безопасная", "Креативная", "Социальная", "Деловая"];

export default function ProfessionsPage({ setPage }: ProfessionsPageProps) {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все"
    ? environments
    : environments.filter((e) => e.environment === active);

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
          {ALL_ENVS.map((f) => {
            const color = ENV_COLORS[f];
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  background: isActive ? (color ?? "var(--color-text)") : "var(--color-card)",
                  color: isActive ? "#fff" : "var(--color-muted)",
                  border: `1px solid ${isActive ? (color ?? "var(--color-text)") : "var(--color-line)"}`,
                  fontFamily: "var(--font-body)",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((env) => {
            const color = ENV_COLORS[env.environment] ?? "var(--color-accent)";
            return (
              <div
                key={env.key}
                className="rounded-3xl p-6 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02] cursor-default"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{env.emoji}</span>
                      <h3 className="font-display text-lg font-semibold" style={{ color: "var(--color-text)" }}>
                        {env.name}
                      </h3>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: color + "18", color, fontFamily: "var(--font-body)" }}
                    >
                      {env.environment}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--color-subtle)" }}>
                    Основные предметы
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {env.mainSubjects.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: color + "18", color, fontFamily: "var(--font-body)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--color-subtle)" }}>
                    Внеурочная деятельность
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {env.extracurricular.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "var(--color-tag-bg)", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2" style={{ borderTop: "1px solid var(--color-line)" }}>
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--color-subtle)" }}>
                    Рекомендуем
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {env.recommended.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "var(--color-line)", color: "var(--color-text)", fontFamily: "var(--font-body)" }}
                      >
                        ★ {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-base" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            Не знаете, какая среда вам подходит?
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
