const currencyModel = require('../models/currencyModel')

const convertCurrency = async(req, res) => {
  const { from, to } = req.params
  const { currencyValueToBeConverted } = req.body
  try
  {
    const fromRate = await currencyModel.findOne({code:from})
    const toRate = await currencyModel.findOne({code:to})
  
    const result = (toRate.value/fromRate.value) * (currencyValueToBeConverted)
    res.status(200).json({result})
  }
  catch(error)
  {
    res.status(500).json({message:error.message})
  }
}

module.exports = { convertCurrency }