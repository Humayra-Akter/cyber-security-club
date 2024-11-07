import React from "react";
import Banner from "./Banner";
import Important from "./Important";
import Tokens from "./Tokens";
import Membership from "./Membership";
import MembershipBenefit from "./MembershipBenefit";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tokens></Tokens>
      <Important></Important>
      <Membership />
      <MembershipBenefit />
      <Testimonials />
    </div>
  );
};

export default Home;
