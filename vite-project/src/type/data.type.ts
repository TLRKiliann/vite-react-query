export type ValuesProps = {
  isLoading: boolean;
  data: {
    id: number;
    text: string;
    author: string;
  }
  isError: boolean;
  error: {
    message: string;
  }
}

export type BooksProps = {
  isLoading: boolean;
  data: {
    id: number;
    title: string;
    author: string;
  }
  isError: boolean;
  error: {
    message: string;
  }
}

export type ParamsProps = {
	exampleId: string;
}
//undefined when request callback from router
export type SuccessErrorTypes = {
	onSuccess: null;
	onError: null;
}

export type DataTypes = {
  data: {
    id: number;
    text: string;
    author: string;
  }[]
  status: number;
  statusText: string;
  headers: string;
}