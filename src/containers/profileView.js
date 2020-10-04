/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import InstrumentProfileHeader from './instrumentProfileHeader';
import InstrumentProfile from './instrumentProfile';
import downloadProfile from '../api/profile';
import { gel, appAlert } from '../utils';

function loadItemData(itemId, data) {
  try {
    gel(itemId).innerHTML = data;
  } catch (error) {
    appAlert(itemId, error);
  }
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

  loadItemData('headerSymbol', data.symbol);
  loadItemData('companyName', data.companyName);

  loadItemData('companySector', sector.concat(' - ').concat(industry));
  loadItemData('headerCompanyName', data.companyName);
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

function ProfileView(props) {
  const { symbol } = props.match.params;
  useEffect(() => {
    downloadProfile(symbol, profileCallBack);
  });
  return (
    <div>
      <InstrumentProfileHeader />
      <InstrumentProfile />
    </div>
  );
}

export default ProfileView;
