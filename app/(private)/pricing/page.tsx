import type { Metadata } from "next";

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-sxl">Pricing</span>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page",
};