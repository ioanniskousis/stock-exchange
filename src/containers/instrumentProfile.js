import React from 'react';

function renderItem(label, itemId) {
  return (
    <div className="profileItem">
      <div className="profileLabel">
        {label}
      </div>
      <div id={itemId} className="profileInfo" />
    </div>
  );
}

function InstrumentProfile() {
  return (
    <div className="instrumentProfile">
      {renderItem('Industry Sector', 'companySector')}
      {renderItem('Company Name', 'companyName')}

      <div className="profileLogo">
        <img id="companyLogo" alt="" width="200" />
      </div>

      {renderItem('Address', 'companyAddress')}
      {renderItem('Description', 'companyDescription')}
      {renderItem('WEB Site', 'companyWebsite')}
      {renderItem('Phone', 'companyPhone')}
      {renderItem('Exchange', 'companyExchange')}
      {renderItem('Employees', 'companyEmployees')}
      {renderItem('CEO', 'companyCEO')}
      {renderItem('Average Volume', 'companyVolume')}
      {renderItem('Market Capital', 'companyCapital')}
    </div>
  );
}

export default InstrumentProfile;
