
const s = str => str ? `'${str}'` : null
const getAvailableTime = available => available ? 'now()' : 'TIMESTAMPTZ(null)'

module.exports = {
    s, getAvailableTime
}