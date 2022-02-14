const promise = new Promise((resolve) => {
  setTimeout(() => { throw new Error('foo') }, 5_000)
})
