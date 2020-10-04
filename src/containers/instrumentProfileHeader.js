import React from 'react';
import { Link } from 'react-router-dom';

function InstrumentProfileHeader() {
  return (
    <header>
      <div className="headerContainer">
        <div className="headerContainer-left">
          <Link to="/" className="backToSurvey">Back to Survey</Link>
          <div className="survey-label" id="headerSymbol" />
        </div>
        <div className="headerContainer-right" id="headerCompanyName">Loading Profile ...</div>
      </div>
    </header>
  );
}

export default InstrumentProfileHeader;
