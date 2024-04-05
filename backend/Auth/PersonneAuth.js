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

    const token = jwt.sign({ id: data.id, email: data.email }, process.env.JWTSecret , { expiresIn: '1h' }); // Modifier 'votre_clé_secrète' selon votre clé secrète
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