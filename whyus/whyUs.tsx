import React from "react";
import "./whyUs.css";

type StageCard = {
  icon: string;
  title: string;
  text: string;
};

type Stage = {
  side: "left" | "right";
  color: "orange" | "blue" | "green" | "purple" | "pink";
  step: string;
  title: string;
  subtitle: string;
  stepBadge: string;
  cards: StageCard[];
};

const stages: Stage[] = [
  {
    side: "left",
    color: "orange",
    step: "1",
    title: "Foundation & Environment",
    subtitle: "Setting the stage for success",
    stepBadge: "1",
    cards: [
      {
        icon: "🧭",
        title: "Competitive Environment",
        text: "Highly motivating and conducive academic atmosphere with strict discipline.",
      },
      {
        icon: "👥",
        title: "Small Batch Size",
        text: "Homogenous small groups for focused attention and smooth progress.",
      },
      {
        icon: "🏫",
        title: "Well-Being Focus",
        text: "Well-ventilated spaces and short breaks for refreshment between lectures.",
      },
    ],
  },
  {
    side: "right",
    color: "blue",
    step: "2",
    title: "Expert Instruction",
    subtitle: "Mastering concepts with the best",
    stepBadge: "2",
    cards: [
      {
        icon: "🎖️",
        title: "Renowned Faculty",
        text: "Highly experienced, result-oriented mentors guiding every step.",
      },
      {
        icon: "📊",
        title: "Structured Lecture Flow",
        text: "Students always know coverage percentage and class status.",
      },
      {
        icon: "💡",
        title: "Concept Clarity",
        text: "Prime attention on basic fundamentals through interactive lectures.",
      },
      {
        icon: "🔗",
        title: "School Synchronization",
        text: "Aligned with school syllabus for faster grasp of fundamentals.",
      },
    ],
  },
  {
    side: "left",
    color: "green",
    step: "3",
    title: "Practice & Refinement",
    subtitle: "Sharpening skills through rigorous practice",
    stepBadge: "3",
    cards: [
      {
        icon: "📚",
        title: "Comprehensive Material",
        text: "Scientifically prepared high-quality study material.",
      },
      {
        icon: "🧩",
        title: "Graded Assignments",
        text: "Assignments with varying difficulty: Ordinary, Intelligent, and I-Level.",
      },
      {
        icon: "💬",
        title: "Doubt Discussion",
        text: "Open discussions with concerned faculties to clear all hurdles.",
      },
      {
        icon: "🛠️",
        title: "Problem Solving",
        text: "Regular sessions dedicated to solving complex problems.",
      },
    ],
  },
  {
    side: "right",
    color: "purple",
    step: "4",
    title: "Testing & Analysis",
    subtitle: "Evaluation in real exam environment",
    stepBadge: "4",
    cards: [
      {
        icon: "💻",
        title: "Real-Exam Simulation",
        text: "State of the art computerized testing setup.",
      },
      {
        icon: "📝",
        title: "Final Full Tests",
        text: "Full syllabus tests in exam-like conditions.",
      },
      {
        icon: "🔍",
        title: "Deep Analysis",
        text: "Detailed test analysis to identify and improve weaknesses.",
      },
      {
        icon: "📈",
        title: "Regular Evaluation",
        text: "Frequent quizzes and topic-wise tests to validate understanding.",
      },
    ],
  },
  {
    side: "left",
    color: "pink",
    step: "5",
    title: "Support & Mentorship",
    subtitle: "Beyond academics: Psychological and strategic support",
    stepBadge: "5",
    cards: [
      {
        icon: "💖",
        title: "Motivational Sessions",
        text: "Talks for personality development and confidence building.",
      },
      {
        icon: "🧠",
        title: "Stress Counseling",
        text: "Pre-exam stress management and counseling.",
      },
      {
        icon: "⏱️",
        title: "Strategic Guidance",
        text: "Time management tips and tricks for objective questions.",
      },
      {
        icon: "👨‍👩‍👧",
        title: "Parent Feedback",
        text: "Regular progress discussions with parents.",
      },
    ],
  },
];

const WhyUsPage: React.FC = () => {
  return (
    <div className="whyUsPage">
      <section className="wuJourneySection">
        <div className="wuContainer">
          <p className="wuEyebrow">Why Choose Us</p>
          <h1 className="wuJourneyTitle">
            Core Strengths & <span>Success Workflow</span>
          </h1>
          <p className="wuJourneyLead">
            All essentials in one ecosystem for consistent rank growth. Follow our step-by-step journey designed for academic excellence.
          </p>

          <div className="wuTimeline">
            {stages.map((stage, stageIndex) => (
              <section className={`wuStage wuStage${stage.side}`} key={stage.title}>
                <div className={`wuStageHead wuTone${stage.color}`}>
                  <div className="wuStageIcon">{stage.cards[0].icon}</div>
                  <h2>{stage.title}</h2>
                  <p>{stage.subtitle}</p>
                </div>

                <div className="wuStageCards">
                  {stage.cards.map((card, cardIndex) => (
                    <article className={`wuFeatureCard wuTone${stage.color}`} key={card.title}>
                      <span className="wuFeatureIcon" aria-hidden="true">
                        {card.icon}
                      </span>
                      <div className="wuFeatureBody">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                      {cardIndex === 1 && <span className="wuStepBadge">{stage.stepBadge}</span>}
                    </article>
                  ))}
                </div>

                {stageIndex < stages.length - 1 && <div className={`wuConnector wuConnector${stage.side}`} />}
              </section>
            ))}
          </div>

          <section className="wuCtaCard">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join an ecosystem built for success. We offer flexible options including single subject enrollment.</p>
            <div className="wuCtaActions">
              <button type="button" className="wuBtn wuBtnPrimary">
                Enroll Now
              </button>
              <button type="button" className="wuBtn wuBtnGhost">
                Talk to a Counselor
              </button>
            </div>
            <small>Free career counseling for entrance forms also available.</small>
          </section>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
