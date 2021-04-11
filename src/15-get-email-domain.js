/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const newArr = [];
  for (let i = email.length; i >= 0; i--) {
    if (email[i] !== '@') {
      newArr.push(email[i]);
    } else {
      break;
    }
  }
  return newArr.reverse().join('');
}

module.exports = getEmailDomain;
