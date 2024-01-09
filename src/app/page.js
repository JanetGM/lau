import Image from 'next/image'
import Layout from './components/layout'
import Container from './components/container';
import FirstSection from './components/sections/first/FirstSection';
import MiriamLu from '../../public/first-section/miriam-lau.svg';
import SecondSection from './components/sections/second/SecondSection';
import MiriamLu2 from '../../public/first-section/second-miriam.svg';
import Eme from '../../public/first-section/eme.svg';
import Pepermitlab from '../../public/third-section/pptlab.svg';
import After from '../../public/third-section/after.svg';
import Entrevista from '../../public/third-section/entrevista.svg';
import ThirdSection from './components/sections/third/ThirdSection';
import pepermint from '../../public/fourth-section/pepermint.svg';
import eme from '../../public/fourth-section/eme.svg';
import cursos from '../../public/fourth-section/eme.svg';
import effie from '../../public/fourth-section/effie.svg';
import board from '../../public/fourth-section/board-member.svg';
import FourthSection from './components/sections/fourth/FourthSection';
import FifthSection from './components/sections/fifth/FifthSection';
import SixSection from './components/sections/six/SixSection';
import linkendin from '../../public/six-section/linkendin.svg';
import instagram  from'../../public/six-section/ig.svg';
import youtube from '../../public/six-section/youtube.svg';
import celphone from '../../public/third-section/celphone.svg';

const TEXT_HOME = {
   tag_first : "Soy Mirian Lau, una emprendedora <b class=red>atrevida</b>, libre y estructurada.",
   tag_second: "Desde estrategias de marketing que desafían la norma, hasta la innovación empresarial sin restricciones, estoy aquí para llevar tus metas y las de tu organización al <b class=red>siguiente nivel.</b>",
   title:"#Todoapulmón",
   img_path:MiriamLu,
}

const TEXT_ABOUT = {
   title_side_section:"ABOUT",
   title_section:"SOY MIRIAN LAU",
   subtitle_first:"Mi pasión, enfoque disruptivo y mi fuerza implacable me han llevado a desafiar las normas y a crear mi propio camino.",
   subtitle_second:"<p>MI FILOSOFÍA<p><span>Creo en vivir la vida con pasión, abrazar lo auténtico e inusual. La vida es demasiado corta para jugar a lo seguro, y eso es lo que me impulsa a alcanzar nuevas alturas en el mundo de los negocios.</span>",
   img_path:MiriamLu2,
};

const TEXT_IMPROVEMENTS={
  title:'NOVEDADES',
  arrCards:[
    {
      img:Pepermitlab,
      title:'PEPPERMINT LAB',
      subtitle:'“El diseño innovador y estratégico alineado con un equipo experto dan como resultado una ejecución impecable”',
      littletter:'Conoce mi laboratorio de innovación en Lima, PE'
    },
    {
      img:After,
      title:'PODCAST',
      subtitle:'“Nunca imaginé liderar un equipo de manera 100% remota conteniendo una crisis por detrás”',
      littletter:'Cómo ser un exitoso nómada digital  ft. Sebastian Cuenca'
    },
    {
      img:Entrevista,
      title:'ENTREVISTAS',
      subtitle:'“Uno de los primeros pasos para emprender es conocerse a si misma y saber en qué eres buena”',
      littletter:'Extraído de mi entrevista en RPP'
    }
  ]
}

const TEXT_PODCAST = {
  title:'PODCAST',
  img:celphone,
  tag:'Acompáñame a conocer las increíbles historias y las recetas del éxitos de los principales líderes empresariales y de los emprendedores que están marcando la pauta en el mercado, en mi podcast After Office.',
  title_podcast:'NO TE PIERDAS NINGÚN <b class=red>EPISODIO</b>',
  btn_title:'ESCUCHAR AHORA',
}

const TEXT_PROJECTS = {
  arrCards : [
  pepermint,
  eme,
  cursos,
  effie,
  board,  
  ],
  title:'PROYECTOS',
  tag:'Estas son las acciones en las que participo en mi día a día, desde la innovación con empresas, asesorando a mujeres de alto impacto, hasta Board member e incluso jurado.',
  img_background:Eme
}

const TEXT_FOOTER = {
  title: 'SÍGUEME',
  msg:'Emprende sin límites y desafía el status quo conmigo.<p>Conversemos...</p>',
  items:[
    'about',
    'contenido',
    'podcast',
    'acciones'
  ],
  redes:[
    linkendin,
    instagram,
    youtube
  ]
}

export default function Home() {
  return (
      <div className='w-fit'>
      <Layout 
      bgImage={TEXT_HOME.img_path}
      bgColor={'#848484'}>
        <Container>
         <FirstSection
          texts={TEXT_HOME}
         />
         {/* <Image
            className='image_miriam_lu'
            src={TEXT_HOME.img_path}
            alt="Miriam Lau"
          /> */}
        </Container>
      </Layout>
      <Layout
      customeClass="max-h-[860px]" 
      bgColor={"#616255"}>
        <Container>
          <SecondSection
          texts={TEXT_ABOUT}
          />
          <Image
            className='img-eme'
            src={Eme}
            alt="Miriam Lau"
          />

        </Container>
      </Layout>
      <Layout bgColor={"#CECABF"}>
        <Container>
          {/* SECCIÓN NOVEDADES */}
          <ThirdSection
            texts={TEXT_IMPROVEMENTS}
          />
        </Container>
      </Layout>
      <Layout 
      customeClass={"max-h-[708px]"}
      bgColor={"#616255"}
      >
        <Container>
          {/* SECCIÓN PODCAST */}
          <FourthSection
          texts={TEXT_PODCAST}
          />
        </Container>
      </Layout>
      <Layout bgColor={"#CECABF"}>
        <Container>
          <FifthSection
          texts={TEXT_PROJECTS}
          />
        </Container>
      </Layout>
      <Layout bgColor={"#F10009"}>
        <Container>
          <SixSection
          texts={TEXT_FOOTER}
          />
        </Container>
      </Layout>
      </div>
  )
}
