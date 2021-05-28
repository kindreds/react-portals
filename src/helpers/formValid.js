export const formValid = (values) => {
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const errors = {};

  if (values.nombres.trim() === '') {
    errors.nombres = 'Campo requerido';
  }

  if (values.apellidos.trim() === '') {
    errors.apellidos = 'Campo requerido';
  }

  if (values.correo.trim() === '') {
    errors.correo = 'Campo requerido';
  }

  if (!emailReg.test(values.correo)) {
    errors.correo = 'Formato de correo invalido';
  }

  if (values.tipoDocumento.trim() === '') {
    errors.tipoDocumento = 'Campo requerido';
  }

  if (values.nroDocumento === '') {
    errors.nroDocumento = 'Campo requerido';
  }

  if (/[a-zA-Z]/g.test(values.nroDocumento)) {
    errors.nroDocumento = 'Este campo solo acepta números.';
  }

  if (values.nroCelular === '') {
    errors.nroCelular = 'Campo requerido';
  }

  if (/[a-zA-Z]/g.test(values.nroCelular)) {
    errors.nroCelular = 'Este campo solo acepta números.';
  }

  if (values.ciudad.trim() === '') {
    errors.ciudad = 'Campo requerido';
  }

  if (values.pais.trim() === '') {
    errors.pais = 'Campo requerido';
  }

  if (values.tipoInstitucion.trim() === '') {
    errors.tipoInstitucion = 'Campo requerido';
  }

  if (values.tipoInstitucion === 'otro' && values.otro === '') {
    errors.otro = 'Campo requerido';
  }

  if (values.cargo.trim() === '') {
    errors.cargo = 'Campo requerido';
  }

  return errors;
};
