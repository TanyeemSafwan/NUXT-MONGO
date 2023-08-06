import Joi from "joi";

export const OwnerSchema = Joi.object({
    name: Joi.string().min(3).required(),
})
