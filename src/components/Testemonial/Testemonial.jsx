import AboutImg from "../../assets/images/about.jpg";

const Testemonial = () => {
  return (
    <div>
      <section className="bg-gray-700 text-gray-300 py-8">
        <div className="lg:ml-12 ml-7 my-5">
          <h2 className="text-2xl font-bold">Testemonial</h2>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-12">
          <div className="lg:space-y-8 space-y-4 lg:ml-12 ml-7">
            <h2 className="lg:text-6xl text-4xl pb-3">
              Tell website visitors who you are and why they should choose your
              business
            </h2>
            <p className="lg:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              earum, tenetur quam repellendus architecto sequi consequatur
              deserunt illum? Repellat, consequatur quae. Ut, quas distinctio
              expedita perspiciatis molestias voluptas nam optio unde sunt
              dolor, quo dicta reiciendis! Alias nostrum tempore blanditiis
              earum eum autem sapiente voluptatum. Optio sunt perferendis
              maiores natus!
            </p>
            <div>
              <button className="text-sm cursor-pointer hover:bg-[#8CE723] text-white gap-2 bg-[#8BC34A] px-6 py-3 rounded-md transition duration-300">
                <span>Find Out More</span>
              </button>
            </div>
          </div>

          <div className="">
            <img className="rounded" src={AboutImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testemonial;
