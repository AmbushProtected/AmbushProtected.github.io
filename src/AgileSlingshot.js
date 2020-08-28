import React from 'react';
import './AgileSlingshot.css';

const AgileSlingshot = () => {
  return (
    <div className="agile-container">
      <div className="section-header">Agile Slingshot</div>
      <div className="agile-overview">
        When you work with us, you get a team experienced in developing projects
        from ideation to production. Building new and bold products drive us.
      </div>
      <div className="agile-box">
        <div className="agile-box-header">Discovery and Ideation</div>
        <div className="agile-box-copy">
          This stage is crucial in the build as we identify key concepts the
          customer wants in the finished product. We want to find your style and
          requirements to inform our build process.
        </div>
      </div>
      <div className="agile-box">
        <div className="agile-box-header">Scaffolding</div>
        <div className="agile-box-copy">
          We want to build the barebones version of your project. In this stage
          we aim at building quickly to quickly identify if we are heading in
          the right direction.
        </div>
      </div>
      <div className="agile-box">
        <div className="agile-box-header">Production</div>
        <div className="agile-box-copy">
          Once we confirm that our intial design is to your liking, we continue
          with the build. Adding polish and refinement, we push out a concrete
          product.
        </div>
      </div>
    </div>
  );
};

export default AgileSlingshot;
