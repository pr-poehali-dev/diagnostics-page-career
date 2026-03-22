import { Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  setPage: (p: Page) => void;
}

const features = [
  {
    icon: "Brain",
    title: "Научный подход",
    desc: "Тест основан на модели Голомштока и современных исследованиях профориентации",
  },
  {
    icon: "BarChart2",
    title: "Глубокая аналитика",
    desc: "Подробный анализ склонностей, сильных сторон и зон роста",
  },
  {
    icon: "Compass",
    title: "Конкретные рекомендации",
    desc: "Профессиональная среда, предметы, внеурочная деятельность и следующие шаги под ваш профиль",
  },
];

export default function HomePage({ setPage }: HomePageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-block text-xs uppercase tracking-widest mb-8 px-4 py-2 rounded-full"
            style={{ background: "var(--color-tag-bg)", color: "var(--color-accent)" }}
          >
            Профориентационная диагностика
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.08] tracking-tight mb-8" style={{ color: "var(--color-text)" }}>
            Найди своё<br />
            <span style={{ color: "var(--color-accent)" }}>призвание</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-12" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            15 минут — и вы узнаете, какая профессиональная среда раскроет ваш потенциал.
            Подробная интерпретация и персональные рекомендации.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage("test")}
              className="group px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--color-text)",
                color: "var(--color-bg)",
                fontFamily: "var(--font-body)",
              }}
            >
              Начать тест
              <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => setPage("professions")}
              className="px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "transparent",
                color: "var(--color-text)",
                border: "1px solid var(--color-line)",
                fontFamily: "var(--font-body)",
              }}
            >
              Смотреть среды
            </button>
          </div>


        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: "1px", background: "var(--color-line)" }} />
      </div>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-16 text-center" style={{ color: "var(--color-subtle)" }}>
            Как это работает
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f) => (
              <div key={f.title} className="group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "var(--color-tag-bg)" }}
                >
                  <Icon name={f.icon} size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "var(--color-text)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-12 text-center"
            style={{ background: "var(--color-text)" }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "var(--color-bg)" }}>
              Готовы узнать себя?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(252,251,249,0.6)", fontFamily: "var(--font-body)" }}>
              Пройдите диагностику прямо сейчас — это займёт всего 15 минут
            </p>
            <button
              onClick={() => setPage("test")}
              className="px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                fontFamily: "var(--font-body)",
              }}
            >
              Пройти тест бесплатно
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}