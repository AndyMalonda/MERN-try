export const PORT = 3000;

export const MONGO_USERNAME = process.env["MONGO_USERNAME"];
export const MONGO_PASSWORD = process.env["MONGO_PASSWORD"];

export const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.wfrlm.mongodb.net/?retryWrites=true&w=majority`;
