
export default class UnitStore {
  price = 0;
  houseStatus = true;
  photoUrl = '/assets/doghouse.svg';

  constructor(type) {
    if (type == 'Dog House') {
      this.price = 1;
    } else if (type == 'House') {
      this.price = 2;
      this.photoUrl = '/assets/house.svg';
    } else if (type == 'Apartment') {
      this.price = 3;
    }
  }
}
