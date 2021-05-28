export const RegistroParticipantes = async (input) => {
  const url = 'https://apiutec.softaki.com/public/graphql';
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      mutation RegistroParticipantes($input: RegistroParticipanteInput!) {
        RegistroParticipantes(input: $input) {
          registroId
          nombres
          apellidos
          tipoDocumento
          nroDocumento
          correo
          nroCelular
          ciudad
          pais
          tipoInstitucion
          cargo
        }
      }
    `,
      variables: { input: { ...input } },
    }),
  });

  const data = await res.json();
  return data;
};

export const getCountries = async () => {
  const key = 'key=a687a04780d074ac6e148bb36598f4d1';
  const url = `https://battuta.medunes.net/api/country/all/?${key}`;
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();

  return data;
};
