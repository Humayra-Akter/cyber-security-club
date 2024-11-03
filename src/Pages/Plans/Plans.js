import React from "react";

const Plans = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-green-900 text-center pt-14 pb-14 animate-pulse">
        PLANS
      </h1>
      <div className="lg:flex pb-14 p-10">
        <div class="card w-96 bg-base-100 shadow-xl ml-10 mr-5">
          <div class="card-body">
            <h2 className="text-center text-3xl font-extrabold text-green-900">
              1 MONTH
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center pt-7">
              <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary uppercase text-center text-3xl font-extrabold text-green-900 bg-gradient-to-r from-secondary to-primary ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl ml-5 mr-5">
          <div class="card-body">
            <h2 className="text-center text-3xl font-extrabold text-green-900">
              12 MONTHS
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
              <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary uppercase text-center text-3xl font-extrabold text-green-900 bg-gradient-to-r from-secondary to-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl ml-5 mr-10">
          <div class="card-body">
            <h2 className="text-center text-3xl font-extrabold text-green-900">
              6 MONTHS
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
              <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary uppercase text-center text-3xl font-extrabold text-green-900 bg-gradient-to-r from-secondary to-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-h-screen pb-12">
        <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary uppercase text-center text-3xl font-extrabold text-green-900 bg-gradient-to-r from-secondary to-primary">
          get started
        </button>
      </div>
    </div>
  );
};

export default Plans;
