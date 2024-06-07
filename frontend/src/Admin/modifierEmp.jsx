import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
function modifierEmp({emploi,groupes,debut,duree,fin,pose,onAdd}){
    const [jour1, setJour1] = useState('');
    const [seance1, setSeance1] = useState('');
    const [groupe1, setgroupe1] = useState('');
    const [jour2, setJour2] = useState('');
    const [seance2, setSeance2] = useState('');
    const [groupe2, setgroupe2] = useState('');
    const [type, setType] = useState('Cour');
    function calculerNombreSeances(debut, fin, duree, pose) {
        // Convertir les heures de début et de fin en objets Date
        const [debutHeures, debutMinutes] = debut.split('h').map(Number);
        const [finHeures, finMinutes] = fin.split('h').map(Number);
        const debutDate = new Date(2000, 0, 1, debutHeures, debutMinutes);
        const finDate = new Date(2000, 0, 1, finHeures, finMinutes);
        
        // Convertir la durée en minutes
        const [dureeHeures, dureeMinutes] = duree.split('h').map(Number);
        const dureeEnMinutes = (dureeHeures * 60 + dureeMinutes) + Number(pose);
        
        // Calculer la différence en minutes entre l'heure de début et de fin
        const differenceEnMinutes = (finDate - debutDate) / (1000 * 60);
        
        // Calculer le nombre de séances
        const nombreSeances = Math.floor(differenceEnMinutes / dureeEnMinutes);
        
        return nombreSeances;
    }
    const [Emp, setEmp] = useState(emploi);
    
    const seances=calculerNombreSeances(debut,fin,duree,pose);
    const ajouter = (e) => {
        e.preventDefault();
        const nouvelEmploi = { ...Emp }; // Créez une copie de l'objet emploi
        
        if (type === 'Cour') {
            Array.from({ length: groupes }, (v, i) => {
                const groupe = 'G' + (i + 1);
                let x = nouvelEmploi[jour1][seance1][groupe];
                nouvelEmploi[jour1][seance1][groupe] = nouvelEmploi[jour2][seance2][groupe];
                nouvelEmploi[jour2][seance2][groupe] = x;
            });
        } else {
            let x = nouvelEmploi[jour1][seance1][groupe1];
            nouvelEmploi[jour1][seance1][groupe1] = nouvelEmploi[jour2][seance2][groupe2];
            nouvelEmploi[jour2][seance2][groupe2] = x;
        }
        setEmp(emploi);
         onAdd(Emp);
        
        
    };
    return(
        <form className="forme z-20" onSubmit={ajouter}>
            <div className='close' onClick={()=>{onAdd(Emp)}}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
            <h1 className="font-bold">Permuter</h1>
            <div className="flex w-full justify-between mt-4">
            <select className='w-1/2  border-b border-b-gray-500' value={jour1} onChange={(e)=>{
                setJour1(e.target.value);
            }}>
               <option value="" disabled selected>Jour</option>
               <option value="Samedi">Samedi</option>
               <option value="Dimanche">Dimanche</option>
               <option value="Lundi">Lundi</option>
               <option value="Mardi">Mardi</option>
               <option value="Mercredi">Mercredi</option>
               <option value="Jeudi">Jeudi</option> 
            </select>

            <select className='w-1/2  border-b ml-4 border-b-gray-500' value={seance1} onChange={(e)=>{
                setSeance1(e.target.value);
            }}>
               <option value="" disabled selected>Seance</option>
               {Array.from({ length: seances }, (v, i) => {
                                     return (
                                        <option key={i} value={i}>{i+1}</option> 
                                            );
                               })}
            </select>
            </div>
            <div className="flex w-full justify-between mt-4">
            <select className='w-full  border-b border-b-gray-500' value={type} onChange={(e)=>{
                setType(e.target.value);
            }}>
               <option value="" disabled selected>Type seance</option>
               <option value="Cour">Cour</option>
               <option value="TD">TD</option>
               <option value="TP">TP</option>
               
            </select>
           {type!=='Cour'?<select className='w-full  border-b ml-4 border-b-gray-500' value={groupe1} onChange={(e)=>{
                setgroupe1(e.target.value);
            }}>
               <option value="" disabled selected>groupe</option>
               {Array.from({ length: groupes }, (v, i) => {
                                     return (
                                        <option key={i} value={'G'+(i+1)}>{'G'+(i+1)}</option> 
                                            );
                               })}
            </select>:null}
            </div>
            <h1 className="font-bold mt-4">Avec</h1>
            <div className="flex w-full justify-between mt-4">
            <select className='w-1/2  border-b border-b-gray-500' value={jour2} onChange={(e)=>{
                setJour2(e.target.value);
            }}>
               <option value="" disabled selected>Jour</option>
               <option value="Samedi">Samedi</option>
               <option value="Dimanche">Dimanche</option>
               <option value="Lundi">Lundi</option>
               <option value="Mardi">Mardi</option>
               <option value="Mercredi">Mercredi</option>
               <option value="Jeudi">Jeudi</option> 
            </select>

            <select className='w-1/2  border-b ml-4 border-b-gray-500' value={seance2} onChange={(e)=>{
                setSeance2(e.target.value);
            }}>
               <option value="" disabled selected>Seance</option>
               {Array.from({ length: seances }, (v, i) => {
                                     return (
                                        <option key={i} value={i}>{i+1}</option> 
                                            );
                               })}
            </select>
            </div>
            <div className="flex w-full justify-between mt-4">
            <select className='w-full  border-b border-b-gray-500' value={type} onChange={(e)=>{
                setType(e.target.value);
            }}>
               <option value="" disabled selected>Type seance</option>
               <option value="Cour">Cour</option>
               <option value="TD">TD</option>
               <option value="TP">TP</option>
               
            </select>
           {type!=='Cour'?<select className='w-full  border-b ml-4 border-b-gray-500' value={groupe2} onChange={(e)=>{
                setgroupe2(e.target.value);
            }}>
               <option value="" disabled selected>groupe</option>
               {Array.from({ length: groupes }, (v, i) => {
                                     return (
                                        <option key={i} value={'G'+(i+1)}>{'G'+(i+1)}</option> 
                                            );
                               })}
            </select>:null}
            </div>
            <div className="flex w-full justify-center mt-8">
            <button type="submit" className='flex w-56 py-1 px-2 rounded-xl justify-center text-white bg-blue-700'>
             confirmer
            </button>
            </div>
        </form>
    )
}
export default modifierEmp