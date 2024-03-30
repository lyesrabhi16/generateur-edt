export const insertOneEmploisValidator = (req, res, next) => {
    const { id_groupe } = req.body;
    const missingFields = [];
    if (id_groupe === undefined) {
        missingFields.push('id_groupe');
    }

    if (missingFields.length > 0){
        return res.status(400).json({
            status: 'Error',
            message: 'Missing required fields: ' + missingFields
        });
    }

    next();
}