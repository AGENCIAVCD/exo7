"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/contact";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  customProjectType: "",
  message: ""
};

const projectOptions = ["Residencial", "Comercial", "Ampliação", "Reforma", "Outro"];

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function selectProjectType(value: string) {
    setForm((current) => ({
      ...current,
      projectType: value,
      customProjectType: value === "Outro" ? current.customProjectType : ""
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const projectType = form.projectType === "Outro" ? form.customProjectType : form.projectType;

    const lines = [
      "Olá, quero planejar uma obra com a EXO7.",
      form.name ? `Nome: ${form.name}` : "",
      form.phone ? `WhatsApp: ${form.phone}` : "",
      form.email ? `E-mail: ${form.email}` : "",
      projectType ? `Tipo de obra: ${projectType}` : "",
      form.message ? `Mensagem: ${form.message}` : ""
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-4 text-exo-ink shadow-2xl md:p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Nome" value={form.name} placeholder="Seu nome" onChange={(value) => updateField("name", value)} />
        <Field label="WhatsApp" value={form.phone} placeholder="(00) 00000-0000" onChange={(value) => updateField("phone", value)} />
      </div>
      <Field label="E-mail" value={form.email} placeholder="contato@email.com" type="email" onChange={(value) => updateField("email", value)} />
      <div className="mt-3">
        <span className="mb-2 block text-sm font-bold text-exo-ink">Tipo de obra</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {projectOptions.map((option) => {
            const isSelected = form.projectType === option;

            return (
              <button
                key={option}
                type="button"
                className={`focus-ring rounded-full border px-3 py-2 text-xs font-extrabold transition ${
                  isSelected
                    ? "border-exo-blue-900 bg-exo-blue-900 text-white shadow-[0_12px_28px_rgba(0,48,135,.18)]"
                    : "border-neutral-200 bg-exo-page text-exo-muted hover:border-exo-blue-500 hover:bg-white hover:text-exo-blue-900"
                }`}
                onClick={() => selectProjectType(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      {form.projectType === "Outro" ? (
        <Field
          label="Descreva o tipo de obra"
          value={form.customProjectType}
          placeholder="Ex: retrofit, galpão, obra corporativa..."
          onChange={(value) => updateField("customProjectType", value)}
        />
      ) : null}
      <label className="mt-3 block">
        <span className="mb-2 block text-sm font-bold text-exo-ink">Mensagem</span>
        <textarea
          className="focus-ring min-h-20 w-full rounded-2xl border border-neutral-200 bg-exo-page px-4 py-2.5 text-sm text-exo-ink outline-none transition focus:border-exo-blue-500 focus:bg-white"
          placeholder="Conte onde será a obra, metragem aproximada e prazo desejado."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>
      <button
        type="submit"
        className="premium-button premium-button-blue focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold text-white"
        style={{ color: "#ffffff" }}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          Enviar pelo WhatsApp <ArrowRight size={18} />
        </span>
      </button>
    </form>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text"
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="mt-3 block">
      <span className="mb-2 block text-sm font-bold text-exo-ink">{label}</span>
      <input
        type={type}
        className="focus-ring h-10 w-full rounded-2xl border border-neutral-200 bg-exo-page px-4 text-sm text-exo-ink outline-none transition focus:border-exo-blue-500 focus:bg-white"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
