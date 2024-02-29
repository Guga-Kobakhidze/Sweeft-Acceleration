export interface Photo {
  urls: {
    regular: string;
  };
  alt_description: string;
}


export interface History {
  history: string;
}

export interface InfiniteScrollProps {
  items: (Photo | History)[];
}

//   For fetching

export interface FetchProducts {
  url: string;
  method: string;
  accessToken: string;
}

export interface FetchResult {
  fetchRequest: [] | null;
  error: HTMLElement | null;
  loading: boolean;
}
