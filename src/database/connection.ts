import { connect, NativeError } from "mongoose";
import { DatabaseError } from "../error";

class Database {
  public async connection(): Promise<void> {
    connect(
      `mongodb://${process.env.MONGO_HOST}`,
      {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        dbName: process.env.MONGO_COLLECTION,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err: NativeError) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          console.log("Database is connected :) ");
        }
      }
    );
  }
}

export default new Database();
