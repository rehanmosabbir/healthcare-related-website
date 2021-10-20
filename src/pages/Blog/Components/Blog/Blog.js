import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">Blogs</h1>
      <hr className="w-25 m-auto mb-5" />

      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/7vH20v8/blog-1.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 pt-3">
          <h4 className="mb-3">
            Brain Researcher Ian Maze Has Upended Scientific Dogma and Forged
            New Areas for Therapeutic Discovery
          </h4>
          <p>
            For decades, scientific dogma held that the chemicals dopamine and
            serotonin served as messengers within the central nervous system,
            allowing brain cells, or neurons, to communicate with each other.
            Known as neurotransmitters, dopamine and serotonin also contribute
            to drug addiction and depression.
          </p>
          <p>
            His significant discovery opens new avenues for research into other
            neurotransmitters in the human body, including histamine and
            norepinephrine, and new possibilities for treating a range of
            diseases. These include post-traumatic stress disorder, Parkinson’s
            disease.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12 pt-3 order-md-first order-last">
          <h4 className="mb-3">
            Higher Risk of Autism Found in Babies Born Prematurely According to
            a Definitive New Mount Sinai Study
          </h4>
          <p>
            Premature birth is linked to an increased risk of autism spectrum
            disorder (ASD) in both males and females, with those born earliest
            carrying the highest risk, according to a large and definitive new
            study in Pediatrics from the Icahn School of Medicine at Mount
            Sinai.
          </p>
          <p>
            In reaching their conclusions, the researchers compared siblings
            within families and were able to control for genetic and
            environmental factors, which strengthened the link between
            prematurity and ASD.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 order-md-last order-first">
          <img
            className="img-fluid"
            src="https://i.ibb.co/x1jPgJw/Two-hand-connecting-jigsaw-puzzle-Concept-of-partnership-and-teamwork-in-business-strategy.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/TKqSSCF/Asian-senior-man-with-his-medicine-bottles.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 pt-3">
          <h4 className="mb-3">
            Vaccine Facts: Immunocompromised People Should Get a Third Dose
          </h4>
          <p>
            Immunocompromised people have a reduced ability to fight infections
            and are more vulnerable to severe COVID-19. That is why the U.S.
            Centers for Disease Control and Prevention (CDC) is recommending
            that people with moderately to severely compromised immune systems
            receive an additional dose of the Pfizer-BioNTech or Moderna
            vaccine.
          </p>
          <p>
            To be clear, this is not considered a booster dose. A booster dose
            is given to a patient whose immunity to the vaccine may have waned
            over time. This is considered an additional dose, given to
            immunocompromised patients to improve their initial response to the
            vaccine series.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
