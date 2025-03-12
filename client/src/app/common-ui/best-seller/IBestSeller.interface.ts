export interface ICarouselOptions {
  items: number;
  dots: boolean;
  nav: boolean;
  loop: boolean;
  margin: number;
  responsive: {
    [key: number]: { items: number };
  };
  navText: string[];
}
