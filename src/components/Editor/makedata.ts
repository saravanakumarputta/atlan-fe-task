// import { Product } from "@/contracts/Product";
import { faker } from "@faker-js/faker";

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  createdAt: Date;
};

export type Supplier = {
  id: number;
  name: string;
  country: "USA" | "ESTONIA" | "INDIA";
  skus: number;
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (index: number): Person => {
  return {
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(40),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
    createdAt: faker.datatype.datetime({ max: new Date().getTime() }),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

const newSupplier = (index: number): Supplier => {
  return {
    id: index + 1,
    name: faker.company.name(),
    country: "USA",
    skus: faker.datatype.number(1000),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(d),
      };
    });
  };

  return makeDataLevel();
}

export function makeSuppliersData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Supplier[] => {
    const len = lens[depth]!;
    return range(len).map((d): Supplier => {
      return {
        ...newSupplier(d),
      };
    });
  };

  return makeDataLevel();
}
