import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CodeWaterfall from "@/components/CodeWaterfall";
import ScrollHighlight from "@/components/ScrollHighlight";

const experiences = [
  {
    title: "Machine Learning Researcher",
    org: "Stanford Computer Science Department",
    location: "Stanford, CA",
    period: "Sep 2024 – Jun 2025",
    description:
      "Developed a contrastive deep learning model to identify regulatory differences in chromatin accessibility across normal, tumor, and metastatic states. By leveraging CNN architectures like ChromBPNet, applied advanced machine learning techniques to enhance the precision of sequence-to-function predictions, with a focus on refining computational models for disease progression, particularly in thyroid cancer.",
    tags: ["Deep Learning", "CNN", "Bioinformatics", "Python"],
  },
  {
    title: "Computational Modeling Researcher",
    org: "Stanford Translational AI Lab",
    location: "Stanford, CA",
    period: "Sep 2024 – Dec 2024",
    description:
      "Conducted interdisciplinary research uniting artificial intelligence, probabilistic modeling, and computational medicine. Developed and deployed deep learning architectures for computer vision and medical imaging, integrating probabilistic inference to quantify uncertainty and extract high-fidelity biomarkers. Leveraged Bayesian and data-driven modeling frameworks to improve diagnostic prediction, enhance model interpretability, and advance precision healthcare through statistically robust AI systems.",
    tags: [
      "Computer Vision",
      "Medical Imaging",
      "Bayesian Modeling",
      "Healthcare AI",
    ],
  },
  {
    title: "Statistical Modeling & Inference Researcher",
    org: "Stanford University",
    location: "Stanford, CA",
    period: "Jun 2025 – Sep 2025",
    description:
      "Conducted research on latent-variable and probabilistic models for uncertainty quantification in high-dimensional, noisy datasets. Developed and implemented Bayesian inference frameworks and variational optimization algorithms to uncover hidden structure and mitigate estimation bias in predictive modeling. Leveraging stochastic process theory, information-theoretic measures, and causal inference techniques to enhance model identifiability, interpretability, and robustness in complex real-world systems.",
    tags: [
      "Bayesian Inference",
      "Probabilistic Modeling",
      "Causal Inference",
      "Python",
    ],
  },
  {
    title: "Google Intern",
    org: "Google",
    location: "Mountain View, CA",
    period: "Jul 2023 – Sep 2023",
    description:
      "Developed a high-performance, production-scale interface for a real-time fraud detection platform within Google Ads, leveraging TypeScript, HTML, and CSS to engineer modular, scalable, and latency-optimized components. Collaborated with cross-functional teams to translate complex fraud analytics pipelines and anomaly detection workflows into intuitive, data-rich visual systems, enhancing usability, reliability, and decision speed across a platform processing billions of ad transactions daily.",
    tags: ["TypeScript", "UI/UX", "Frontend Development", "Google Ads"],
  },
  {
    title: "Teaching Assistant – CS227b: General Game Playing",
    org: "Stanford Computer Science Department",
    location: "Stanford, CA",
    period: "Mar 2025 – Jun 2025",
    description:
      "Assisted in teaching a graduate-level AI course on the design of autonomous agents capable of strategic reasoning in novel environments. Guided students in applying methods from automated reasoning, symbolic knowledge representation, adversarial and heuristic search, resource-bounded planning, and algorithmic game theory to develop general-purpose intelligence systems that learn and execute strategies from formal game descriptions.",
    tags: ["AI", "Game Theory", "Teaching", "Automated Reasoning"],
  },
  {
    title: "Quantitative Strategy Researcher",
    org: "Stanford University",
    location: "Stanford, CA",
    period: "Jan 2024 – Mar 2024",
    description:
      "Researched quantitative trading as an applied problem in statistical signal extraction, constrained optimization, and dynamic execution. The work explores factor-based alpha modeling, noise-robust inference from financial time series, portfolio construction under leverage and risk constraints, and execution strategies accounting for market impact, all within non-stationary and regime-dependent market environments.",
    tags: [
      "Quantitative Finance",
      "Statistical Modeling",
      "Optimization",
      "Time Series",
    ],
  },
  {
    title: "Mathematics Department Tutor",
    org: "Stanford University",
    location: "Stanford, CA",
    period: "Sep 2024 – Present",
    description:
      "Provide advanced instruction in theoretical and applied mathematics through Stanford's Mathematics Department. Lead students through rigorous explorations of vector space theory, multivariable analysis, and differential systems, with specialized focus on spectral and matrix theory, eigenvalue and singular value decomposition (SVD), dimensionality reduction, proof construction, and the analysis of linear operators and dynamical systems.",
    tags: ["Mathematics", "Linear Algebra", "Teaching", "Mentoring"],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="bg-[#0A120E] relative overflow-hidden"
    >
      <CodeWaterfall intensity="medium" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        {/* Two-column: sticky title left, scrolling entries right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          {/* Left — Large sticky title */}
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-20 md:py-28">
            <p
              className="font-mono uppercase tracking-[0.12em] text-[#7A9A85] mb-4"
              style={{ fontSize: "10px" }}
            >
              Experience
            </p>
            <ScrollHighlight
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6"
              colorFrom="#2A4A35"
              colorTo="#E8F5ED"
            >
              Experience
            </ScrollHighlight>
            <p className="font-sans text-base text-[#7A9A85] max-w-[360px] leading-relaxed">
              Research, engineering, and teaching across AI,
              machine learning, and mathematics at Stanford and Google.
            </p>
          </div>

          {/* Right — Scrolling experience entries */}
          <div className="py-20 md:py-28">
            {experiences.map((exp, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex justify-between items-start border-b border-[#1E3326] py-5 text-left group"
                >
                  <div>
                    <h3 className="font-sans font-semibold text-base text-[#E8F5ED]">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-sm text-[#7A9A85] mt-0.5">
                      {exp.org}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="font-mono text-xs text-[#7A9A85] hidden sm:inline">
                      {exp.period}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-[#7A9A85]" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ clipPath: "inset(0 0 100% 0)" }}
                      animate={{ clipPath: "inset(0 0 0% 0)" }}
                      exit={{ clipPath: "inset(0 0 100% 0)" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-xs text-[#4A6B55] mt-3 sm:hidden">
                        {exp.period}
                      </p>
                      <p className="font-sans text-sm text-[#7A9A85] leading-relaxed mt-3 mb-3">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-full border border-[#2A4A35] text-[#7A9A85]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
