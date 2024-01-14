export default function About() {
  return (
    <section
      id="#about"
      className="mt-12 md:mt-24 mx-auto w-[90%] md:w-full md:px-6 mb-10"
    >
      <div className="bg-black text-white mx-auto md:w-[44rem] w-full h-[28rem] md:h-[28rem] rounded-lg md:rounded-xl">
        <p className="px-4 py-4 md:px-12">
          As a successful NGO, Save-Aid has carried out a lot of projects that
          spans from Orphan parties, Desk donations, Food donation, Clothe
          donation among others...
        </p>
        <div className="w-4/5 md:w-3/5 mt-2 mx-auto grid grid-cols-2 gap-12 place-items-center px-4 py-1 md:px-12 md:py-4">
          <div className="shared-styles">
            <h4>Projects</h4>
            <p>
              500<small> +</small>
            </p>
          </div>
          <div className="shared-styles">
            <h4>Benefeciaries</h4>
            <p>
              1500<small> +</small>
            </p>
          </div>
          <div className="shared-styles">
            <h4>Donors</h4>
            <p>
              500<small> +</small>
            </p>
          </div>
          <div className="shared-styles">
            <h4>Volunteers</h4>
            <p>
              50<small> +</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
