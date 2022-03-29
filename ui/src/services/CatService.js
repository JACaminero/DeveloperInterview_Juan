
export class CatService {

  catDataList = []

  constructor() { }

  async getCatData() {
    let catData = { "url": "", "tags": [], "id": "" }
    //I'm a typescript guy, in a real life implementation I would've created a model class to take in my request
    //, but to keep this simple  I prefer to just declare an empty object.
    await fetch(`https://localhost:44356/api/cats`)
      .then(response => response.json())
      .then(data => {
        catData.url = data.url
        catData.id = data.id
        data.tags.forEach(e => {
          catData.tags.push(e)
        });
      });
    return catData
    }

  async fetch10Cats() {
    let catDataList = []
    for (let i = 0; i < 10; i++) {
      catDataList.push( await this.getCatData().then(res => res))
    }
    return catDataList
  }
}

export default CatService