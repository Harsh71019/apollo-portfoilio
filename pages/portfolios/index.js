import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import axios from "axios"
import PortfolioCard from "../../components/portfolios/PortfolioCard"
import Link from "next/link"

const fetchPortfolios = () => {
  const query = `query Portfolios {portfolios {
    _id,
    title,
    company,
    companyWebsite,
    location,
    jobTitle,
    description,
    startDate,
    endDate
  }}`
  return axios.post('http://localhost:3000/graphql', { query: query })
    .then(({ data: graph }) => graph.data)
    .then(data => data.portfolios)
}

const createPortfolios = () => {
  const query = `
  mutation CreatePortfolio {
    createPortfolio(input:{
          	 title: "Job in ffrref",
            company: "it was no good les sal",
            companyWebsite: "rrji",
            location: "freferferf",
            jobTitle: "Frfefrf",
            description: "lorem2ofi hfu3ufhb",
            startDate: "20/1/2014",
            endDate: "31/1/2020",
      
    }) {
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }
  `
  return axios.post('http://localhost:3000/graphql', { query: query })
    .then(({ data: graph }) => graph.data)
    .then(data => data.createPortfolio)
}

const Portfolios = ({ data }) => {

  const [portfolios, setPortfolios] = useState(data.portfolios)


  console.log(data)
  const createPortfolio = async () => {
    const newPortfolio = await createPortfolios()
    const newPortfolios = [...portfolios, newPortfolio];
    setPortfolios(newPortfolios)

  }




  return (
    <>
      {/* NAVBAR START */}
      <Hero />
      {/* NAVBAR ENDS */}
      <div className="container">
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Portfolios</h1>
            </div>
          </div>
          <button onClick={createPortfolio} className="btn btn-primary">Create Portfolio</button>
        </section>
        <section className="pb-5">
          <div className="row">
            {portfolios.map(portfolio => (
              <div key={portfolio._id} className="col-md-4">
                <Link
                  href="/portfolios/[id]"
                  as={`/portfolios/${portfolio._id}`}>
                  <a className="card-link">
                    <PortfolioCard portfolio={portfolio} />
                  </a>
                </Link>
              </div>
            ))}

          </div>
        </section>
        <a href="" className="btn btn-main bg-blue ttu">
          See More Portfolios
        </a>
      </div>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios();
  return { data: { portfolios } }
}


export default Portfolios;
