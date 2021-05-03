export class BaseService {
    #path = 'http://localhost:8080/'

    doGet = async (path) => {
        return await fetch(
            this.#path + path,
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyMTQ3NDYzNCwiaWF0IjoxNjIwMDAzNDA1fQ.ScaP3gxwcoVVthIc--hu_5JC_cR6OZ0056qcBTDhRjM',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': ''
                }
            }
        ).then(resp => {
            return resp
        }).catch(err => {
            throw err;
        });
    }


}