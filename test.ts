interface dog {
  name: string;
  age: number;
}

interface dog{
  breed: string;
  bark: () => string;
};


interface serviceDog extends dog {
  job: 'sniffer' | 'navigator' | 'paratrooper';
};

const myDog: serviceDog = {
  name: 'jackie',
  age: 1,
  bark() {
    return 'Woof!';
  },
  breed: 'German Shepherd',
  job:'sniffer'
}