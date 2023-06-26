const currencyModel = require('../models/currencyModel')
const currencyInitialData = require('../data/currencyData')

const getAllConversionRate = async(req, res) => {
  try
  {
    const currencyData = await currencyModel.find()
    if (currencyData.length === 0)
    {
      const currencyData = await currencyModel.insertMany(currencyInitialData)
    }
    res.status(200).json(currencyData)
  }
  catch(error)
  {
    res.status(500).json({message:error.message})
  }
}

module.exports =  { getAllConversionRate }