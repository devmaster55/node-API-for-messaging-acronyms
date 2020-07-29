const db = require("../models");
const Acronym = db.Acronym;

const acronyms = require("../dummyData.json");

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
          err.message || "Some error occurred while creating the acronym."
      });
    });
};

const createAll = (req, res) => {
  try {
    acronyms.forEach(element => {
      key = Object.keys(element);
      value = Object.values(element);

      let acronym = Acronym.create({
        acronym: key[0],
        definition: value[0],
      });
    });
    res.send({
      message: "All acronyms were inserted successsfully."
    });
  } catch ({ err }) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while inserting all acronyms."
    });
    return;
  }
};

const findAll = (req, res) => {
  const {
    offset,
    limit,
    search,
  } = req.query;

  res.send({
    message: `offset : ${offset}, limit: ${limit}, search: ${search}`
  });
};

const findOne = (req, res) => {
  const {
    acronym,
  } = req.query;
  
  Acronym.findOne({ acronym })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found object with acronym = " + acronym });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving object with acronym = " + acronym });
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

module.exports = {
  create,
  createAll,
  findAll,
  findOne,
  findRandom,
  update,
  deleteOne,
};