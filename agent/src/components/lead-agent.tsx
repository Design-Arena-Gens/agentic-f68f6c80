"use client";

import { useMemo, useReducer } from "react";

type LeadFormData = {
  persona: string[];
  services: string[];
  brandStage: string;
  brandVoice: string;
  budget: string;
  timeline: string;
  differentiator: string;
  email: string;
  website: string;
};

type StepType =
  | "multiChoice"
  | "singleChoice"
  | "dropdown"
  | "textarea"
  | "text"
  | "summary";

type StepOption = {
  value: string;
  label: string;
  helper?: string;
};

type SummaryStep = {
  type: "summary";
  title?: string;
  prompt?: string;
};

type QuestionStep = {
  id: keyof LeadFormData;
  title: string;
  prompt: string;
  type: Exclude<StepType, "summary">;
  placeholder?: string;
  options?: StepOption[];
  helper?: string;
  required?: boolean;
};

type StepDefinition = QuestionStep | SummaryStep;

function isQuestionStep(step: StepDefinition): step is QuestionStep {
  return step.type !== "summary";
}

type StepState = {
  index: number;
  answers: LeadFormData;
  submitting: boolean;
  completed: boolean;
  error?: string;
  success?: string;
};

const steps: StepDefinition[] = [
  {
    id: "persona",
    title: "Who is reaching out?",
    prompt: "Choose the role that best describes you.",
    type: "multiChoice",
    options: [
      { value: "founder", label: "Founder / Owner" },
      { value: "marketing-lead", label: "Marketing Lead" },
      { value: "creative-director", label: "Creative Director" },
      { value: "product-manager", label: "Product Manager" },
      { value: "entrepreneur", label: "Entrepreneur" },
    ],
    helper: "Select all that apply so we can tailor our pitch.",
    required: true,
  },
  {
    id: "services",
    title: "What do you need?",
    prompt: "Select the core design initiatives you need help with.",
    type: "multiChoice",
    options: [
      { value: "brand-identity", label: "Brand Identity & Guidelines" },
      { value: "website", label: "Website UX/UI" },
      { value: "marketing", label: "Marketing Campaign Assets" },
      { value: "product", label: "Product UI / UX" },
      { value: "pitch", label: "Pitch Deck & Presentations" },
    ],
    helper:
      "You can toggle multiple options. We’ll prioritise based on your selection.",
    required: true,
  },
  {
    id: "brandStage",
    title: "Brand maturity",
    prompt: "Where are you in your brand journey?",
    type: "dropdown",
    options: [
      { value: "pre-launch", label: "Pre-launch / Just getting started" },
      { value: "emerging", label: "Emerging brand, looking to grow" },
      { value: "scaleup", label: "Scaling company with traction" },
      { value: "enterprise", label: "Established enterprise" },
    ],
    required: true,
  },
  {
    id: "brandVoice",
    title: "Voice & vibe",
    prompt: "Describe the tone or mood you are aiming for.",
    type: "textarea",
    placeholder:
      "Bold and experimental, but still clean. Looking to stand out in a crowded SaaS market…",
  },
  {
    id: "budget",
    title: "Budget clarity",
    prompt: "What investment range feels right for this engagement?",
    type: "singleChoice",
    options: [
      { value: "under-5k", label: "Under $5K" },
      { value: "5k-10k", label: "$5K – $10K" },
      { value: "10k-25k", label: "$10K – $25K" },
      { value: "25k-50k", label: "$25K – $50K" },
      { value: "50k-plus", label: "$50K+" },
    ],
  },
  {
    id: "timeline",
    title: "Timeline",
    prompt: "When are you hoping to kick things off?",
    type: "singleChoice",
    options: [
      { value: "immediately", label: "Immediately" },
      { value: "2-weeks", label: "In the next 2 weeks" },
      { value: "1-month", label: "Within a month" },
      { value: "quarter", label: "This quarter" },
      { value: "flexible", label: "Flexible / exploring" },
    ],
  },
  {
    id: "differentiator",
    title: "What makes you unique?",
    prompt:
      "Give us a quick snapshot of your differentiator or the problem you’re solving.",
    type: "textarea",
    placeholder:
      "We help wellness brands launch digital memberships with a conversion-optimised onboarding experience…",
    required: true,
  },
  {
    id: "website",
    title: "Link drop",
    prompt: "Share a URL that gives more context (site, deck, Notion doc).",
    type: "text",
    placeholder: "https://",
  },
  {
    id: "email",
    title: "Best contact",
    prompt: "Where should we send our proposal and next steps?",
    type: "text",
    placeholder: "you@company.com",
    helper: "We’ll follow up within one business day.",
    required: true,
  },
  {
    type: "summary",
  },
];

const initialForm: LeadFormData = {
  persona: [],
  services: [],
  brandStage: "",
  brandVoice: "",
  budget: "",
  timeline: "",
  differentiator: "",
  email: "",
  website: "",
};

type Action =
  | { type: "set"; payload: { id: keyof LeadFormData; value: string | string[] } }
  | {
      type: "next";
      payload: { id: keyof LeadFormData; value?: string | string[] };
    }
  | { type: "back" }
  | { type: "submit" }
  | { type: "submitted"; message: string }
  | { type: "error"; message: string };

function reducer(state: StepState, action: Action): StepState {
  switch (action.type) {
    case "set": {
      const answers = {
        ...state.answers,
        [action.payload.id]: action.payload.value,
      } as LeadFormData;

      return { ...state, answers, error: undefined };
    }
    case "next": {
      const nextAnswers =
        action.payload.value === undefined
          ? state.answers
          : ({
              ...state.answers,
              [action.payload.id]: action.payload.value,
            } as LeadFormData);

      return {
        ...state,
        answers: nextAnswers,
        index: Math.min(state.index + 1, steps.length - 1),
        error: undefined,
      };
    }
    case "back": {
      return {
        ...state,
        index: Math.max(state.index - 1, 0),
        error: undefined,
      };
    }
    case "submit": {
      return { ...state, submitting: true, error: undefined };
    }
    case "submitted": {
      return {
        ...state,
        submitting: false,
        completed: true,
        success: action.message,
      };
    }
    case "error": {
      return { ...state, submitting: false, error: action.message };
    }
    default:
      return state;
  }
}

const summaryFields: Array<{ label: string; key: keyof LeadFormData }> = [
  { label: "Role", key: "persona" },
  { label: "Key Initiatives", key: "services" },
  { label: "Brand Stage", key: "brandStage" },
  { label: "Tone", key: "brandVoice" },
  { label: "Budget", key: "budget" },
  { label: "Timeline", key: "timeline" },
  { label: "Differentiator", key: "differentiator" },
  { label: "Website", key: "website" },
  { label: "Email", key: "email" },
];

const pillStyles =
  "rounded-full border border-slate-600/20 bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 data-[active=true]:border-indigo-500 data-[active=true]:bg-indigo-50 data-[active=true]:text-indigo-600";

function formatValue(value: string | string[]) {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "—";
  }

  return value?.trim() ? value : "—";
}

async function submitLead(payload: LeadFormData) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      capturedAt: new Date().toISOString(),
      source: typeof window !== "undefined" ? window.location.href : "",
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const message = data?.error ?? "Something went wrong, please try again.";
    throw new Error(message);
  }

  return response.json();
}

export function LeadAgent() {
  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    answers: initialForm,
    submitting: false,
    completed: false,
  });

  const activeStepIndex = Math.min(state.index, steps.length - 1);
  const activeStep = steps[activeStepIndex];

  const progress = useMemo(
    () => ((activeStepIndex + 1) / steps.length) * 100,
    [activeStepIndex],
  );

  const handleOptionSelect = (step: QuestionStep, option: StepOption) => {
    const currentValue = state.answers[step.id];

    if (step.type === "multiChoice") {
      const values = Array.isArray(currentValue) ? currentValue : [];
      const exists = values.includes(option.value);
      const updated = exists
        ? values.filter((item) => item !== option.value)
        : [...values, option.value];
      dispatch({ type: "set", payload: { id: step.id, value: updated } });
      return;
    }

    dispatch({ type: "next", payload: { id: step.id, value: option.value } });
  };

  const handleContinue = (step: QuestionStep) => {
    const value = state.answers[step.id];

    if (step.type === "multiChoice") {
      if (!Array.isArray(value) || value.length === 0) {
        dispatch({
          type: "error",
          message: "Select at least one option to continue.",
        });
        return;
      }
      dispatch({ type: "next", payload: { id: step.id } });
      return;
    }

    if (step.required && typeof value === "string" && !value.trim()) {
      dispatch({ type: "error", message: "This field is required." });
      return;
    }

    dispatch({
      type: "next",
      payload: { id: step.id, value },
    });
  };

  const handleSubmit = async () => {
    if (!state.answers.email.trim()) {
      dispatch({ type: "error", message: "We need an email to lock this in." });
      return;
    }

    dispatch({ type: "submit" });

    try {
      await submitLead(state.answers);
      dispatch({
        type: "submitted",
        message: "All set! We’ll follow up with a tailored proposal shortly.",
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: "error", message: error.message });
      } else {
        dispatch({ type: "error", message: "Something went wrong, please try again." });
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-indigo-900/10 backdrop-blur-md">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            Discovery Agent
          </span>
          <span className="text-xs text-slate-500">
            Step {Math.min(activeStepIndex + 1, steps.length)} / {steps.length}
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {isQuestionStep(activeStep) ? (
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{activeStep.title}</h3>
            <p className="text-sm text-slate-600">{activeStep.prompt}</p>
          </div>

          {activeStep.type === "dropdown" && activeStep.options ? (
            <div className="flex flex-col gap-2">
              <select
                value={(state.answers[activeStep.id] as string) ?? ""}
                onChange={(event) =>
                  dispatch({
                    type: "set",
                    payload: { id: activeStep.id, value: event.target.value },
                  })
                }
                className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-inner shadow-slate-900/5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {activeStep.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {["multiChoice", "singleChoice"].includes(activeStep.type) && activeStep.options ? (
            <div className="flex flex-wrap gap-2">
              {activeStep.options.map((option) => {
                const answer = state.answers[activeStep.id];
                const isActive = Array.isArray(answer)
                  ? answer.includes(option.value)
                  : answer === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleOptionSelect(activeStep, option)}
                    className={pillStyles}
                    data-active={isActive}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          ) : null}

          {["textarea", "text"].includes(activeStep.type) && (
            <div className="flex flex-col gap-2">
              {activeStep.type === "textarea" ? (
                <textarea
                  className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-inner shadow-slate-900/5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder={activeStep.placeholder}
                  value={(state.answers[activeStep.id] as string) ?? ""}
                  onChange={(event) =>
                    dispatch({
                      type: "set",
                      payload: { id: activeStep.id, value: event.target.value },
                    })
                  }
                />
              ) : (
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-inner shadow-slate-900/5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder={activeStep.placeholder}
                  value={(state.answers[activeStep.id] as string) ?? ""}
                  onChange={(event) =>
                    dispatch({
                      type: "set",
                      payload: { id: activeStep.id, value: event.target.value },
                    })
                  }
                />
              )}
            </div>
          )}

          {activeStep.helper ? (
            <p className="text-xs text-slate-500">{activeStep.helper}</p>
          ) : null}

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => dispatch({ type: "back" })}
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
              disabled={activeStepIndex === 0}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => handleContinue(activeStep)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600 hover:shadow-indigo-600/40"
            >
              Continue
            </button>
          </div>

          {state.error ? (
            <p className="text-xs font-medium text-rose-500">{state.error}</p>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Ready to lock in your project?
            </h3>
            <p className="text-sm text-slate-600">
              We’ve translated your inputs into a proposal-ready brief. Give it a
              quick scan and fire it over.
            </p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
            {summaryFields.map(({ label, key }) => (
              <div key={key} className="grid gap-1">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {label}
                </span>
                <span className="rounded-xl bg-white px-3 py-2 text-sm text-slate-800 shadow-inner shadow-slate-900/5">
                  {formatValue(state.answers[key])}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm text-indigo-900 shadow-inner shadow-indigo-900/5">
            <p className="font-medium">Next steps we’ll cover:</p>
            <ul className="mt-2 list-disc pl-4 text-indigo-800 marker:text-indigo-400">
              <li>Audit your visual identity and UX touchpoints.</li>
              <li>Map deliverables against your growth milestones.</li>
              <li>Ship a tailored proposal within 24 hours.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => dispatch({ type: "back" })}
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              Edit responses
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={state.submitting || state.completed}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state.submitting ? "Sending…" : state.completed ? "Delivered" : "Send my brief"}
            </button>
            {state.error ? (
              <p className="text-xs font-medium text-rose-500">{state.error}</p>
            ) : null}
            {state.success ? (
              <p className="text-xs font-medium text-emerald-600">{state.success}</p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
