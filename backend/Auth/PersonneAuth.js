import { selectPersonneByEmail } from "../DB/personne.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


    export const AuthOnePersonne = (req,res)=>{

    const {email,password}=req.body;
      selectPersonneByEmail(email).then( async (data)=>{
        const response = {
            status: "success",
            message: "Personne trouvé ",
            personne: data,
          };

    
          if(data===null ) {
        response.status="Error";
        response.message="Email ou mot de passe est incorrect ";
        response.personne=null;
        /* @MassinS 
          
          * i think you forgot this here, 
          * there isn't a response from the server until timeOut
          * if that is not the case then remove it
          
          ?--written by @lyesrabhi16
        */
        res.status(401).json(response);
       return;
    }
    const passwordFound =data.password;
    const passwordMatch = await bcrypt.compare(password,passwordFound);
    console.log(passwordMatch);

    if (!passwordMatch) {
        response.status = "Error";
        response.message = "Email ou mot de passe incorrect";
        response.personne = null;
        res.status(401).json(response); // 401 Unauthorized pour indiquer une erreur d'authentification
        return;
    }
    /* @MassinS
      !modified 
        * changed from data.id to data.matricule
      ?--written by @lyesrabhi16
    */
    const token = jwt.sign({ id: data.matricule, email: data.email }, process.env.JWTSecret , { expiresIn: '1h' }); // Modifier 'votre_clé_secrète' selon votre clé secrète
    response.token = token;
    
    res.cookie("token",token);
     res.status(200).json(response);

      }).catch((err)=>{
        res.status(500).json({
            status:"Error",
            Message:err
        })
      }) 

}