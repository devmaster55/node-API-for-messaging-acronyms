const db = require("../models");
const Acronym = db.Acronym;

const create = (req, res) => {
  const {
    acronym,
    definition,
  } = req.body;

  // Validate request
  if (!acronym || !definition) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an acronym
  const acronymCollection = new Acronym({
    acronym,
    definition,
  });

  acronymCollection
    .save(acronymCollection)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the account."
      });
    });
};

const createAll = (req, res) => {

}

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
  createAll,
  findAll,
  findOne,
  findRandom,
  update,
  deleteOne,
  deleteAll,
};