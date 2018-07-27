
export default class UnitStore {
  price = 0;
  houseStatus = true;
  photoUrl = '/assets/doghouse.svg';
  position = 0;
  width = 0;
  height = 0;

  constructor(type, position) {
    if (type === 'Dog House') {
      this.price = 1;
      this.width = this.height = 30;
    } else if (type === 'House') {
      this.price = 5;
      this.photoUrl = '/assets/house.svg';
      this.width = this.height = 50;
    } else if (type === 'Apartment') {
      this.price = 10;
      this.photoUrl = '/assets/apartment.svg';
      this.width = this.height = 80;
    }
    this.position = position;
  }
}
