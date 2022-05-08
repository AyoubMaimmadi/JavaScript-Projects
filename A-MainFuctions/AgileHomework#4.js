const nameCheck = (name) => {
  var nameRegex = /^[a-zA-Z-']{2,40}$/
  if (name.includes('--') || name.includes(`''`)) {
    return false
  }
  return nameRegex.test(name)
}

names = [
  '',
  'a',
  'Ayoub',
  'SommerVill',
  `Thisis'malicious`,
  `S`,
  `C-3PO`,
  `--badcode`,
  `Washington-Willson`,
  `Sommer_vill`,
  `'Sommer_vill`,
  `0'Reilly`,
  `ayoub'`,
  `0 Reilly`,
  'ayoub',
  'ayoub',
]

for (var i = 0; i < names.length; i++) {
  if (!nameCheck(names[i])) {
    console.log(names[i] + '\t is not a valid name.\t\tFAIL')
  } else {
    console.log(names[i] + '\t is a valid name.\t\tok')
  }
}
