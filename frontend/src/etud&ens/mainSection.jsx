import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../Admin/Emploi.css'
import image from '../assets/download.png'
import { useState, useEffect } from "react";
import axios from 'axios';
function MainSection({page}){
    const [reverse,setReverse]=useState(false);
    const [reverse2,setReverse2]=useState(false);
    const [reverse4,setReverse4]=useState(false);
    const [selected,setSelected]=useState('Selectionner une annee');
    const [selected2,setSelected2]=useState('Choisir semestre');
    const [code_specialite,setCodespecialite]=useState('Choisir specialite');
    const [specialites, setSpecialites] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/Specialite/",{
            withCredentials: true
          }).then(respo =>{
          setSpecialites(respo.data.specialites)
         })
         .catch(err => console.log(err));
     
    },[]);



    
    
    
    let user=Cookies.get('user');
  if(user){
    user=JSON.parse(user);
  }
  const np=user?user.nom+' '+user.prenom:'';
  const role=user?user.role : '';
    return(
        <div className='flex flex-col w-full h-full main px-10'>
            <header className="flex w-full  justify-between  mt-8 h-fit">
    <div className="">
    <p className="text-black  text-3xl font-bold">{page}</p>
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
            <span className='text-black'>{selected}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-64' style={{display:reverse?'block':'none'}}>
                <li onClick={()=>{
                    setSelected('2023/2024');
                }} style={{borderLeft:selected==='2023/2024'?'3px solid #0029FF':null}}>2023/2024</li>
                <li onClick={()=>{
                    setSelected('2022/2023');
                }} style={{borderLeft:selected==='2022/2023'?'3px solid #0029FF':null}}>2022/2023</li>
                <li onClick={()=>{
                    setSelected('2021/2022');
                }} style={{borderLeft:selected==='2021/2022'?'3px solid #0029FF':null}}>2021/2022</li>
                <li onClick={()=>{
                    setSelected('2020/2021');
                }} style={{borderLeft:selected==='2020/2021'?'3px solid #0029FF':null}}>2020/2021</li>
                <li onClick={()=>{
                    setSelected('2019/2020');
                }} style={{borderLeft:selected==='2019/2020'?'3px solid #0029FF':null}}>2019/2020</li>
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

        <div className='drop relative' onClick={()=>{
            setReverse2(!reverse2);
        }}>
            <span className='text-black'>{selected2}</span>
            <FontAwesomeIcon
             icon={faAngleDown}
             className={reverse2 ? 'icone rotate' : 'icone'} />
             <ul className='list -bottom-28' style={{display:reverse2?'block':'none'}}>
                <li onClick={()=>{
                    setSelected2('1');
                }} style={{borderLeft:selected2==='1'?'3px solid #0029FF':null}}>semestre 1</li>
                <li onClick={()=>{
                    setSelected2('2');
                }} style={{borderLeft:selected2==='2'?'3px solid #0029FF':null}}>semestre 2</li>
             </ul>
        </div>


        

    </div>

    

    
</main>
        </div>
    )
}
export default MainSection;