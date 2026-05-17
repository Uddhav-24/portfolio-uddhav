export default function Intro() {
  return (
    <section
      id="about"
      className="mt-10 rounded-3xl border border-zinc-400 bg-white p-10"
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold text-black">
          Uddhav Davey
        </h1>

        <p className="mt-4 text-2xl text-zinc-700">
          AI & Backend Engineer
        </p>

        <div className="mt-6 space-y-3 text-lg leading-7 text-zinc-700">
          <p>
            • B.Tech in Computer Science & Engineering (Specialization in AI/ML),
            VIT Bhopal University, 2024.
          </p>

          <p>
            • Building AI-powered applications, backend systems,
            and automation tools.
          </p>

          <p>
            • Specialized in Python, APIs, LLM applications,
            Flask/FastAPI, and modern web technologies.
          </p>

          <p>
            • Targeting AI Engineer, Backend Developer,
            and Software Engineer roles.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
          
          <a
            href="mailto:uddhavdavey2410@gmail.com"
            className="rounded-full border border-zinc-400 px-5 py-3 transition hover:bg-zinc-100"
          >
            EMAIL
          </a>

          <a
            href="https://github.com/Uddhav-24/"
            target="_blank"
            className="rounded-full border border-zinc-400 px-5 py-3 transition hover:bg-zinc-100"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/uddhavdavey/"
            target="_blank"
            className="rounded-full border border-zinc-400 px-5 py-3 transition hover:bg-zinc-100"
          >
            LINKEDIN
          </a>

          <a
            href="https://substack.com/@uddhavdavey"
            target="_blank"
            className="rounded-full border border-zinc-400 px-5 py-3 transition hover:bg-zinc-100"
          >
            SUBSTACK
          </a>

          
        </div>
      </div>
    </section>
  );
}