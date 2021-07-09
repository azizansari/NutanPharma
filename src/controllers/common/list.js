const _ = require('lodash');
const { sendList } = require('../../middleware/requests-helpers');


const list = (Models) => async (req, res, next) => {
  let {
    query: { limit, skip, search },
    params: { collection }
  } = req;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const query = {};
    if(collection == 'medicine'){
      if (search) {
        _.extend(query, { $or : [ {productName: new RegExp(`${search}`, 'i'),},{ brand: new RegExp(`${search}`, 'i')},  {categories: new RegExp(`${search}`, 'i')}, {batchNo: new RegExp(`${search}`, 'i')}] })
      }
    } 
    else if(collection == 'brands'){
      console.log(">>>>search", search)
      if (search) {
        _.extend(query, { $or : [ {brand: new RegExp(`${search}`, 'i'),},{ desc: new RegExp(`${search}`, 'i')},  {other: new RegExp(`${search}`, 'i')}] })
      }
    }
    else if(collection == 'categories'){
      if (search) {
        _.extend(query, { $or : [ {category: new RegExp(`${search}`, 'i'),},{ desc: new RegExp(`${search}`, 'i')},  {other: new RegExp(`${search}`, 'i')}] })
      }
    } 
    else if(collection == 'orders'){
      if (search) {
        _.extend(query, { $or : [ {customerName: new RegExp(`${search}`, 'i'),}] })
      }
    }

    console.log(collection)
    const total = await Models[collection].count();
    const data = await Models[collection].find(query)
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });

    return sendList(res, { total, data }, );
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
