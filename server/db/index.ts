import mongoose from "mongoose";
import { Nitro } from "nitropack";
export default async ( _nitroApp:Nitro ) => {
    const config = useRuntimeConfig();
    //connecting to the mongodb
    mongoose
        .connect(config.MONGO_URI)
        .then(() => console.log(`Connected to DB`))
        .catch((e) => console.log(e));
}