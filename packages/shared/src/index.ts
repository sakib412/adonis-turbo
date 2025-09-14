export const hello = 'world'

export function greet(name?: string) {
  return `Hello, ${name || 'stranger'}!`
}