const { main } = require('../v0')

describe('Test App', () => {
  test('v0', () => {
    let response = main()
    expect(response.body).toEqual('Something extraordinary is coming..')
  })
})
