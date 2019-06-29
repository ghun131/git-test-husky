const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'post-checkout': tasks([
      'node recordTime.js',
    ])
  }
}