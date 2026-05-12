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
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "Olá, quero planejar uma obra com a EXO7.",
      form.name ? `Nome: ${form.name}` : "",
      form.phone ? `WhatsApp: ${form.phone}` : "",
      form.email ? `E-mail: ${form.email}` : "",
      form.projectType ? `Tipo de obra: ${form.projectType}` : "",
      form.message ? `Mensagem: ${form.message}` : ""
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-5 text-exo-ink shadow-2xl md:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" value={form.name} placeholder="Seu nome" onChange={(value) => updateField("name", value)} />
        <Field label="WhatsApp" value={form.phone} placeholder="(00) 00000-0000" onChange={(value) => updateField("phone", value)} />
      </div>
      <Field label="E-mail" value={form.email} placeholder="contato@email.com" type="email" onChange={(value) => updateField("email", value)} />
      <Field label="Tipo de obra" value={form.projectType} placeholder="Casa, comércio, ampliação..." onChange={(value) => updateField("projectType", value)} />
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-exo-ink">Mensagem</span>
        <textarea
          className="focus-ring min-h-28 w-full rounded-2xl border border-neutral-200 bg-exo-page px-4 py-3 text-base text-exo-ink outline-none transition focus:border-exo-blue-500 focus:bg-white"
          placeholder="Conte onde será a obra, metragem aproximada e prazo desejado."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-exo-blue-900 px-6 text-sm font-extrabold text-white transition hover:bg-exo-blue-700"
        style={{ color: "#ffffff" }}
      >
        Enviar pelo WhatsApp <ArrowRight size={18} />
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
    <label className="mt-4 block">
      <span className="mb-2 block text-sm font-bold text-exo-ink">{label}</span>
      <input
        type={type}
        className="focus-ring h-12 w-full rounded-2xl border border-neutral-200 bg-exo-page px-4 text-base text-exo-ink outline-none transition focus:border-exo-blue-500 focus:bg-white"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
