import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';
import { AboutUs, Contacts, Home, Membership, NotFound } from 'Page';
import { MemReg } from 'components/MemReg';
import { QrSec } from 'components/QrSec';

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="membership" element={<Membership />}>
            <Route path="membershipReg" element={<MemReg />} />
            <Route path="qrsecurity" element={<QrSec />} />
          </Route>

          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
