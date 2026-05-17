import Section from "../components/section";

const projects = [
  {
  title: "ResumeMatch AI",

  description: [
    "Built an AI-powered resume-job matching platform using sentence embeddings, cosine similarity, and Llama-3.3-70B via the Groq API.",

    "Developed a production-ready Streamlit application with real-time analysis, downloadable application kits, and robust fallback handling for API failures and rate limits.",
  ],

  stack: "Tech Stack: Python, Streamlit, NLP, Groq API",

  liveLink: "https://resumematch-ai.streamlit.app/",

  githubLink: "https://github.com/Uddhav-24/ResumeMatch_AI",

  images: [
    "/projects/resumematch-ai/1.png",
    "/projects/resumematch-ai/2.png",
  ],
},

  {
  title: "JobTrack AI (in developement)",

  description: [
    "Built a full-stack AI powered job application tracking system with JWT authentication, protected routes, advanced filtering, and real-time application analytics.",

    "Implemented scalable CRUD workflows for managing job applications using FastAPI, PostgreSQL, React, and TypeScript with responsive dashboard interfaces.",

    "Currently developing AI-assisted automation workflows for intelligent job discovery, resume tailoring, cold-email generation, and user-reviewed application pipelines.",
  ],

  stack:
    "Tech Stack: FastAPI, React, TypeScript, PostgreSQL, Tailwind CSS, Groq API",

  liveLink: "",
  githubLink: "",

  images: [
    "/projects/jobtrack-ai/1.png",
    "/projects/jobtrack-ai/2.png",
  ],
  },

  {
  title: "KYC Voice Verification Bot",

  description: [
    "Built a voice-based KYC verification workflow for a fintech onboarding use case as part of a technical assessment project for Decentro.",

    "Implemented speech recognition, text-to-speech interaction flows, input validation, retry handling, and structured JSON session logging for backend integration workflows.",

    "Designed a conversational CLI-based verification pipeline handling name, phone, PAN validation, consent collection, and error recovery using local Python tooling.",
  ],

  stack:
    "Tech Stack: Python, SpeechRecognition(recognize_google), TTS(pyttsx3), PyAudio",

  liveLink: "https://drive.google.com/file/d/1RjvmE1DrgV1fOuFDhIY6gd-W_4uPvdO2/view?usp=sharing",

  githubLink: "https://github.com/Uddhav-24/decentro-kyc-voice-bot",

  images: [
    "/projects/kyc-bot/1.png",
    "/projects/kyc-bot/2.png",
  ],
  },

];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border-b border-zinc-300 pb-10"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="text-3xl font-bold transition hover:text-zinc-600"
              >
                {project.title}
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                className="text-sm font-semibold text-zinc-600 underline underline-offset-4 hover:text-black"
              >
                GitHub Code
              </a>
            </div>

            <ul className="mt-5 space-y-2 text-lg leading-8 text-zinc-700">
              {project.description.map((point) => (
                <li key={point}>
                  • {point}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-base font-bold tracking-wide text-black">
              {project.stack}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.images.map((image) => (
                <a
                  key={image}
                  href={image}
                  target="_blank"
                >
                  <img
                    src={image}
                    alt={project.title}
                    className="rounded-2xl border border-zinc-300 transition hover:opacity-90"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}