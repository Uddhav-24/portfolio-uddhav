import Section from "../components/section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Certifications">
      <div className="space-y-10">
        
        <div className="space-y-1 text-lg leading-8">
          <p>
            <strong>Languages:</strong> Python, TypeScript, SQL
          </p>

          <p>
            <strong>Backend:</strong> Flask, FastAPI, REST APIs
          </p>

          <p>
            <strong>AI/ML:</strong> LangChain/LangGraph, CrewAI, PyTorch, RAG, ChromaDB
          </p>

          <p>
            <strong>Databases:</strong> PostgreSQL, MySQL
          </p>

          <p>
            <strong>Tools:</strong> Git, Postman
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-bold">
            Certifications
          </h3>

          <ul className="space-y-1 text-lg leading-7">
            <li>
              • Multi AI Agent Systems with CrewAI - DeepLearning.AI {" "}
              
              <a
                href="https://drive.google.com/file/d/1yp4es7BIcyvX65gub8w3yfqM4pL2sL97/view?usp=sharing"
                target="_blank"
                className="font-semibold underline underline-offset-4 hover:text-zinc-600"
              >
                View Certificate
              </a>
            </li>

            <li>
              • AI Agents in LangGraph - DeepLearning.AI {" "}
              
              <a
                href="https://drive.google.com/file/d/1DV48ssJPcfcMCNb7ND1LHy9oxwXmTvj7/view?usp=sharing"
                target="_blank"
                className="font-semibold underline underline-offset-4 hover:text-zinc-600"
              >
                View Certificate
              </a>
            </li>

            <li>
              • Applied Machine Learning in Python - Coursera {" "}
              
              <a
                href="https://coursera.org/share/f1f527961a201033422c36df9b5a6bc7"
                target="_blank"
                className="font-semibold underline underline-offset-4 hover:text-zinc-600"
              >
                View Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}