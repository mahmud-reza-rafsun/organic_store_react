import "./Action.css";
const Action = () => {
  return (
    <div>
      <div className="py-7 text-center">
        <h2 className="font-semibold text-xl">About Us</h2>
      </div>
      <div>
        <section className="bg-call h-96 py-56 bg-no-repeat bg-cover bg-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#111111]/30 flex justify-center items-center">
            <div className="z-10 text-white">
              <h3 className="lg:text-5xl text-3xl font-semibold text-center">
                The Organic Store!!!
              </h3>
              <p className="lg:text-lg text-base font-light w-2/3 mx-auto text-center my-3">
                think of what you want your visitors to do next maybe they
                should contact you?
              </p>
              <div className="flex justify-center">
                <button className="text-sm border hover:border-[#8BC34A] cursor-pointer text-white font-semibold hover:bg-[#8BC34A] bg-transparent px-5 py-3 rounded-md transition duration-300">
                  <span>Get in Tuch</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Action;
