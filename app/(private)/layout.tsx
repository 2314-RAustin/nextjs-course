import { NavbarComponent } from "@/components";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <NavbarComponent />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span className="text-sxl">Private</span>
        { children }
      </main>
    </>
  );
}
