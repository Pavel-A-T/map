import ErrorRepository from '../errorRepository';

test(('class ErrorRepository create'), () => {
  const expected = {
    map: [{ code: 404, description: 'bad request' },
      { code: 500, description: 'server error' }],
  };
  const errorRepo = new ErrorRepository();
  expect(errorRepo).toEqual(expected);
});

test(('class ErrorRepository method - translate()'), () => {
  expect(new ErrorRepository().translate(900)).toBe('Unknown error');
  expect(new ErrorRepository().translate(404)).toBe('bad request');
  expect(new ErrorRepository().translate(500)).toBe('server error');
  expect(new ErrorRepository().translate(22)).toBe('Unknown error');
});
