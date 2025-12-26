export default class UnexpectedResponseError extends Error {

     status: number;

     constructor(message: string, status: number) {
          super(message);
          this.status = status;
     }
}