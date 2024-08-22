import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-sxl">About</span>
    </main>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};