export const addSectionValidator = (req, res, next) => {
    const { code_section } = req.body;

    const missingFields = [];

    if (code_section === undefined) {
        missingFields.push("code_section");
    }
    if (missingFields.length > 0) {
        res.status(400).json({
        status: "error",
        message:
            "missing required fields: " +
            missingFields
        });
        return false;
    }
    next();
    return true;
};

export const updateSectionValidator = (req, res, next) => {
    const { code_section_new } = req.body;
    const missingFields = [];
    if(code_section_new === undefined){
        missingFields.push("code_section_new");
    };

    if (missingFields.length > 0) {
        res.status(400).json({
        status: "error",
        message:
            "missing required fields: " +
            missingFields
        });
        return false;
    }

    next();
    return true;
};