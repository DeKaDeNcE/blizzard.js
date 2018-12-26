/**
 * @file Exports the Account API methods.
 * @module lib/account
 */

/**
 * Account class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        Account constructor function
 */
const Account = function Account(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch user account data.
 *
 * @param  {Object} args          The user request arguments
 * @param  {String} args.token    The user access token
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Account.prototype.user = function getUser(args) {
  return this.blizzard.get('/account/user', args);
};

/**
 * Fetch World of Warcraft character data.
 *
 * @param  {Object} args          The request arguments
 * @param  {String} args.token    The user access token
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Account.prototype.wow = function getCharacters(args) {
  return this.blizzard.get('/wow/user/characters', args);
};

/**
 * Fetch Starcraft 2 profile data.
 *
 * @param  {Object} args          The user request arguments
 * @param  {String} args.token    The user access token
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Account.prototype.sc2 = function getProfile(args) {
  return this.blizzard.get('/sc2/profile/user', args);
};

module.exports = Account;
