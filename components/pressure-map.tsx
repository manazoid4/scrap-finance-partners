"use client";

import { useState } from "react";

import { pressureMapNote, pressureStages } from "@/data/pressure-map";

/**
 * Commercial pressure map.
 *
 * A tablist. Selecting a stage explains what that pressure does to a return and
 * what a Health Check examines there. It computes nothing and shows no figures —
 * the interaction exists to explain relationships, not to imply a calculation.
 *
 * Every stage's content is present in the DOM at all times (inactive panels use
 * `hidden`), so nothing depends on JavaScript in order to exist.
 */
export default function PressureMap() {
  const [active, setActive] = useState(pressureStages[0].id);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = pressureStages.findIndex((stage) => stage.id === active);
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = index + 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = pressureStages.length - 1;
    else return;

    event.preventDefault();
    const clamped = (next + pressureStages.length) % pressureStages.length;
    const stage = pressureStages[clamped];
    setActive(stage.id);
    document.getElementById(`pressure-tab-${stage.id}`)?.focus();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div
        role="tablist"
        aria-label="Commercial pressure stages"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex flex-col gap-2 border-b-2 border-black p-4 sm:p-6 lg:col-span-5 lg:border-b-0 lg:border-r-2"
      >
        {pressureStages.map((stage, index) => {
          const selected = stage.id === active;
          return (
            <button
              key={stage.id}
              id={`pressure-tab-${stage.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`pressure-panel-${stage.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(stage.id)}
              className="pressure-step"
            >
              <span className="font-mono text-xs font-bold text-copper-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{stage.label}</span>
              <span aria-hidden className="font-mono text-xs">
                {index === pressureStages.length - 1 ? "=" : "↓"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-7">
        {pressureStages.map((stage) => (
          <div
            key={stage.id}
            id={`pressure-panel-${stage.id}`}
            role="tabpanel"
            aria-labelledby={`pressure-tab-${stage.id}`}
            hidden={stage.id !== active}
            tabIndex={0}
            className="p-5 sm:p-8"
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              {stage.label}
            </p>
            <p className="mt-5 font-serif text-2xl font-bold leading-tight sm:text-3xl">
              {stage.question}
            </p>
            <div className="pressure-rule mt-7 pt-5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-ink-muted">
                Effect on the return
              </p>
              <p className="mt-3 text-ink-secondary">{stage.effect}</p>
            </div>
            <div className="pressure-rule mt-6 pt-5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-ink-muted">
                What the review examines
              </p>
              <p className="mt-3 text-ink-secondary">{stage.examined}</p>
            </div>
          </div>
        ))}
        <p className="border-t-2 border-black bg-panel-alt p-5 text-sm text-ink-secondary sm:p-6">
          {pressureMapNote}
        </p>
      </div>
    </div>
  );
}
