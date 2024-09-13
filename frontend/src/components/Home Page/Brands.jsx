export default function Brands() {
    return (
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Our partnership
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini2020/assets/images/logo.svg"
              alt="capgemini"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.exekutive.biz/rekrute/file/jobOfferLogo/jobOfferId/104553"
              alt="CGI"
              width={258}
              height={68}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/82/Logo_ALTEN.jpg/300px-Logo_ALTEN.jpg"
              alt="Alten"
              width={158}
              height={48}
            />
            
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://www.viseo.com/themes/viseo/images/logo-viseo--mobile.svg"
              alt="Viseo"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://cdn.phenompeople.com/CareerConnectResources/CNEXEMEA/images/header-logo-1665988833003.png"
              alt="Cnexia"
              width={258}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  