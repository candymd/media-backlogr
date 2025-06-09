function Home() {
  return (
    <div className="content-wrapper">
      <div className="flex flex-col w-full">
        <main className="flex flex-col">
          <section className="relative h-screen flex items-center justify-center">
            <div className="hero-background !h-screen" />
            <div className="hero-overlay !h-screen" />

            <div className="relative z-10 text-center px-6">
              <h1 className="text-5xl font-bold text-brand-lightest mb-6 tracking-tight">
                Media Backlogr
              </h1>
              <p className="text-xl text-brand-light max-w-2xl mx-auto leading-relaxed">
                Track your entertainment journey. Keep tabs on the games you
                want to play and the movies you want to watch.
              </p>
              <div className="mt-12 flex gap-6 justify-center">
                <a
                  href="/movies"
                  className="px-8 py-3 border-2 border-brand-primary text-brand-lightest rounded-lg font-semibold hover:scale-105 transition-transform bg-brand-primary hover:bg-brand-secondary"
                >
                  Log movie
                </a>
                <a
                  href="/games"
                  className="px-8 py-3 border-2 border-brand-primary text-brand-lightest rounded-lg font-semibold hover:scale-105 transition-transform bg-brand-primary hover:bg-brand-secondary"
                >
                  Log game
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
