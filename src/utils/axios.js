
export const api_key = 'jSU2dOw8eWALD9SR8I4RXL5YtisjzDcP'

export const baseUrl = "https://api.nytimes.com/"

export const endpoints = {
    most_popular :{
        crud:(api_key)=>`svc/mostpopular/v2/viewed/1.json?api-key=${api_key}`
    }
}