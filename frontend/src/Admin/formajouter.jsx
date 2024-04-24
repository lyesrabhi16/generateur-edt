import '../Admin/Formajout.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function Ajouter({onAdd,typep,modify}){
    const[nom,SetNom]=useState(modify.nom);
    const[prenom,SetPrenom]=useState(modify.prenom);
    const[email,SetEmail]=useState(modify.email);
    const[password,Setmdp]=useState('');
    const [specialite, setSpecialite] = useState([]);
    const [gr, setGr] = useState([]);
    const [anneeBac, setAnneeBac] = useState(modify.anneebac ||null);
    const [code_specialite, setSpecia] = useState(modify.code_specialite ||null);
    const [niveau, setNiveau] = useState(modify.niveau ||null);
    const [matricule, setMatricule] = useState(modify.matricule);
    const [role, setRole] = useState(modify.role ||null);
    const [charges, setCharges] = useState(modify.charges ||null);
    const [id_groupe, setId_groupe] = useState(modify.id_groupe ||null);
    const [code_module, setCode_module] = useState(modify.code_module);
    const [nom_module, setNom_module] = useState(modify.nom_module);
    const [capacite, setCapacite] = useState(parseInt(modify.capacite,10));
    const [type, setType] = useState(modify.type ||typep);
    const [Bloc, setBloc] = useState(
        modify.type === 'SalleTD' || modify.type === 'SalleTP'
          ? modify.code_local?.substring(1, 2) || '' 
          : null
      );
      
      const [Salle, setSalle] = useState(
        modify.type === 'SalleTD' || modify.type === 'SalleTP'
          ? modify.code_local?.substring(3) || ''
          : modify.code_local?.substring(5) || ''
      );
    let code_local=type==='Amphi'?'Amphi'+Salle:'B'+Bloc+'S'+Salle;
    const [showmenu, setShowmenu] = useState(false);
    const personnes={matricule,nom,prenom,email,password,type,role,anneeBac,niveau,charges,id_groupe,code_specialite};
    const module={code_module,nom_module};
    const local={code_local,capacite,type};
    const options = [
        { key: 'COUR', label: 'Cours', checked: false },
        { key: 'TD', label: 'TD', checked: false },
        { key: 'TP', label: 'TP', checked: false }
    ];
    const [typeS, setTypeS] = useState(options);
    const handleClick = (key) => {
        const updatedOptions = [...typeS ] ;
     
        updatedOptions[key].checked = !updatedOptions[key].checked;
        setTypeS(updatedOptions);
    };

    const checkstyle=(key)=>{
        return{
            backgroundColor:typeS[key].checked?'#4070f4':null
        };
    }
    const iconstyle=(key)=>{
        return{
            display:typeS[key].checked?'block':null
        };
    }

    useEffect(() => {
        axios.get("http://localhost:3000/Specialite/",{
            withCredentials: true
          }).then(respo =>{
          setSpecialite(respo.data.specialites)
         })
         .catch(err => console.log(err));
     
    },[]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/groupe/",{
            withCredentials: true
          }).then(respo =>{
            const groupes = respo.data.groupes.filter((gr) => gr.code_specialite === code_specialite );
          setGr(groupes);
         })
         .catch(err => console.log(err));
     
    },[niveau,code_specialite]);

    
        useEffect(() => {
        axios.get("http://localhost:3000/seance/",{
            withCredentials: true
          }).then(respo =>{
            console.log(respo)
            const seances = respo.data.Seances.filter((sc) => sc.code_module === code_module );
          setSpecia(seances[0].code_specialite);
          seances.forEach((seance,index) => {
            const updatedOptions = [...typeS ] ;
            if(seance.type===updatedOptions[index].key){
                updatedOptions[index].checked = true;
                setTypeS(updatedOptions);
            }
           
        });
         })
         .catch(err => console.log(err));
     
    },[]);

    const ajouter = (e) => {
        e.preventDefault();
        if(typep==='Etudiant'|| typep==='Enseignant' || typep==='Administrateur'){
        if (password.length > 8 && nom !== '' && prenom !== '' && email !== '' && typep==='Etudiant'?anneeBac:role !== '' && typep==='Etudiant'?code_specialite !== '':typep==='Enseignant'?charges !== '':true && typep==='Etudiant'?niveau !== '':true) {
            if(modify==''){
                
                axios.post('http://localhost:3000/personne/',personnes,{
                    withCredentials: true
                  }).then(()=> onAdd())
            .catch(err=>{
                console.log(err)
            });
            }else{
                axios.put('http://localhost:3000/personne/'+modify.matricule,personnes,{
                    withCredentials: true
                  }).then((res)=> {onAdd();console.log(res)})
                .catch(err=>{
                    console.log(err)
                });
            }
            
           
        }
    }else if(typep==='Modules') {
        if(modify===''){
            axios.post('http://localhost:3000/module/',{
                withCredentials: true
              }, module).then(() => {
            typeS.forEach((option) => {
                if (option.checked) {
                    let type=option.label;
                    const seance = { code_module, code_specialite,type };
                    axios.post("http://localhost:3000/seance/",{
                        withCredentials: true
                      }, seance).then(()=>{onAdd()})
                        .catch(err => {console.log(err);});
                }
            });
        }).catch(err => console.log(err));
        }else{
            const code_module_new=code_module
            const modu={code_module_new,nom_module};
            axios.put('http://localhost:3000/module/'+modify.code_module,module,{
                withCredentials: true
              }).then(()=>{
                onAdd();
            });
        }
        

    }else{
        if(modify===''){//pour savoir s'il s'agit d'une modification ou un ajout
            axios.post('http://localhost:3000/Local/',local,{
                withCredentials: true
              }).then(()=> onAdd())
            .catch(err=>{
                console.log(local)
            });
        }else{
            const code_local_new=code_local
            const lc={code_local_new,capacite,type};
            axios.put('http://localhost:3000/Local/'+modify.code_local,lc,{
                withCredentials: true
              }).then(()=>onAdd())
            .catch(err=>{
                console.log(err)
            });
        }
       
    }

    }
    return(
        <form className="form flex flex-col justify-between z-10" onSubmit={ajouter}>
            <div className='close' onClick={()=>{onAdd()}}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
            {typep==='Modules'?<>
            <div className="flex w-full justify-between">
               <input type="text" placeholder="code module" value={code_module}  className='w-1/2' onChange={(e)=>{
                setCode_module(e.target.value);
               }}/>
               <input type="text" placeholder="nom module" value={nom_module} className="ml-4 w-1/2" onChange={(e)=>{
                setNom_module(e.target.value);
               }}/> 
            </div>

            <div className="flex w-full justify-between">
                <div className='w-1/2 down border-b border-b-gray-500 flex justify-between items-center relative' >
                <div className='flex w-full down  justify-between items-center' onClick={()=>{
                    setShowmenu(!showmenu);
                }}>
                    <span className='h-full text-gray-400' >selectionner un type</span>
                <FontAwesomeIcon icon={faAngleDown} className={showmenu ? ' rotate-180 text-sm text-gray-400' : 'text-sm text-gray-400'}/>
                </div>
                {showmenu?<ul className='droplist'>
                {options.map((option,index) => (
    <li key={index} className='flex items-center p-2' onClick={() => handleClick(index)}>
        <span className='checkbtn' style={checkstyle(index)}>
            <FontAwesomeIcon icon={faCheck} className='icon'  style={iconstyle(index)} />
        </span>
        <span>{option.label}</span>
    </li>
))}
            </ul>:null}
                </div>
            
               
              <select className='w-1/2 ml-4 border-b border-b-gray-500 text-gray-400' value={code_specialite}  onChange={(e)=>{
                setSpecia(e.target.value);
            }}>
               <option  disabled selected>Specialite</option>
               {specialite.map((spec,index)=>{
                return <option key={index} value={spec.code_specialite}>{spec.code_specialite}</option>
               })}
               
            </select>
            </div>
            </>:typep==='Local'?
            <>
            <div className="flex w-full justify-between">
            <select className='border-b border-b-gray-500' style={type==='Amphi'?{width:'100%'}:{width:'50%'}} value={type} onChange={(e)=>{
                    setType(e.target.value);
                }}>
                   <option value="" disabled selected>Type</option>
                   <option value="SalleTD">SalleTD</option>
                   <option value="SalleTP">SalleTP</option>
                   <option value="Amphi">Amphi</option> 
                </select>
               {type==='SalleTD'||type==='SalleTP'?<input type="text" placeholder="Bloc*" value={Bloc} className="ml-4 w-1/2" onChange={(e)=>{
                setBloc(e.target.value);
               }}/> :null}
            </div>
            <div className="flex w-full justify-between">
               <input type="text" placeholder={type==="Amphi"?"Amphi*":"*Salle"} value={Salle} className=" w-1/2" onChange={(e)=>{
                setSalle(e.target.value);
               }}/> 
               <input type="text" placeholder="Capacite*"   className="ml-4 w-1/2" onChange={(e)=>{
                setCapacite(parseInt(e.target.value, 10));
               }}/> 
            </div>
            </>
    
            :<>
            <div className="flex w-full justify-between">
               <input type="text" placeholder="Nom*" value={nom} className='w-1/2' onChange={(e)=>{
                SetNom(e.target.value);
               }}/>
               <input type="text" placeholder="Prenom*" value={prenom} className="ml-4 w-1/2" onChange={(e)=>{
                SetPrenom(e.target.value);
               }}/> 
            </div>

            <div className="flex w-full">
            <input type="email" placeholder="Email" value={email} className='w-full' onChange={(e)=>{
              SetEmail(e.target.value);
              
            }}/>
            <input placeholder="Mot de passe" value={password} className='w-full ml-4' onChange={(e)=>{
                Setmdp(e.target.value);
              }}/>
            </div>

            { typep==='Etudiant'?<div className="flex w-full justify-between">
                
                <select className='w-full border-b border-b-gray-500' value={anneeBac} onChange={(e)=>{
                    setAnneeBac(e.target.value, 10);
                }}>
                   <option value="" disabled selected>Annee du bac</option>
                   <option value="2019">2019</option>
                   <option value="2020">2020</option>
                   <option value="2021">2021</option> 
                </select>
            <select className='w-full ml-4 border-b border-b-gray-500' value={code_specialite} onChange={(e)=>{
                setSpecia(e.target.value);
            }}>
               <option value="" disabled selected>Specialite</option>
               {specialite.map((spec,index)=>{
                return <option key={index} value={spec.code_specialite}>{spec.code_specialite}</option>
               })}
               
            </select>
            </div>:null
            }
            <div className="flex w-full ">
            {typep==='Etudiant'?<select className='w-1/2 border-b border-b-gray-500' value={niveau} onChange={(e)=>{
                setNiveau(e.target.value);
            }}>
               <option value="" disabled selected>Niveau</option>
               <option value="L1">L1</option>
               <option value="L2">L2</option>
               <option value="L3">L3</option>
               <option value="M1">M1</option>
               <option value="M2">M2</option> 
            </select>:null
}
            {typep==='Enseignant' || typep==='Administrateur'? <select className='w-1/2 border-b border-b-gray-500' value={role} onChange={(e)=>{
                setRole(e.target.value);
            }}>
                
               <option value="" disabled selected>Role</option>
               { typep==='Administrateur'?<>
               <option value="admin pro">admin pro</option>
               <option value="Admin assistant">Admin assistant</option>
               <option value="Admin principale">Admin principale</option>
                </>:null}
               
            {typep==='Enseignant'?<>
            <option value="Maitre E">Maitre E</option>
               <option value="Maitre D">Maitre D</option>
               <option value="Maitre C">Maitre C</option>
               <option value="Maitre B">Maitre B</option>
            </>:null}
               
 
            </select>:null}
            

            <input type="text" placeholder="Matricule" defaultValue={matricule} className='w-1/2 ml-4' onChange={(e)=>{
              setMatricule(e.target.value, 10);
              
            }}/>
            </div>
            {
                typep==='Etudiant'?<div className="flex w-full ">
                <select className='w-full border-b border-b-gray-500' value={id_groupe} onChange={(e)=>{
                    setId_groupe(e.target.value);
                }}>
                   <option value="" disabled selected>Groupe</option>
                   {gr.map((groupe,index)=>{
                    return <option key={index} value={groupe.id_groupe}>{groupe.code_groupe}</option>
                   })}
                </select>
                </div>:null
            }
            { typep==='Enseignant'?<div className="flex w-full justify-between">
                
                <select className='w-full border-b border-b-gray-500' value={charges} onChange={(e)=>{
                    setCharges(e.target.value);
                }}>
                   <option value="" disabled selected>nombre horaire maximale</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
                </select>
            </div>:null
}
</>
            }
            <div className="flex w-full justify-center">
            <button type="submit" className='flex w-56 py-1 px-2 justify-center text-white bg-blue-700'>
             confirmer {modify !== '' ? "la modification" : null}
            </button>
            </div>
            
            
            
        </form>
    )
}
export default Ajouter;