const {
  createHash,
  scryptSync,
  randomBytes,
  timingSafeEqual,
} = require('crypto')

function hash(input) {
  return createHash('sha256').update(input).digest('hex')
  //   return createHash('sha256').update(input).digest('base64')
}
console.log(hash('AyoubMaimmadi2015@'))

let users = []

function signup(email, password) {
  const salt = randomBytes(16).toString('hex')
  const hashedPassword = scryptSync(password, salt, 64)

  const user = { email, password: `${salt}:${hashedPassword}` }
  users.push(user)

  return user
}

function login(email, password) {
  const user = users.find((v) => v.email === email)

  const [salt, key] = user.password.split(':')
  const hashedBuffer = scryptSync(password, salt, 64)

  const keyBuffer = Buffer.from(key, 'hex')
  const match = timingSafeEqual(hashedBuffer, keyBuffer)

  if (match) {
    return 'login success!'
  } else {
    return 'login failed!'
  }
}

signup('ayoub', 'maimmadi')
login('ayoub', 'maimmadi')
