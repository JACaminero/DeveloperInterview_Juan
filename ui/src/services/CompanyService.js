export class CompanyService {

  constructor() { }

  async getCompanyName() {
    let companyName = ''
    //I'm a typescript guy, in a real life implementation I would've created a model class to take in my request
    //, but to keep this simple  I prefer to just declare an empty object to define my data.
    await fetch(`https://random-word-api.herokuapp.com/word?number=1`)
      .then(response => response.json())
      .then(data => companyName = data );

    return companyName

  }
}

export default CompanyService