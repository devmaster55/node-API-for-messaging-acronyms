const db = require("../models");
const Acronym = db.Acronym;

const acronyms = require("../dummyData.json");

/**
   * @function create
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Object} response object
   * @description save new acronym definition
   */
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
    from,
    limit,
    search,
  } = req.query;

  const regex = new RegExp(escapeRegex(search), 'gi');

  Acronym.find({ acronym: regex })
    .skip(parseInt(from))
    .limit(parseInt(limit))
    .sort({ _id: 'asc' })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving accounts."
      });
    });
};

const escapeRegex = (text) => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
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
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const acronym = req.params.acronym;

  Acronym.findOneAndUpdate({ acronym }, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update the object with acronym=${acronym}. Maybe object was not found!`
        });
      } else res.send({ message: `Acronym ${acronym} was updated successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating the object with acronym=" + acronym
      });
    });
};

const deleteOne = (req, res) => {
  const acronym = req.params.acronym;

  Acronym.findOneAndRemove({ acronym })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete object with acronym=${acronym}. Maybe object was not found!`
        });
      } else {
        res.send({
          message: `Acronym ${acronym} was deleted successfully!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete account with acronym=" + acronym
      });
    });
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