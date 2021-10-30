export default class ErrorRepository {
  constructor() {
    this.map = [];
    this.map.push({ code: 404, description: 'bad request' });
    this.map.push({ code: 500, description: 'server error' });
  }

  translate(code) {
    let result = this.map.find((item) => item.code === code);
    result = result === undefined ? 'Unknown error' : result.description;
    return result;
  }
}
