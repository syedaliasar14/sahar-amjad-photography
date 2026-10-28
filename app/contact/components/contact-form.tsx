"use client";

import { useState } from "react";

const field =
  "w-full border border-secondary bg-card px-4 py-3 outline-none focus:border-primary";

export function ContactForm({ serviceOptions }: { serviceOptions: string[] }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="py-10 text-center font-heading text-primary text-3xl">
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
        className="btn-primary sm:col-span-2 py-2"
      >
        Send message
      </button>
    </form>
  );
}
