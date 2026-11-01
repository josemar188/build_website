"use client";

import { useId, useState } from "react";
import { quote, whatsappLink } from "@/content";
import { Icon } from "./Icon";

const field =
  "mt-2 block w-full rounded-xl border border-line bg-card px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/30 aria-[invalid=true]:border-orange";
const label = "text-sm font-semibold text-ink";

export function QuoteForm() {
  const id = useId();
  const f = quote.fields;
  const [error, setError] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const service = get("service");
    const place = get("place");
    if (!name || !service || !place) {
      setError(true);
      return;
    }
    setError(false);

    const lines = [
      `Olá! Sou ${name} e gostava de um orçamento.`,
      `• ${f.service}: ${service}`,
      `• ${f.place}: ${place}`,
      get("date") && `• ${f.date}: ${new Date(get("date") + "T12:00").toLocaleDateString("pt-PT")}`,
      get("floor") && `• ${f.floor}: ${get("floor")}`,
      get("items") && `• ${f.items}\n${get("items")}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-card p-6 shadow-[0_20px_60px_-30px_rgb(15_36_29/0.35)] ring-1 ring-line sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>
            {f.name}
          </label>
          <input id={`${id}-name`} name="name" autoComplete="given-name" required aria-invalid={error || undefined} className={field} />
        </div>

        <div>
          <label htmlFor={`${id}-place`} className={label}>
            {f.place}
          </label>
          <input
            id={`${id}-place`}
            name="place"
            autoComplete="address-level2"
            placeholder={f.placePlaceholder}
            required
            aria-invalid={error || undefined}
            className={field}
          />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={label}>{f.service}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {quote.services.map((s, i) => (
              <label
                key={s}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-line bg-card px-4 text-sm font-medium text-ink transition-colors duration-200 hover:border-green has-[:checked]:border-green has-[:checked]:bg-mint has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-green/40"
              >
                <input type="radio" name="service" value={s} defaultChecked={i === 0} className="size-4 accent-green" />
                {s}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${id}-date`} className={label}>
            {f.date} <span className="font-normal text-muted">({f.optional})</span>
          </label>
          <input id={`${id}-date`} name="date" type="date" className={field} />
        </div>

        <div>
          <label htmlFor={`${id}-floor`} className={label}>
            {f.floor} <span className="font-normal text-muted">({f.optional})</span>
          </label>
          <input id={`${id}-floor`} name="floor" placeholder={f.floorPlaceholder} className={field} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-items`} className={label}>
            {f.items} <span className="font-normal text-muted">({f.optional})</span>
          </label>
          <textarea id={`${id}-items`} name="items" rows={3} placeholder={f.itemsPlaceholder} className={`${field} resize-y`} />
        </div>
      </div>

      <p role="alert" className={`mt-4 text-sm font-medium text-orange ${error ? "" : "sr-only"}`}>
        {error ? quote.required : ""}
      </p>

      <button
        type="submit"
        className="mt-4 inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-whatsapp px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      >
        <Icon name="whatsapp" className="size-6" />
        {quote.submit}
      </button>
      <p className="mt-4 text-center text-xs text-muted">{quote.note}</p>
    </form>
  );
}
