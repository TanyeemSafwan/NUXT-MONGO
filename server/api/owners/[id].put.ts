import OwnerModel from "~/server/models/Owner.model";
import {OwnerSchema} from "~/server/validation";

export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    const id = event?.context?.params?.id;

    let { error } = OwnerSchema.validate(body, { abortEarly: true, allowUnknown: true});
    if(error) {
        throw createError({
            message: error.message.replace(/"/g,""),
            statusCode: 400,
            fatal: false,
        });
    }

    try {
        await OwnerModel.findByIdAndUpdate(id, body);
        return {message:"Owner Updated"};
    } catch (e:any) {
        throw createError({
            message: e.message,
        });
    }

});