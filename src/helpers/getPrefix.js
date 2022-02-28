const getPrefix = str => str.slice(0, str.indexOf('_')).replace('(', '').trim();
export default getPrefix;
