import { Page } from "@/pages/Index";

interface NavProps {
  page: Page;
  setPage: (p: Page) => void;
}

const links: { label: string; key: Page }[] = [
  { label: "Главная", key: "home" },
  { label: "Тест", key: "test" },
  { label: "Результаты", key: "results" },
  { label: "Среды", key: "professions" },
];

export default function Nav({ page, setPage }: NavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(252,251,249,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-line)" }}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="font-display text-lg font-semibold tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          Профориентация Школа №16
        </button>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => setPage(l.key)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "var(--font-body)",
                background: page === l.key ? "var(--color-text)" : "transparent",
                color: page === l.key ? "var(--color-bg)" : "var(--color-muted)",
                fontWeight: page === l.key ? 500 : 400,
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}