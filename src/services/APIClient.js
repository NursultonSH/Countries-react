export class APIClient {
    constructor(){
        this.baseURl = 'https://restcountries.com/v3.1/'
    }
    async getData(endPoints, headers, params){
        const url = `${this.baseURl}${endPoints}`

        try {
            const res = await fetch(url, {
                method:"GET",
                params:params,
                headers :{
                    "Content-type" : "application/json",
                    ...headers
                }
            })

            if(!res.ok){
                throw new Error (res.status)
            }

            return await res.json()
        } catch (err) {
            throw new Error(err)
        }
    }
}