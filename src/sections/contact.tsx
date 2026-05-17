import Section from "../components/section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-2 text-lg">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:uddhavdavey2410@gmail.com"
            className="hover:text-zinc-600"
          >
            uddhavdavey2410@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Uddhav-24"
            target="_blank"
            className="hover:text-zinc-600"
          >
            github.com/Uddhav-24
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/uddhavdavey/"
            target="_blank"
            className="hover:text-zinc-600"
          >
            linkedin.com/in/uddhavdavey
          </a>
        </p>

        <p>
          <strong>Substack:</strong>{" "}
          <a
            href="https://substack.com/@uddhavdavey"
            target="_blank"
            className="hover:text-zinc-600"
          >
            substack.com/@uddhavdavey
          </a>
        </p>

        <a
          href="https://drive.google.com/file/d/1w-ceOXS13Kkhhqq9qUmgYGUge4VFJE6-/view?usp=sharing"
          className="inline-block pt-4 text-lg font-bold hover:text-zinc-600"
        >
          Download Resume
        </a>
      </div>
    </Section>
  );
}