import Cookies from 'js-cookie';
import image from '../assets/download.png'
import './Emploi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import Afficher from '../Admin/afficherEmploi'
import AfficherEmp from '../Admin/Afficher'
import axios from 'axios';
import toast from 'react-hot-toast';
function Emploi(){
    const [reverse,setReverse]=useState(false);
    const [reverse2,setReverse2]=useState(false);
    const [reverse3,setReverse3]=useState(false);
    const [reverse4,setReverse4]=useState(false);
    const [reverse5,setReverse5]=useState(false);
    const [reverse6,setReverse6]=useState(false);
    const [reverse8,setReverse8]=useState(false);
    const [reverse9,setReverse9]=useState(false);
    const [annee,setAnnee]=useState('Selectionner une annee');
    const [semestre,setSemestre]=useState('Choisir semestre');
    const [niveau,setNiveau]=useState('Choisir niveau');
    const [code_specialite,setCodespecialite]=useState('Choisir specialite');
    const [dureeSeance,setdureeSeance]=useState('durée seance');
    const [debut,setDebut]=useState('Heure de début');
    const [fin,setFin]=useState('Heure de fin');
    const [dureePose,setPose]=useState('durée pose');
    const [sections, setSections] = useState([]);
    const [newsections, setNewsections] = useState(sections);
    const [specialites, setSpecialites] = useState([]);
    const [supprime, setSupprime] = useState(false);
    const [emploi,setEmploi]=useState([]);
    const [emploi2,setEmploi2]=useState([]);
    const [Show,setShow]=useState(false);
    const [Show2,setShow2]=useState(false);
    const [groupes,setGroupes]=useState(0);
    const [id_sec,setIdsec]=useState(0);
    useEffect(() => {
        axios.get("http://localhost:3000/Specialite/",{
            withCredentials: true
          }).then(respo =>{
          setSpecialites(respo.data.specialites)
         })
         .catch(err => console.log(err));
     
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3000/section",{
            withCredentials: true
          }).then(respo =>{
            const sectionsFiltres = respo.data.sections.filter(section => section.niveau === niveau && section.code_specialite===code_specialite);
            const updatesection = sectionsFiltres.map(section => ({ ...section, generated: true }));
          setSections(updatesection);
          
          
         })
         .catch(err => console.log(err));
     
    },[code_specialite,niveau]);

    useEffect(() => {
        const updateSection=[... sections];
       
        if(sections.length>0){
            sections.map((section,index)=>{
            
                axios.get('http://localhost:3000/groupe',{
                    withCredentials: true
                  }).then((res)=>{                                                             
                    const grouprfilter=res.data.groupes.filter((gr)=> gr.code_section===section.code_section);
                    setGroupes(grouprfilter.length);
                    grouprfilter.map((gr)=>{
                       const id_groupe=parseInt(gr.id_groupe);
                       const sem=semestre[semestre.length-1]
                        axios.get('http://localhost:3000/EmploisTemps/groupes/'+id_groupe+"/"+sem+"/"+annee+"/"+niveau,{
                    withCredentials: true
                  }).then(()=>{
                    updateSection[index].generated=true;
                    setNewsections(updateSection);
                  }).catch(()=> {
                    updateSection[index].generated=false;
                    setNewsections(updateSection);
                })
                    })
                   
        
                  })
                .catch(err=>{
                    console.log(err)
                });
            })
        }else{
            setNewsections([]);//refresh le tableau d'affichage et afficher rien s'il n'existe pas de section pour niveau et la specialite choisie
        }
        }
     
    ,[sections,semestre,niveau,annee]);
    
    
    let user=Cookies.get('user');
  if(user){
    user=JSON.parse(user);
  }
  const np=user?user.nom+' '+user.prenom:'';
  const role=user?user.role : '';

  const generer=(id_section)=>{
    
        const duree=dureeSeance.split('h');
        const db=debut.split('h');
        const fn=fin.split('h');
        
        const data={
            semestre:semestre[semestre.length-1],
            temps_debut:JSON.stringify({
                h:parseInt(db[0]),
                m:parseInt(db[1])
            }),
            
            duree_creneaux:JSON.stringify({
                h:parseInt(duree[0]),
                m:parseInt(duree[1])
            }),
            minutes_entre_creneaux:parseInt(dureePose),
            annee
        }
    axios.post("http://localhost:3000/generate/"+id_section,data,{
                withCredentials: true
              }).then((res)=>{
                setEmploi(res.data.creneaux);
                setShow(true);
              }).catch((err)=>{
                console.log(err)
              })
    
   
  }
  const affiche=(id_section)=>{
                const sem=semestre[semestre.length-1];
                axios.get("http://localhost:3000/creneau/section/"+id_section+'/'+sem+'/'+annee,{
                    withCredentials: true
                  }).then((res)=>{
                    setEmploi2(res.data.Creneaux);
                    console.log(emploi2)
                    if(emploi2.Dimanche || emploi2.Samedi){
                        setShow2(!Show2);
                    }
                  }).catch((err)=>{
                    console.log(err)
                  })
  }
  

  const handleAdd = () => {
    
    setShow(false);//fermer le formulaire
  };
    return(
        <div className='flex flex-col w-full h-full main px-10 z-0 relative' id={(Show || Show2) ? 'mainflou' : undefined}>
            {Show?<Afficher onAdd={handleAdd} data={emploi} taille={groupes} db={debut} dr={dureeSeance} fn={fin} ps={dureePose} sm={semestre} an={annee} section={id_sec} />:null /*formulaire d'ajout*/}
            {Show2?<AfficherEmp emploie={emploi2}/>:null}
            <header className="flex w-full  justify-between  mt-8 h-fit">
    <div className="">
    <p className="text-black  text-3xl font-bold">Emploi du temps</p>
    </div>
    <div className="flex items-center">
    <img src={image} className="h-10 w-10 image"></img>
    <div className="flex flex-col justify-center ml-2">
        <p className='font-semibold'>{np}</p>
        <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
</header>
<main className='w-full mt-12'>
    <div className='flex w-full justify-between'>
        <div className='drop relative' onClick={()=>{
            setReverse(!reverse);
        }}>
            <span className='text-black'>{annee}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-64' style={{display:reverse?'block':'none'}}>
                <li onClick={()=>{
                    setAnnee(2024);
                }} style={{borderLeft:annee===2024?'3px solid #0029FF':null}}>2023/2024</li>
                <li onClick={()=>{
                    setAnnee(2023);
                }} style={{borderLeft:annee===2023?'3px solid #0029FF':null}}>2022/2023</li>
                <li onClick={()=>{
                    setAnnee(2022);
                }} style={{borderLeft:annee===2022?'3px solid #0029FF':null}}>2021/2022</li>
                <li onClick={()=>{
                    setAnnee(2021);
                }} style={{borderLeft:annee===2021?'3px solid #0029FF':null}}>2020/2021</li>
                <li onClick={()=>{
                    setAnnee(2020);
                }} style={{borderLeft:annee===2020?'3px solid #0029FF':null}}>2019/2020</li>
             </ul>
        </div>

        <div className='drop relative' onClick={()=>{
            setReverse2(!reverse2);
        }}>
            <span className='text-black'>{semestre}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse2 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-28' style={{display:reverse2?'block':'none'}}>
                <li onClick={()=>{
                    setSemestre("semestre 1");
                }} style={{borderLeft:semestre==="semestre 1" ?'3px solid #0029FF':null}}>semestre 1</li>
                <li onClick={()=>{
                    setSemestre("semestre 2");
                }} style={{borderLeft:semestre==="semestre 2"?'3px solid #0029FF':null}}>semestre 2</li>
             </ul>
        </div>

        <div className='drop relative' onClick={()=>{
            setReverse3(!reverse3);
        }}>
            <span className='text-black'>{niveau}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse3 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-64' style={{display:reverse3?'block':'none'}}>
                <li onClick={()=>{
                    setNiveau('L1');
                }} style={{borderLeft:niveau==='L1'?'3px solid #0029FF':null}}>L1</li>
                <li onClick={()=>{
                    setNiveau('L2');
                }} style={{borderLeft:niveau==='L2'?'3px solid #0029FF':null}}>L2</li>
                <li onClick={()=>{
                    setNiveau('L3');
                }} style={{borderLeft:niveau==='L3'?'3px solid #0029FF':null}}>L3</li>
                <li onClick={()=>{
                    setNiveau('M1');
                }} style={{borderLeft:niveau==='M1'?'3px solid #0029FF':null}}>M1</li>
                <li onClick={()=>{
                    setNiveau('M2');
                }} style={{borderLeft:niveau==='M2'?'3px solid #0029FF':null}}>M2</li>
             </ul>
        </div>

        <div className='drop relative' onClick={()=>{
            setReverse4(!reverse4);
        }}>
            <span className='text-black'>{code_specialite}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse4 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-32' style={{display:reverse4?'block':'none',height:'98px'}}>
             {specialites.map((spec,index)=>{
                return <li key={index} onClick={()=>{
                    setCodespecialite(spec.code_specialite);
                }} style={{borderLeft:code_specialite===spec.code_specialite?'3px solid #0029FF':null}}>{spec.code_specialite}</li>
               })}
                
               
             </ul>
        </div>

    </div>

    {(code_specialite!='Choisir specialite' && niveau!='Choisir niveau' && annee!='Selectionner une annee' && semestre!='Choisir semestre')?
    <>
    <div className='w-full'>
        <p className="text-black  text-2xl font-bold mt-8">Champs pour generation d&apos;emploi du temps</p>
        <div className='w-full flex justify-between mt-6'>

        <div className='drop relative' onClick={()=>{
            setReverse8(!reverse8);
        }}>
            <span className='text-black'>{debut}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse8 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-28' style={{display:reverse8?'block':'none'}}>
                <li onClick={()=>{
                    setDebut('8h00');
                }} style={{borderLeft:debut==='8h00'?'3px solid #0029FF':null}}>8h00</li>
                <li onClick={()=>{
                    setDebut('8h30');
                }} style={{borderLeft:debut==='8h30'?'3px solid #0029FF':null}}>8h30</li>
                
             </ul>
        </div>

        <div className='drop relative' onClick={()=>{
            setReverse9(!reverse9);
        }}>
            <span className='text-black'>{fin}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse9 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-40' style={{display:reverse9?'block':'none'}}>
                <li onClick={()=>{
                    setFin('15h00');
                }} style={{borderLeft:fin==='15h00'?'3px solid #0029FF':null}}>15h00</li>
                <li onClick={()=>{
                    setFin('16h00');
                }} style={{borderLeft:fin==='16h00'?'3px solid #0029FF':null}}>16h00</li>
                <li onClick={()=>{
                    setFin('17h00');
                }} style={{borderLeft:fin==='17h00'?'3px solid #0029FF':null}}>17h00</li>
                
             </ul>
        </div>

        <div className='drop relative' onClick={()=>{
            setReverse5(!reverse5);
        }}>
            <span className='text-black'>{dureeSeance}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse5 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-40' style={{display:reverse5?'block':'none'}}>
                <li onClick={()=>{
                    setdureeSeance('1h00');
                }} style={{borderLeft:dureeSeance==='1h00'?'3px solid #0029FF':null}}>1h00</li>
                <li onClick={()=>{
                    setdureeSeance('1h30');
                }} style={{borderLeft:dureeSeance==='1h30'?'3px solid #0029FF':null}}>1h30</li>
                <li onClick={()=>{
                    setdureeSeance('2h00');
                }} style={{borderLeft:dureeSeance==='2h00'?'3px solid #0029FF':null}}>2h00</li>
             </ul>
        </div>

        <div className='drop relative' onClick={()=>{
            setReverse6(!reverse6);
        }}>
            <span className='text-black'>{dureePose}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse6 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-40' style={{display:reverse6?'block':'none'}}>
                <li onClick={()=>{
                    setPose('5');
                }} style={{borderLeft:dureePose==='5'?'3px solid #0029FF':null}}>5</li>
                <li onClick={()=>{
                    setPose('10');
                }} style={{borderLeft:dureePose==='10'?'3px solid #0029FF':null}}>10</li>
                <li onClick={()=>{
                    setPose('20');
                }} style={{borderLeft:dureePose==='20'?'3px solid #0029FF':null}}>20</li>
             </ul>
        </div>

        

        </div>

    </div>
    <table className='mt-10 z-0 w-full aks' >
        <tr className='head'>
        <td>Id</td>
        <td>specialite</td>
        <td>niveau</td>
        <td>status</td>
        <td>section</td>
        <td>Action</td>
        </tr>
        {newsections.map((section,index)=>{
            
            return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{section.code_specialite}</td>
                  <td>{section.niveau}</td>
                  <td>
                  
                  {section.generated?<FontAwesomeIcon icon={faCheck} className='text-white bg-green-500 p-1 rounded-3xl'/>:
                  <FontAwesomeIcon icon={faXmark} className='text-white bg-red-600 px-1.5 py-1 rounded-3xl'/>
                  }
                 
                  </td>
                  <td>{section.code_section}</td>
                  <td>

                  {section.generated?
                  <>
                   <FontAwesomeIcon icon={faEye} className='ml-4 text-blue-700 cursor-pointer' onClick={()=>{
                    affiche(section.id_section);
            }}/>
               <FontAwesomeIcon icon={faPen} className='ml-8 text-blue-700 cursor-pointer' onClick={()=>{
                
                }}/>
                <FontAwesomeIcon icon={faTrash} className='ml-8 text-red-600 cursor-pointer' onClick={()=>{
                 
                   setSupprime(!supprime);
                 
                 
               }}/>
                  </>
                  
               
               :<>
               <FontAwesomeIcon icon={faAdd} className=' ml-4 text-blue-700 text-xl cursor-pointer' onClick={()=>{
                generer(section.id_section);
                setIdsec(section.id_section);
                }}/>
               
               </>}
                  </td>
                  
                 
                </tr>
              );
             
        })}
        
    </table>
    </>
    :null}

    
</main>
        </div>
    )
}
export default Emploi;