import UnitStore from './UnitStore';

export default class UnitList {
  unitList = [];
  constructor() {
    this.unitList = [];
  };

  append(unitStore) {
    this.unitList.push(unitStore);
  }

  remove = (idx) => {
    this.unitList.splice(idx, 1);
  }
}
