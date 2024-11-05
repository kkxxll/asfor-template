import { sum } from "./utils";

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 2000)
})

p.then(res => {
  console.log('res', res)
})


const s = new Set()
s.add(1)

console.log(sum(1, 3))

