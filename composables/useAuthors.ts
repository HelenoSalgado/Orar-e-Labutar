import type { TMeta, TProfile } from "~/types";

class UseAuthors{
    async get(slug: string){
        const { findOne } = useStrapi();
        const { data } = await useAsyncData('profile', () => findOne('profiles', {
            filters: {
                slug: {
                    $eq: slug
                }
            },
            populate: {
                posts: {
                    fields: ['title', 'imgURL', 'slug']
                }
            },
        }));
        return {
            data: data.value?.data as TProfile,
            meta: data.value?.meta as TMeta
        };
    };
    async getAll(){
        const { findOne } = useStrapi();
        const { data } = await useAsyncData('profiles', () => findOne('profiles', {
            fields: ['name', 'imgUrl', 'slug', 'createdAt']
        }));
        return {
            data: data.value?.data as TProfile,
            meta: data.value?.meta as TMeta
        };
    }
}

export default new UseAuthors();