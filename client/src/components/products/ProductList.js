import { Link } from "react-router-dom";
import Product from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

const products = [
  {name: "Product B", price: 20, image_url: "https://cdn.vox-cdn.com/thumbor/RZ2VTtZu8u-8hDclDfLGYKCaSfU=/0x106:2040x1254/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/70218969/bfarsace_211129_4901_0006.0.jpg"},
  {name: "Product C", price: 500, image_url: "https://m.media-amazon.com/images/I/61bijEgI8WL._AC_SS450_.jpg"},
  {name: "Product D", price: 67, image_url: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/16:9/w_2000,h_1125,c_limit/Transpo_G70_TA-518126.jpg"},
  {name: "Product G", price: 15, image_url: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/16:9/w_2000,h_1125,c_limit/Transpo_G70_TA-518126.jpg"},
  {name: "Product E", price: 33, image_url: "https://cdn.vox-cdn.com/thumbor/RZ2VTtZu8u-8hDclDfLGYKCaSfU=/0x106:2040x1254/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/70218969/bfarsace_211129_4901_0006.0.jpg"},
  {name: "Product F", price: 990, image_url: "https://m.media-amazon.com/images/I/61bijEgI8WL._AC_SS450_.jpg"},
]

const locations = [
  "Irvine",
  "Newport",
  "Tustin",
  "Costa Mesa",
  "Santa Ana",
  "Aliso Viejo"
];

const distances = [1, 2, 3, 5, 10];

const availability = ["Available now", "Available soon"];

function FilterMenuLeft() {
  return (
    <>
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">Distance</h5>
        <div className="d-flex flex-wrap my-2">
          {distances.map((v, i) => {
            return (
              <Link
                key={i}
                to="/products"
                className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2"
                replace
              >
                {`${v} miles`}
              </Link>
            );
          })}
        </div>
      </li>

      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Locations</h5>
        <div className="d-flex flex-column">
          {locations.map((v, i) => {
            return (
              <div key={i} className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {v}
                </label>
              </div>
            );
          })}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Availability</h5>
        <div className="d-flex flex-column">
          {availability.map((v, i) => {
            return (
              <div key={i} className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {v}
                </label>
              </div>
            );
          })}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-2">Price Range</h5>
        <div className="d-grid d-block mb-3">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Min"
              defaultValue="100000"
            />
            <label htmlFor="floatingInput">Min Price</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Max"
              defaultValue="500000"
            />
            <label htmlFor="floatingInput">Max Price</label>
          </div>
          <button className="btn btn-dark">Apply</button>
        </div>
      </li>
    </ul>
    </>
  );
}

function ProductList() {

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />

      <div className="h-scroller d-block d-lg-none">
        <nav className="nav h-underline">
          {distances.map((v, i) => {
            return (
              <div key={i} className="h-link me-2">
                <Link
                  to="/products"
                  className="btn btn-sm btn-outline-dark rounded-pill"
                  replace
                >
                  {v}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="row mb-3 d-block d-lg-none">
        <div className="col-12">
          <div id="accordionFilter" className="accordion shadow-sm">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFilter"
                  aria-expanded="false"
                  aria-controls="collapseFilter"
                >
                  Filter Products
                </button>
              </h2>
            </div>
            <div
              id="collapseFilter"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFilter"
            >
              <div className="accordion-body p-0">
                <FilterMenuLeft />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4 mt-lg-3">
        <div className="d-none d-lg-block col-lg-3">
          <div className="border rounded shadow-sm">
            <FilterMenuLeft />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col-lg-12 d-flex flex-row">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What do you wanna rent today?"
                    aria-label="search input"
                  />
                  <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={["fas", "search"]} />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3"
              }
            >

              {
                products.map((p, i) => {
                  return (
                    <Product key={i} product_name={p.name} price={`$${p.price}`} image_url={p.image_url}/>
                  );
                })
              }

            </div>

            {/* Updates required based on number of pages */}
            <div className="d-flex align-items-center mt-auto">
              <span className="text-muted small d-none d-md-inline">
                Showing 6 of 100
              </span>
              <nav aria-label="Page navigation example" className="ms-auto">
                <ul className="pagination my-0">
                  <li className="page-item">
                    <a className="page-link" href="!#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="!#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="!#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="!#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="!#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
