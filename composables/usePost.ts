import type { TPost, TPostPreview, TCategory, TMeta } from "~/types";

class UsePost{
    async get(slug: string){
        const { findOne } = useStrapi();
        const { data } = await useAsyncData('posts', () => findOne('posts', {
           filters: {
            slug: {
                $eq: slug
            }
           },
           populate: {
            profile: {
                fields: ['name', 'avatarUrl', 'slug'],
                populate: {
                    posts: {
                        fields: ['title', 'imgURL', 'slug']
                    }
                }
            }
           }
        }));
        return {
            data: data.value?.data as TPost,
            meta: data.value?.meta as TMeta
        };
    };

    async previews(){
        const { find } = useStrapi();
        const { data } = await useAsyncData('previews', () => find('posts', {
            fields: ['slug', 'imgURL', 'title', 'description']
        }));
        return {
            data: data.value?.data as TPostPreview[],
            meta: data.value?.meta as TMeta
        };
    };

    async postsInTag(tag: string){
        const { find } = useStrapi();
        const { data } = await useAsyncData('postsInTag', () => find('categories', {
            filters: {
                name: {
                    $eq: tag
                }
            },
            populate: ['posts']
        }));
        return {
            data: data.value?.data[0] as TCategory,
            meta: data.value?.meta as TMeta
        };
    };

    async getTags(){
        const { find } = useStrapi();
        const { data } = await useAsyncData('categories', () => find('categories'));
        return {
            data: data.value?.data as TCategory[],
            meta: data.value?.meta as TMeta
        };
    };
}

export default new UsePost();