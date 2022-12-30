import { testServer } from '../jest.setup';

describe('Cidades', () => {
  it('should be able to create a new city', async () => {
    const response = await testServer.post('/cidades').send({
      nome: 'São Paulo',
      estado: 'SP',
    });

    expect(response.statusCode).toEqual(201);
  });

  it('should not be able to create a new city with name shorter then 3', async () => {
    const response = await testServer.post('/cidades').send({
      nome: 'Sa',
    });

    expect(response.body).toHaveProperty('errors.body.nome');
  });
});
