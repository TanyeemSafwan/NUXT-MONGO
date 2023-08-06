import OwnerModel from "~/server/models/Owner.model";

export default defineEventHandler(async (event) => {
    return OwnerModel.find();
});