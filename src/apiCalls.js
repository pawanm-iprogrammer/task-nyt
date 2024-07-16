const apiCalls = {
  getTopStories() {
    const apiKey = 'jSU2dOw8eWALD9SR8I4RXL5YtisjzDcP'
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
      .then(res => res.json())
  }
}

export default apiCalls;