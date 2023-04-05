export type DataProps = {
  id: string;
  title: string;
  cover: string;
  pictures: Picture[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: Equipment[];
  tags: string[];
};

export type Picture = string;
type Equipment = string;

export type Host = {
  name: string;
  picture: Picture;
};
