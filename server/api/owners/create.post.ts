import OwnerModel from "~/server/models/Owner.model";
import {OwnerSchema} from "~/server/validation";

export default defineEventHandler(async (event)=> {
    //get data from body
    const body = await readBody(event);

    let { error } = OwnerSchema.validate(body);
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    try {
        await OwnerModel.create(body);
        return { message: "Owner Created" };
    } catch (e:any) {
        throw createError({
            message: e.message,
        });
    }

});