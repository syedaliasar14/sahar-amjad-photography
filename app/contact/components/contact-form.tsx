"use client";

import { useState } from "react";
import { serviceOptions } from "@/lib/site-data";

const field =
  "w-full border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-black";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="py-10 text-center font-serif text-2xl">
        Thank you! I&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <input name="firstName" required placeholder="First name" className={field} />
      <input name="lastName" required placeholder="Last name" className={field} />
      <input name="phone" type="tel" placeholder="Phone number" className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <select
        name="service"
        required
        defaultValue=""
        className={`${field} sm:col-span-2`}
      >
        <option value="" disabled>
          Select a service
        </option>
        {serviceOptions.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Message"
        className={`${field} sm:col-span-2`}
      />
      <button
        type="submit"
        className="bg-black px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-neutral-700 sm:col-span-2"
      >
        Send message
      </button>
    </form>
  );
}
