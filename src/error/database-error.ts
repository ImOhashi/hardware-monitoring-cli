import { NativeError } from "mongoose";

export class DatabaseError extends Error {
  constructor(paramName?: NativeError) {
    super(`Database isn't connected \n${paramName}`);
    this.name = "DatabaseError";
  }
}
