import Testimonio from './components/testimonio.jsx';
import Testimonio2 from './components/testimonio2.jsx';
import Testimonio3 from './components/testimonio3.jsx';
import Testimonio4 from './components/testimonio4.jsx';
import Testimonio5 from './components/testimonio5.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen los Estudiantes de CEUTEC</h1>
   <Testimonio
   nombre='Emma Bostian'
   pais='Suecia'
   cargo='Ingeniera de Software'
   empresa='Spotify'
   testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
   <Testimonio2 
   nombre = 'Kevin Lopez'
   pais = 'España'
   cargo = 'Ingeniero en Sistemas'
   empresa = 'Nintendo'
   testimonio = 'Mi experiencia con la programación y sistemas siempre fue apasionante, pero fue en CEUTEC donde realmente despegué profesionalmente. La diversidad de proyectos desafiantes y el equipo altamente talentoso me proporcionaron un entorno perfecto para crecer como ingeniero en sistemas.'/>
   <Testimonio3 
   nombre = "Isabel Carcamo"
   pais = "Estados Unidos"
   cargo = "Licenciada en Ciencias de la Computacion"
   empresa = "Microsoft"
   testimonio = "Estudié Ciencias de la Computación en CEUTEC, una experiencia que sentó las bases sólidas para mi carrera en ingeniería. Los conocimientos adquiridos en programación, redes y sistemas en CEUTEC fueron cruciales para mi éxito profesional. Ahora, como ingeniero en sistemas en Microsoft, estoy agradecido por la formación recibida y emocionado por contribuir al desarrollo de tecnologías innovadoras."
   />
   <Testimonio4 
   nombre = 'Elvis Gutierrez'
   pais = "Alemania"
   cargo = "Ingeniero en Sistemas"
   empresa = 'Sony'
   testimonio = 'Mi formación en Ingenieria en Sistemas en CEUTEC fue el trampolín que me llevó a la emocionante carrera de ingeniería en sistemas. Los fundamentos sólidos y las habilidades prácticas que adquirí en CEUTEC fueron esenciales para mi desarrollo profesional. Trabajar en Sony me ha permitido contribuir a proyectos innovadores y ser parte de un equipo apasionado que impulsa la tecnología a nuevos límites.'/>
   <Testimonio5 
   nombre = 'Henry Cavil'
   pais = 'Estados Unidos'
   cargo = 'Ingeniero de Software'
   empresa = 'Meta'
   testimonio = 'Mi viaje comenzó con la ingeniería de software, una elección que cambió mi vida. Estudiar en profundidad en esta disciplina me brindó la perspectiva y las habilidades necesarias para enfrentar los desafíos del mundo tecnológico. Trabajar en Meta ha sido una experiencia increíble, siendo parte de proyectos que moldean la forma en que las personas interactúan en línea y utilizan la tecnología para conectarse en todo el mundo.'/>
   </div>
    </div>
  );
}

export default App;
