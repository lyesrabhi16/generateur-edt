import {Router } from "express";
import { addOccupationValidator, getOccupationDayValidator } from "../validators/OccupationValidators.js";

import { getOccupationId , 
         getOccupationDay ,
         deleteOccupationById,
         updateOccupationById,
         insertOneOccupation,
         getAllOccupation
                
} from "../controllers/OccupationController.js";


const OccupationRouter = Router();


OccupationRouter.get('/:id_occup' , getOccupationId );
/* @MassinS
    ! modified (optional)
    added the getOccupationDayValidator 
    for more info check the validator function
    
    ? note: remove this comment after reading 

    --written by @lyesrabhi16
*/
OccupationRouter.get('/jours/:jour', getOccupationDayValidator, getOccupationDay );

OccupationRouter.get('', getAllOccupation );


OccupationRouter.delete('/:id_occup',deleteOccupationById);

OccupationRouter.put('/:id_occup',addOccupationValidator,updateOccupationById);

OccupationRouter.post('/',addOccupationValidator, insertOneOccupation);




export default OccupationRouter;


