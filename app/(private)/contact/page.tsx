import type { Metadata } from "next";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-sxl">Contact</span>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};