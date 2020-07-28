// const db = require("../models");

const create = (req, res) => {
  
};

const findAll = (req, res) => {
 
};

const findOne = (req, res) => {
  const acronym = req.params.acronym;
  
  res.send({
    message: `acronym : ${acronym}`
  });
};

const findRandom = (req, res) => {
  const count = req.params.count;
  
  res.send({
    message: `count : ${count}`
  });
};

const update = (req, res) => {
  
};

const deleteOne = (req, res) => {

};

const deleteAll = (req, res) => {

};

module.exports = {
  create,
  findAll,
  findOne,
  findRandom,
  update,
  deleteOne,
  deleteAll,
};