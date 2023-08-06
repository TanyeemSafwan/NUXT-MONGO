import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        

    },
    //this will create the created at and updated at field on each record
    {timestamps: true}
);

export default mongoose.model("Owner", schema);
