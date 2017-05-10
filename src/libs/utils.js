export const generateId = () => Math.floor(Math.random() * 100000)

export const addItem = (list, item) => [...list, item]

export const partial = (fn, ...args) => fn.bind(null, ...args)

export const removeItem = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)

  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex + 1)
  ]
}
