import { defineStore } from "pinia";
import {IOwner} from "~/types";
import useToast from "./useToast";
const state = reactive({ count: 0 });
export const useOwnerStore = defineStore("owner-store", {
    state: () => ({
         owners: [] as IOwner[],
    }),
    actions: {

        async getAll() {
            try{
                let data = await $fetch<IOwner[]>("/api/owners");
                this.owners = data;
                return data as IOwner[];
            } catch (e: any) {
                useToast().error(e.message);
            }
        },

        async create(name: string) {
           await $fetch("/api/owners/create",{
               method: "POST",
               body: {name},
           })
               .catch((e) => {
                   useToast().error(e.data.message);
                   state.count++;
               })
               .then(async() => {
                   await this.getAll();
                   if(state.count == 0)
                   {
                       useToast().success("Owner created");
                   }
                   state.count = 0;

               });
        },

        async update(id: string, name: string) {
            await $fetch(`/api/owners/${id}`,{
                method: "PUT",
                body: {name},
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                    state.count++;
                })
                .then(async () => {
                    await this.getAll();
                    if(state.count == 0)
                    {
                        useToast().success("Owner Updated");
                    }
                    state.count = 0;
                });
        },

        async remove(id: string) {
            await $fetch(`/api/owners/${id}`, {
                method:"DELETE",
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Owner Deleted");
                });
        },
    },
});