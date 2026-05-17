import Section from "../components/section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div>
        <h3 className="text-xl font-bold">SkyBug Technologies</h3>

        <p className="mt-2 text-black">Machine Learning Intern - Remote</p>

        <ul className="mt-4 space-y-1 text-black leading-7 list-disc pl-5">
          <li>
            Developed and evaluated machine learning models for NLP sentiment
            analysis and customer churn prediction, achieving ~90% accuracy/F1-score
            on IMDB movie reviews and ~80–85% test accuracy on bank churn classification.
          </li>

          <li>
            Implemented end-to-end ML pipelines including data preprocessing,
            feature encoding, feature engineering, model training, and evaluation
            on both unstructured text and structured tabular data.
          </li>

          <li>
            Validated model performance using precision, recall, F1-score,
            confusion matrices, and feature importance analysis to ensure reliable
            and interpretable predictions.
          </li>
        </ul>
      </div>
    </Section>
  );
}