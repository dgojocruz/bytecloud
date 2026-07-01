import { Fragment, useEffect, useRef, useState } from 'react';
import { processSteps } from '../../data/process';

function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const interactedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      if (interactedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const handleSelect = (index) => {
    interactedRef.current = true;
    setActiveIndex(index);
  };

  const activeStep = processSteps[activeIndex];

  return (
    <div className="process">
      <div className="process-track" role="tablist" aria-label="Our process">
        {processSteps.map((step, index) => (
          <Fragment key={step.id}>
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="process-detail-panel"
              className={`process-step ${index === activeIndex ? 'active' : ''} ${
                index < activeIndex ? 'completed' : ''
              }`}
              onClick={() => handleSelect(index)}
            >
              <span className="process-step-number">{step.id}</span>
              <span className="process-step-label">{step.title}</span>
            </button>
            {index < processSteps.length - 1 && (
              <span
                className={`process-connector ${index < activeIndex ? 'completed' : ''}`}
                aria-hidden="true"
              />
            )}
          </Fragment>
        ))}
      </div>

      <div id="process-detail-panel" className="process-detail" role="tabpanel" key={activeIndex}>
        <span className="process-detail-eyebrow">Step {activeStep.id}</span>
        <h3>{activeStep.title}</h3>
        <p>{activeStep.summary}</p>
        <ul>
          {activeStep.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="process-detail-duration">Typical duration: {activeStep.duration}</p>
      </div>
    </div>
  );
}

export default ProcessTimeline;
