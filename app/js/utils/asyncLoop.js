/**
 * Pues eso, un bucle asíncrono
 *
 * Uso:
 *
 * asyncLoop(iterable.length, loop => {
 *  someAsyncFunction().then(data => {
 *    console.log(loop.index())
 *    loop.next()
 *  }).catch(error => throw error)
 * },
 * () => {
 *  console.log('Asynchronous Loop is done!')
 * })
 */

const asyncLoop = (iterations, func, callback) => {
  let i = 0
  let done = false
  let data
  let loop = {
    next () {
      if (done) return

      if (i < iterations) {
        i ++
        func(loop)
      } else {
        done = true
        callback()
      }
    },
    index () {
      return i - 1
    },
    break () {
      done = true
      callback()
    }
  }
  // start
  loop.next()
  return loop
}

export default asyncLoop
