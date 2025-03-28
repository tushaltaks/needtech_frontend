import React from "react";
import { Image } from "react-bootstrap";

export function TopSteps({ currentStep }) {
  const steps = [
    { id: 1, title: "Step 1" },
    { id: 2, title: "Step 2" },
    { id: 3, title: "Step 3" },
    { id: 4, title: "Step 4" },
    { id: 5, title: "Step 5" },
    { id: 6, title: "Step 6" },
    { id: 7, title: "Step 7" },
  ];

  return (
    <div className="top_stepsbar">
      <ul>
        {steps.map((step) => {
          let className = "";

          if (currentStep > step.id) {
            className = "complete"; // Steps already done
          } else if (currentStep === step.id) {
            className = "current"; // Active step
          }

          return (
            <li key={step.id} className={className}>
              <div className="top_stepsbar_ic"></div>
              <div className="top_stepsbar_con">{step.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
