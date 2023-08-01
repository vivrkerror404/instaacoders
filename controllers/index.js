function manipulateNumber(req, res) {
  const inputNumber = parseInt(req.query.number);

  if (isNaN(inputNumber)) {
    return res
      .status(400)
      .json({ result:"", message: "Invalid input. Please provide a valid integer number." });
  }

  let output = "";
  if (inputNumber % 5 === 0) {
    output += "L";
  }
  if (inputNumber % 7 === 0) {
    output += "R";
  }
  if (!output) {
    output = inputNumber;
  }

  return res.status(200).json({ result: output, message:"Result fetched" });
}

module.exports = { manipulateNumber };
