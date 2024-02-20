// //Busca post anterior
// export async function afterPost(id: number) {
//     let existPost = true;
//     for (let countPosts = id; existPost; countPosts--) {
//       const { data } = await usePost.getNavigatorPosts(countPosts - 1);
//       if (data[0]) {
//         existPost = false;
//         return 'posts/' + data[0].attributes.slug as string;
//       }
//       if (countPosts == -2) {
//         console.log('Nenhum post encontrado. Saindo...');
//         break;
//       }
//     }
//   }
  
//   // Busca Próximo post
//  export async function nextPost(id: number) {
//     let existPost = true;
//     for (let countPosts = id; existPost; countPosts++) {
//       const { data } = await usePost.getNavigatorPosts(countPosts + 1);
//       if (data[0]) {
//         existPost = false
//         return 'posts/' + data[0].attributes.slug as string;
//       }
//       if (countPosts == 2) {
//         console.log('Nenhum post encontrado. Saindo...');
//         break;
//       }
//     }
//   }
  