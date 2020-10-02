import React from 'react';
import InstrumentProfileHeader from './instrumentProfileHeader';
import InstrumentProfile from './instrumentProfile';

const ProfileView = instrument => (
  <div>
    <InstrumentProfileHeader instrument={instrument} />
    <InstrumentProfile instrument={instrument} />
  </div>
);
export default ProfileView;
