export function replaceSlug(slug: string){
    const t = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return t.replace(/\-+/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, word => word.toUpperCase());
}