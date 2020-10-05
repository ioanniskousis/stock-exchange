import React from 'react';
import InstrumentsListHeader from './instrumentsListHeader';
import InstrumentsList from './instrumentsList';

const ListView = store => (
  <div>
    <InstrumentsListHeader />
    <InstrumentsList store={store} />
  </div>
);
export default ListView;
