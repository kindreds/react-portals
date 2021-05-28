import React, { useEffect } from 'react';
import Error from '../Error';
import Button from '../button';
import { Grid, Box, Flex } from '../Layout';
import { Formik, ErrorMessage } from 'formik';
import { FormContainer, Input, Label, Select } from './Form.styles';

import { getCountries, RegistroParticipantes } from '../../API';
import { formValid } from '../../helpers/formValid';

const initialValues = {
  pais: '',
  ciudad: '',
  correo: '',
  nombres: '',
  apellidos: '',
  nroCelular: '',
  nroDocumento: '',
  cargo: '',
  tipoDocumento: 'DNI',
  otro: '',
  tipoInstitucion: 'Universidad',
};

const Form = ({ setIsOpen }) => {
  useEffect(() => {
    getCountries().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Formik
      validate={formValid}
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        if (values.tipoInstitucion === 'otro') {
          values.tipoInstitucion = values.otro;
          delete values.otro;
        }

        setSubmitting(true);
        try {
          await RegistroParticipantes(values);
          setIsOpen(false);
          resetForm();
        } catch (err) {
          console.log(err);
        }
        setSubmitting(false);
      }}
    >
      {({ values, handleBlur, handleSubmit, handleChange, isSubmitting }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={20} mb={10}>
            <div>
              <Label>Nombres</Label>
              <Input
                type="text"
                name="nombres"
                autoComplete="off"
                onBlur={handleBlur}
                valid={values.nombres}
                value={values.nombres}
                onChange={handleChange}
              />
              <ErrorMessage name="nombres" component={Error} />
            </div>

            <div>
              <Label>Apellidos</Label>
              <Input
                type="text"
                name="apellidos"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.apellidos}
                valid={values.apellidos}
              />
              <ErrorMessage name="apellidos" component={Error} />
            </div>
          </Grid>

          <Box mb={10}>
            <Label>Correo</Label>
            <Input
              type="email"
              name="correo"
              autoComplete="off"
              onBlur={handleBlur}
              value={values.correo}
              valid={values.correo}
              onChange={handleChange}
            />
            <ErrorMessage name="correo" component={Error} />
          </Box>

          <Grid templateColumns="repeat(2, 1fr)" gap={20} mb={10}>
            <div>
              <Label>Tipo de documento</Label>
              <Select
                type="text"
                name="tipoDocumento"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tipoDocumento}
                valid={values.tipoDocumento}
              >
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
                <option value="Pasaporte">Pasaporte</option>
              </Select>
              <ErrorMessage name="tipoDocumento" component={Error} />
            </div>

            <div>
              <Label>Nro documento</Label>
              <Input
                type="text"
                name="nroDocumento"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nroDocumento}
                valid={values.nroDocumento}
              />
              <ErrorMessage name="nroDocumento" component={Error} />
            </div>
          </Grid>

          <Box mb={10}>
            <Label>Nro celular</Label>
            <Input
              type="text"
              name="nroCelular"
              autoComplete="off"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nroCelular}
              valid={values.nroCelular}
            />
            <ErrorMessage name="nroCelular" component={Error} />
          </Box>

          <Grid templateColumns="repeat(2, 1fr)" gap={20} mb={10}>
            <div>
              <Label>Ciudad</Label>
              <Input
                type="text"
                name="ciudad"
                autoComplete="off"
                onBlur={handleBlur}
                value={values.ciudad}
                valid={values.ciudad}
                onChange={handleChange}
              />
              <ErrorMessage name="ciudad" component={Error} />
            </div>

            <div>
              <Label>Pais</Label>
              <Input
                type="text"
                name="pais"
                autoComplete="off"
                onBlur={handleBlur}
                value={values.pais}
                valid={values.pais}
                onChange={handleChange}
              />
              <ErrorMessage name="pais" component={Error} />
            </div>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={20} mb={20}>
            <div>
              <Label>Tipo de institución</Label>
              <Select
                onBlur={handleBlur}
                name="tipoInstitucion"
                onChange={handleChange}
                value={values.tipoInstitucion}
                valid={values.tipoInstitucion}
              >
                <option value="Universidad">Universidad</option>
                <option value="Instituto">Instituto</option>
                <option value="Colegio">Colegio</option>
                <option value="Empresa">Empresa</option>
                <option value="Gobierno">Gobierno</option>
                <option value="otro">Otro</option>
              </Select>
              <ErrorMessage name="tipoInstitucion" component={Error} />
            </div>

            <div>
              <Label>Otra intitución</Label>
              <Input
                type="text"
                name="otro"
                autoComplete="off"
                onBlur={handleBlur}
                value={values.otro}
                valid={values.otro}
                disabled={values.tipoInstitucion !== 'otro'}
                onChange={handleChange}
              />
              <ErrorMessage name="otro" component={Error} />
            </div>
          </Grid>

          <div>
            <Label>Cargo</Label>
            <Input
              type="text"
              name="cargo"
              autoComplete="off"
              onBlur={handleBlur}
              value={values.cargo}
              valid={values.cargo}
              onChange={handleChange}
            />
            <ErrorMessage name="cargo" component={Error} />
          </div>

          <Flex justify="flex-end" mt={20}>
            <Button disable={isSubmitting} type="submit">
              Enviar
            </Button>
          </Flex>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;
