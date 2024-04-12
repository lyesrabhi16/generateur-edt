import Form from '../login/form'
import '../login/Login.css'
import image from '../assets/BlogImage.png'
function Logo() {

    return (
      <div className='flex-col w-screen min-w-full h-full min-h-screen bg-cover bg-no-repeat' style={{backgroundImage: `url(${image})`}}>
        <div className='h-20 w-screen'></div>
        <div className='w-full py-8  flex justify-between xl:w-full:flex-row xl:w-full:justify-between px-20 items-center  sm:max-xl:flex-col sm:max-xl:items-center '>
        <div className='wi sm:max-lg:wim mb-20 flex flex-col justify-center'    >
          <p className='text-6xl sm:max-xl:text-5xl text-white font-semibold'>Planifiez Votre Semaine</p>
          <p className='mt-12 text-white '>Que vous soyez enseignant, étudiant ou membre de ladministration, notre plateforme vous offre un outil intuitif pour créer, gérer et optimiser vos emplois du temps. Simplifiez la planification de vos cours.</p>
          <hr className='mt-12 text-white w-72 border-2 border-solid border-white '/>
          <p className='mt-12 text-white '>Rejoignez notre communauté dès aujourdhui et découvrez comment           peut simplifier votre vie académique.</p>
        </div>
        <Form/>
      </div>
    </div>
      
    )
  }
  
  export default Logo
  