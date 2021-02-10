
const data = {
    portfolios: [
        {
            _id: '3434rf4f222222224343',
            title: "Job in India",
            company: "it was no good les sal",
            companyWebsite: "rrji",
            location: "freferferf",
            jobTitle: "Frfefrf",
            description: "lorem2ofi hfu3ufhb",
            startDate: '20/1/2014',
            endDate: '31/1/2020'
        },
        {
            _id: '3434rf4f78784343',
            title: "Job in India",
            company: "it was no good les sal",
            companyWebsite: "rrji",
            location: "freferferf",
            jobTitle: "Frfefrf",
            description: "lorem2ofi hfu3ufhb",
            startDate: '20/1/2014',
            endDate: '31/1/2020'
        },
        {
            _id: '3434rf4f4343dwedwdwedwedwedwedwed',
            title: "Job in India",
            company: "it was no good les sal",
            companyWebsite: "rrji",
            location: "freferferf",
            jobTitle: "Frfefrf",
            description: "lorem2ofi hfu3ufhb",
            startDate: '20/1/2014',
            endDate: '31/1/2020'
        },
    ]
}

exports.portfolioQueries = {
    hello: () => {
        return "ehllop feifi weifjo"
    },

    portfolio: (root, { id }) => {
        const portfolio = data.portfolios.find(p => p._id === id)
        return portfolio
    },

    portfolios: () => {
        return data.portfolios
    },


}

exports.portfolioMutations = {
    createPortfolio: (root, { input }) => {
        const _id = require('crypto').randomBytes(10).toString('hex');
        const newPortfolio = { ...input };
        newPortfolio._id = _id;
        data.portfolios.push(newPortfolio);
        return newPortfolio;
    },

    updatePortfolio: (root, { id, input }) => {
        const index = data.portfolios.findIndex(p => p._id === id);
        const oldPortfolio = data.portfolios[index]
        const newPortfolio = { ...oldPortfolio, ...input }
        data.portfolios[index] = newPortfolio;
        return newPortfolio
    }
}