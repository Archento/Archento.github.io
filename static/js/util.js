/**
 * Erzeugt eine Zufallszahl zwischen 0 und dem gegebeben Maximalwert.
 * @param {Number} max
 * @returns {Number} Ganzzahlige Zufallszahl
 */
export function getRandomInt (max) {
  return Math.round(Math.random() * max)
}

/**
 * Erzeugt einen HTML span Element (String) welches
 * in Abhängigkeit der Zahl eine andere Farbe ausgibt.
 * @param {Number} num Integer Zahl
 * @returns {String} HTML String
 */
export function colorize (num) {
  let color = 'lightgray'
  if (num === 1) color = 'blue'
  if (num === 2) color = 'darkgreen'
  if (num === 3) color = 'red'
  if (num > 3) color = 'darkred'
  return `<span style="color: ${color};">${num}</span>`
}

export const secret = ['KeyC', 'KeyH', 'KeyE', 'KeyA', 'KeyT', 'ShiftLeft']
