/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import downloadProfile from '../api/profile';
import { gel, appAlert } from '../utils';

function loadItemData(itemId, data) {
  try {
    gel(itemId).innerHTML = data;
  } catch (error) {
    appAlert(itemId, error);
  }
}

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

function profileCallBack(data) {
  const sector = data.sector || '';
  const industry = data.industry || '';
  const state = data.state || '';
  const country = data.country || '';
  const city = data.city || '';
  const address = data.address || '';
  const zip = data.zip || '';

  const companyAddress = country
    .concat(' : ')
    .concat(state)
    .concat(', ')
    .concat(city)
    .concat(', ')
    .concat(address)
    .concat(', zip ')
    .concat(zip);

  loadItemData('companySector', sector.concat(' - ').concat(industry));
  loadItemData('companyName', data.companyName);
  loadItemData('companyAddress', companyAddress);
  loadItemData('companyDescription', data.description);
  loadItemData('companyWebsite', data.website);
  loadItemData('companyPhone', data.phone);
  loadItemData('companyExchange', data.exchange);
  loadItemData('companyEmployees', data.fullTimeEmployees);
  loadItemData('companyCEO', data.ceo);
  loadItemData('companyVolume', data.volAvg);
  loadItemData('companyCapital', data.mktCap);

  try {
    gel('companyLogo').src = data.image;
  } catch (error) {
    appAlert('companyLogo', error);
  }
}

function InstrumentProfile(props) {
  const { instrument } = props;
  const { symbol } = instrument;

  useEffect(() => {
    downloadProfile(symbol, profileCallBack);
  });

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

InstrumentProfile.propTypes = {
  instrument: PropTypes.objectOf(PropTypes.any),
};

InstrumentProfile.defaultProps = {
  instrument: null,
};

export default connect(null, null)(InstrumentProfile);
