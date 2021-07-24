'use strict';

const findComponentByGlobalId = globalId => {
  return Object.values(siapi.components).find(
    compo => compo.globalId === globalId
  );
};

module.exports = {
  findComponentByGlobalId,
};
