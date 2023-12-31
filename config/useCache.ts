// Configuração para armazenar os dados da API em cache do lado do client, e evitar chamadas redundantes.
// Opção usada com useFetch.

export const useFetchOptions = {
    transform(input: any){
        return {
         ...input,
         fetchedAt: new Date()
        }
     },
     getCachedData: (key: any) => {
         const nuxtApp = useNuxtApp();
         const data =  nuxtApp.payload.data[key] || nuxtApp.static.data[key];
         if(!data) return;

         const expirationDate = new Date(data.fetchedAt);
         expirationDate.setTime(expirationDate.getTime() + 10 * 1000);
         const isExpired = expirationDate.getTime() < Date.now();
         if(isExpired) return;

         return data;
     },
}