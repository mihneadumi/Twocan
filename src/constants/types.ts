interface User {
  id: number
  name: {
    firstName: string
    lastName: string
  }
  address: string
  city: string
  state: string
}

export default User
