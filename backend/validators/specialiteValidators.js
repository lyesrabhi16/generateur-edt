export const addSpecialiteValidator = (req, res, next) => {
    const { code_specialite, nom_specialite } = req.body;
    const missingFields = [];
    if (code_specialite === undefined) {
        missingFields.push("code_specialite");
    }
    if (nom_specialite === undefined) {
        missingFields.push("nom_specialite");
    }
    if (missingFields.length > 0) {
        res.status(400).json({
        status: 400,
        message:
            "missing required fields: " +
            missingFields
        });
        return false;
    }
    next();
    return true;
};

export const updateSpecialiteValidator = (req, res, next) => {
    const { code_specialite_new, nom_specialite } = req.body;
    const { code_specialite } = req.params;
    
    if(nom_specialite === undefined){
        res.status(400).json({
            status: 400,
            message: "missing required field: nom_specialite"
        });
        return false;
    };

    if(code_specialite_new === undefined){
        req.body.code_specialite_new = code_specialite;
    }

    next();

};