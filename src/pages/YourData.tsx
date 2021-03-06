import { AppState } from "../types/store-types";

import React from "react";
import { useSelector } from "react-redux";

import MainNavigation from "../components/Layout/MainNavigation";
import MainFooter from "../components/Layout/MainFooter";
import GuestDataCard from "../components/DataCard/GuestDataCard";
import PartnerDataCard from "../components/DataCard/PartnerDataCard";
import ChildrenDataCard from "../components/DataCard/ChildrenDataCard";
import ResponseDataCard from "../components/DataCard/ResponseDataCard";

const YourData = () => {
  const isComing = useSelector(
    (state: AppState) => state.singleGuest.data?.isComing
  );

  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <div className="guest-data">
          <section>
            <ResponseDataCard />
          </section>
          {isComing && (
            <section className="grid">
              <div className="grid__item">
                <GuestDataCard />
              </div>
              <div className="grid__item">
                <PartnerDataCard />
              </div>
              <div className="grid__item grid__item--big">
                <ChildrenDataCard />
              </div>
            </section>
          )}
        </div>
      </main>
      <MainFooter />
    </React.Fragment>
  );
};

export default YourData;
