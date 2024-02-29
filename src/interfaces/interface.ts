export interface Photo {
  urls: {
    regular: string;
  };
  alt_description: string;
  id: string;
}

export interface ModalPhoto {
  urls: {
    regular: string;
  };
  alt_description: string;
  views: string;
  downloads: string;
  likes: string;
  id: string;
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
}

export interface FetchResult {
  fetchRequest: [] | null;
  error: HTMLElement | null;
  loading: boolean | any;
}
