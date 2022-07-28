// This provides a resolver function for each API endpoint
const queryResolvers = {
  hello: () => {
    return 'Hello world!!!'
  },
  hello9: () => {
    return 99
  }
}

export { queryResolvers }
