const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const stats = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse(); // Разбиваем домен на части и переворачиваем
    let dns = '';

    parts.forEach(part => {
      dns += `.${part}`; // Формируем DNS-имя
      if (stats[dns]) {
        stats[dns] += 1; // Увеличиваем счётчик, если DNS-имя уже существует
      } else {
        stats[dns] = 1; // Иначе создаём новую запись
      }
    });
  });
  return stats;
}

module.exports = {
  getDNSStats
};
