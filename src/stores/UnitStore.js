
export default class UnitStore {
  price = 0;
  houseStatus = true;
  photoUrl = '/assets/doghouse.svg';
  position = 0;
  width = 0;
  height = 0;

  constructor(type) {
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
    this.position = Math.floor(Math.random() * 60 + 10)/100 * window.innerWidth;
  }
}
