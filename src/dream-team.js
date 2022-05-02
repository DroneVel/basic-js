const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false
    let code = members.reduce((acc, name) => {
        return (typeof (name) === 'string')
            ? acc += name.trim()[0].toUpperCase()
            : acc;
    }, '');

    if (!code.length) return false;
    return code.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
