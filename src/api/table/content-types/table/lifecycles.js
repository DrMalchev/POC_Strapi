// http://localhost:1337/api/tables?populate=*
// for api to return components too
module.exports = {

    beforeUpdate(event) {
        const { data, where, select, populate } = event.params;
        if (data.PriseWithoutVAT && data.ContragentPercentage) {
            data.ContragentPrice = data.PriseWithoutVAT * data.ContragentPercentage / 100
        }
        console.log(event.params)
        console.log(data.InvoiceNumberAndDate)
    },
};
