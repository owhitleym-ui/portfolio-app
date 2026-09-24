export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background text-foreground">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 py-24">
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight">Your Name</h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            A short tagline about who you are and what you do.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            A couple of sentences introducing yourself.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Placeholder for project highlights.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Placeholder for contact details or links.
          </p>
        </section>
      </main>
    </div>
  );
}
