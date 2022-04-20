import assert from 'assert';
import Product from './product.js';
import Service from './service.js';

//should throw an error when description is less than 5 characteres long
{
  const params = {
    description: "my p",
    id: 1,
    price: 100
  }

  const produt = new Product({
    onCreate: () => { },
    service: new Service()
  });

  assert.rejects(
    () => produt.create(params),
    {
      message: "description must be higher than 5"
    },
    'it should throw an error with wrong description'
  )
}