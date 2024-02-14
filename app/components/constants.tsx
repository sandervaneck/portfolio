
export type Project = {
    name: string,
    url: string,
    image: string,
    public: boolean,
    date: Date
}

export const MyChefsbase: Project = {
    name: 'MyChefsbase',
    url: 'https://www.mychefsbase.com',
    image: '/MCB_Logo.png',
    public: false,
    date: new Date(2021, 0, 1)
}


export const MyCourses: Project = {
  name: 'Courses',
  url: 'https://www.udemy.com',
  image: '/Udemy.png',
  public: false,
  date: new Date(2023, 4, 1)
}

export const EquisMate: Project = {
    name: 'EquisMate',
    url: 'https://www.mychefsbase.com',
    image: '/EquisMate.png',
    public: false,
    date: new Date(2022, 0, 1)
}

export const ChatGPT: Project = {
  name: 'ChatGPT Recipes',
  url: '/',
  image: '/Chat_GPT.png',
  public: true,
  date: new Date(2024, 4, 1)
}

export const Webshop: Project = {
  name: 'Webshop Template',
  url: '/',
  image: '/Webshop.png',
  public: true,
  date: new Date(2024, 1, 14)
}

export const StockPredictor: Project = {
  name: 'Predict Stock Prices',
  url: '/',
  image: '/Stocks.png',
  public: true,
  date: new Date(2024, 4, 1)
}

export const privateProjects: Project[] = [MyChefsbase, EquisMate, MyCourses]
export const publicProjects: Project[] = [ChatGPT, Webshop, StockPredictor]

export const revalidate = 60;
