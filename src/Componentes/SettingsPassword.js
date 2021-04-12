import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const SettingsPassword = (props) => {

  const {SetCamelCase,oracionCamel} = props;

  return (
    <form {...props}>
      <Card>
        <CardHeader
          title="Resultado"
        />
        <Divider />
        <CardContent>
          <TextareaAutosize value={oracionCamel} aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => {SetCamelCase()}}
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
