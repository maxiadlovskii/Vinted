export interface Dog {
  id: string;
  url: string;
  breeds: [{ name: string; bred_for: string; temperament: string }];
}

export type Dogs = Array<Dog>;
