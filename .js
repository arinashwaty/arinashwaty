const arina = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', emirhansarac('message'));
};
