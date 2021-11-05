import ErrorRepository from '../errorRepository';

test(('class ErrorRepository create'), () => {
  const expected = new Map();
  expected.set(404, 'bad request');
  expected.set(500, 'server error');
  const errorRepo = new ErrorRepository();
  errorRepo.map.set(404, 'bad request');
  errorRepo.map.set(500, 'server error');
  expect(errorRepo.map).toEqual(expected);
});

test(('class ErrorRepository method - translate()'), () => {
  const errorRepo = new ErrorRepository();
  errorRepo.map.set(404, 'bad request');
  errorRepo.map.set(500, 'server error');
  expect(errorRepo.translate(900)).toBe('Unknown error');
  expect(errorRepo.translate(404)).toBe('bad request');
  expect(errorRepo.translate(500)).toBe('server error');
  expect(errorRepo.translate(22)).toBe('Unknown error');
});
