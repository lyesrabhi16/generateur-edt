export const saveValidator = (req, res, next) => {
  const { data, semestre, annee, override } = req.body;

  const missingFields = [];

  if (!data) {
    missingFields.push("data");
  }
  if (!annee) {
    missingFields.push("annee");
  }
  if (!semestre) {
    missingFields.push("semestre");
  }

  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "Error",
      message: "missing fields: " + missingFields,
    });
  }

  if (override === "true") {
    req.body.override = true;
  } else if (override === "false") {
    req.body.override = false;
  }

  try {
    req.body.data = JSON.parse(data);
    next();
  } catch {
    return res.status(400).json({
      status: "Type Error",
      message:
        "Failed to Parse data, data attribute value must be JSON string ",
    });
  }
};

export const generateValidator = (req, res, next) => {
  const { semestre } = req.body;

  const missingFields = [];

  if (!semestre) {
    missingFields.push("semestre");
  }

  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "Error",
      message: "missing fields: " + missingFields,
    });
  }

  next();
};
