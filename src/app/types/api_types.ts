export interface User {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }
  
  interface APIResponse {
    results: User[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  }