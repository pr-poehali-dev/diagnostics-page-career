import { useState } from "react";
import HomePage from "@/components/sections/HomePage";
import TestPage from "@/components/sections/TestPage";
import ResultsPage from "@/components/sections/ResultsPage";
import ProfessionsPage from "@/components/sections/ProfessionsPage";
import Nav from "@/components/sections/Nav";

export type Page = "home" | "test" | "results" | "professions";

export interface TestResult {
  type: string;
  label: string;
  scores: Record<string, number>;
}

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [result, setResult] = useState<TestResult | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      <Nav page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "test" && (
        <TestPage
          onComplete={(r) => {
            setResult(r);
            setPage("results");
          }}
        />
      )}
      {page === "results" && (
        <ResultsPage result={result} setPage={setPage} />
      )}
      {page === "professions" && <ProfessionsPage setPage={setPage} />}
    </div>
  );
}
