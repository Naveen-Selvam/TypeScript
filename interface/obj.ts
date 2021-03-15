interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 1998,
  broken: true,
  summary(): string {
    return this.name;
  },
};

const drink = {
  color: 'brown',
  sugar: 40,
  corbonated: true,
  summary(): string {
    return this.color;
  },
};

const common = (veh: Reportable): void => {
  console.log(veh.summary());
};

common(oldCivic);
common(drink);
