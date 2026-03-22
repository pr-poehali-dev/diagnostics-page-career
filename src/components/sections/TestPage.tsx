import { useState } from "react";
import { TestResult } from "@/pages/Index";

interface TestPageProps {
  onComplete: (result: TestResult) => void;
}

const questions = [
  // Реалистичный (R)
  { id: 1, text: "Мне нравится работать руками — чинить, строить, мастерить.", type: "R" },
  { id: 2, text: "Я предпочитаю практические задачи теоретическим рассуждениям.", type: "R" },
  { id: 3, text: "Работа с техникой или инструментами мне интересна.", type: "R" },
  { id: 4, text: "Мне нравится физический труд на свежем воздухе.", type: "R" },
  { id: 5, text: "Я люблю доводить вещи до конкретного, видимого результата.", type: "R" },
  { id: 6, text: "Сборка, настройка оборудования — это то, что мне нравится.", type: "R" },
  // Исследовательский (I)
  { id: 7, text: "Мне нравится анализировать данные и строить гипотезы.", type: "I" },
  { id: 8, text: "Сложные научные задачи меня увлекают.", type: "I" },
  { id: 9, text: "Я люблю изучать что-то новое самостоятельно.", type: "I" },
  { id: 10, text: "Мне интересны эксперименты и исследования.", type: "I" },
  { id: 11, text: "Я склонен задавать вопросы «почему» и «как это работает».", type: "I" },
  { id: 12, text: "Чтение научных статей или книг приносит мне удовольствие.", type: "I" },
  // Артистический (A)
  { id: 13, text: "Я люблю творческие задачи — дизайн, музыку, письмо.", type: "A" },
  { id: 14, text: "Мне важно выражать себя через искусство или творчество.", type: "A" },
  { id: 15, text: "Нестандартные решения нравятся мне больше шаблонных.", type: "A" },
  { id: 16, text: "Я замечаю красоту в деталях, которые другие не видят.", type: "A" },
  { id: 17, text: "Создавать что-то оригинальное — моя страсть.", type: "A" },
  { id: 18, text: "Я чувствую себя живым, когда работаю над творческим проектом.", type: "A" },
  // Социальный (S)
  { id: 19, text: "Мне нравится помогать людям решать их проблемы.", type: "S" },
  { id: 20, text: "Работа в команде мне комфортнее, чем в одиночку.", type: "S" },
  { id: 21, text: "Я умею объяснять сложное простыми словами.", type: "S" },
  { id: 22, text: "Меня привлекает обучение и наставничество.", type: "S" },
  { id: 23, text: "Общение с людьми даёт мне энергию.", type: "S" },
  { id: 24, text: "Я чувствую удовлетворение, когда кому-то помогаю.", type: "S" },
  // Предпринимательский (E)
  { id: 25, text: "Я люблю убеждать и вести за собой.", type: "E" },
  { id: 26, text: "Принятие решений и ответственность меня не пугают.", type: "E" },
  { id: 27, text: "Мне нравится организовывать людей и процессы.", type: "E" },
  { id: 28, text: "Идея запустить собственное дело меня привлекает.", type: "E" },
  { id: 29, text: "Я умею находить возможности там, где другие видят препятствия.", type: "E" },
  { id: 30, text: "Конкуренция и амбиции — это моё.", type: "E" },
  // Конвенциональный (C)
  { id: 31, text: "Мне нравится работать с цифрами и структурированными данными.", type: "C" },
  { id: 32, text: "Порядок и чёткие инструкции помогают мне работать лучше.", type: "C" },
  { id: 33, text: "Я аккуратен и внимателен к деталям.", type: "C" },
  { id: 34, text: "Мне нравится вести документацию и систематизировать информацию.", type: "C" },
  { id: 35, text: "Стабильность и предсказуемость в работе мне важны.", type: "C" },
  { id: 36, text: "Я хорошо работаю по установленным правилам и процедурам.", type: "C" },
];

const typeLabels: Record<string, string> = {
  R: "Реалистичный",
  I: "Исследовательский",
  A: "Артистический",
  S: "Социальный",
  E: "Предпринимательский",
  C: "Конвенциональный",
};

const options = [
  { value: 1, label: "Совсем не про меня" },
  { value: 2, label: "Скорее нет" },
  { value: 3, label: "Нейтрально" },
  { value: 4, label: "Скорее да" },
  { value: 5, label: "Полностью про меня" },
];

export default function TestPage({ onComplete }: TestPageProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);

  const answered = Object.keys(answers).length;
  const progress = (answered / questions.length) * 100;
  const q = questions[current];

  const selectAnswer = (val: number) => {
    const newAnswers = { ...answers, [q.id]: val };
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(current + 1), 260);
    } else {
      const scores: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
      questions.forEach((qu) => {
        scores[qu.type] += newAnswers[qu.id] || 0;
      });
      const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
      onComplete({ type: topType, label: typeLabels[topType], scores });
    }
  };

  return (
    <main className="min-h-screen pt-16 px-6 flex flex-col">
      {/* Progress */}
      <div className="max-w-2xl mx-auto w-full pt-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs" style={{ color: "var(--color-subtle)", fontFamily: "var(--font-body)" }}>
            Вопрос {Math.min(current + 1, questions.length)} из {questions.length}
          </span>
          <span className="text-xs" style={{ color: "var(--color-subtle)", fontFamily: "var(--font-body)" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--color-line)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "var(--color-accent)" }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto py-12">
          <div
            className="mb-3 text-xs uppercase tracking-widest"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
          >
            {typeLabels[q.type]}
          </div>

          <h2
            className="font-display text-2xl md:text-3xl font-semibold mb-10 leading-snug"
            style={{ color: "var(--color-text)" }}
          >
            {q.text}
          </h2>

          <div className="flex flex-col gap-3">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectAnswer(opt.value)}
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all duration-200 hover:scale-[1.01]"
                style={{
                  background: answers[q.id] === opt.value ? "var(--color-text)" : "var(--color-card)",
                  color: answers[q.id] === opt.value ? "var(--color-bg)" : "var(--color-text)",
                  border: `1px solid ${answers[q.id] === opt.value ? "var(--color-text)" : "var(--color-line)"}`,
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 transition-all"
                  style={{
                    background: answers[q.id] === opt.value ? "rgba(252,251,249,0.2)" : "var(--color-line)",
                    color: answers[q.id] === opt.value ? "var(--color-bg)" : "var(--color-muted)",
                  }}
                >
                  {opt.value}
                </span>
                <span className="text-sm">{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="text-sm px-4 py-2 rounded-xl transition-all"
              style={{
                color: current === 0 ? "var(--color-subtle)" : "var(--color-muted)",
                fontFamily: "var(--font-body)",
                opacity: current === 0 ? 0.4 : 1,
              }}
            >
              ← Назад
            </button>
            {answers[q.id] && current < questions.length - 1 && (
              <button
                onClick={() => setCurrent(current + 1)}
                className="text-sm px-4 py-2 rounded-xl transition-all"
                style={{
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Далее →
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
