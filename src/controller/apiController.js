const { Request, Response } = require("express");

const apiIndexController = (req, res) => {
  const response = {
    message: "Este es el index",
  };
  res.json(response);
};

module.exports = {
  apiIndexController,
};
