import React from "react";
import Banner from "./Banner";
import Important from "./Important";
import Tokens from "./Tokens";
import Membership from "./Membership";
import MembershipBenefit from "./MembershipBenefit";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tokens></Tokens>
      <Important></Important>
      <Membership />
      <MembershipBenefit />
    </div>
  );
};

export default Home;
