import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  TextField
} from '@material-ui/core';

const SettingsNotifications = (props) => {

  const {SetOracion,oracion} = props;

  return(
    <form {...props}>
    <Card>
      <CardHeader
        title="Ingresa una oracion para transofrmarla con CamelCase"
      />
      <CardContent>
        <Grid
          container
          spacing={6}
          wrap="wrap"
        >
          <Grid
            item
            md={12}
            sm={12}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Entrada
            </Typography>
            <TextField
              fullWidth
              label="Oracion a transformar"
              margin="normal"
              name="oracion"
              onChange={(e)=> SetOracion(e.target.value)}
              type="string"
              value={oracion}
              variant="outlined"
            />
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  </form>
  );
}

export default SettingsNotifications;
