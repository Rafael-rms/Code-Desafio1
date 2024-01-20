import Cabecalho from './Componentes/Cabecalho';
import Card from './Componentes/Card';
import '../src/'

function App() {
  return (
    <div>
      <Cabecalho/>
      <Card 
      data='12.12.1912'
      titulo='Microbiologia'
      texto='A microbiologia é o braço da ciência que estuda os micro-organismos, sendo unicelulares, pluricelulares e até acelulares. Inclui o estudo de bactérias, fungos, vírus, protozoários e algas microscópicas.'/> 
      <Card 
      data='12.12.1912'
      titulo='Microbiologia'
      texto='A microbiologia é uma área da Biologia que se concentra no estudo dos micro-organismos, incluindo bactérias, vírus, fungos, protozoários e algas microscópicas.'/>
      <Card 
      data='12.12.1912'
      titulo='Microbiologia'
      texto='Os micro-organismos podem ser encontrados em todos os ambientes e são essenciais para a vida, pois desempenham papel importante em processos biológicos, como a decomposição de matéria orgânica.'/>
      <Card 
      data='12.12.1912'
      titulo='Microbiologia'
      texto='Os micro-organismos podem ser encontrados em todos os ambientes.'/>
    </div>
  );
}

export default App;
