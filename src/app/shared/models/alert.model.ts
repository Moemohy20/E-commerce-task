export interface Alert {
  type: AlertType;
  text: string;
}

export enum AlertType {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  LOADING = 'loading',
}
