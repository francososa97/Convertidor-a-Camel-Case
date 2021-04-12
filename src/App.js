import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from './Componentes/SettingsNotifications';
import SettingsPassword from './Componentes/SettingsPassword';
import { useState } from 'react';

const App = () => {

  const [oracion,SetOracion] = useState("");
  const [oracionCamel,SetOracionCamel] = useState("");

  const SetCamelCase = () => {
    let nuevaOracion ="";
    let oracionAmodificar = oracion;
    if (oracion.indexOf(" ") === -1) {
      let oracionUnTerminoEnCamel = oracionAmodificar.charAt(0).toUpperCase() + oracionAmodificar.slice(1);
      SetOracionCamel(oracionUnTerminoEnCamel);
    }
    else{
      for (let i = 0; i < oracionAmodificar.length; i++) {
        if(oracionAmodificar[i - 1] === ' ')
          nuevaOracion += oracionAmodificar[i].toUpperCase();
        else
          nuevaOracion += oracionAmodificar[i];
      }
      nuevaOracion =nuevaOracion.charAt(0).toUpperCase() + nuevaOracion.slice(1);
      nuevaOracion = nuevaOracion.replace(/ /g, "");
      SetOracionCamel(nuevaOracion);
    }
  }
  return(
    <>
      <Helmet>
        <title>Settings | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <SettingsNotifications SetOracion={SetOracion} oracion={oracion}/>
          <Box sx={{ pt: 3 }}>
            <SettingsPassword SetCamelCase={SetCamelCase} oracionCamel={oracionCamel}/>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
