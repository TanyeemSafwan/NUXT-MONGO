import OwnerModel from "~/server/models/Owner.model";

export default defineEventHandler(async (event) => {
    const id = event?.context?.params?.id;

    try {
        await OwnerModel.findByIdAndDelete(id);
        return {message:"Company Deleted"};
    } catch (e:any) {
        throw createError({
            message: e.message,
        });
    }
});
