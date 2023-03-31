// const getIds = new Promise((resolve, reject) => {
//   let id = [10, 22, 30];
//   setTimeout(() => {
//     reject(id);
//   }, 2000);
// });

// console.log(getIds);
// getIds
//   .then((id) => {
//     console.log(id);
//   })
//   .catch((err) => {
//     console.log("error", err);
// });
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --force --prefix client && npm run build --prefix client",
//  "client": "npm run start --prefix ./client"

// "start": "nodemon server.js",
//     "start:prod": "SET NODE_ENV=production&&nodemon server.js",

// {
//   serviceusersToVisit: [[Object], [Object]],
//   _id: '630efa2ebee1820ea0ae9066',
//   careruser: '62bc001b2105fc4bd8981d70',
//   __v: 0,
//   dateOfVisit: '2022-08-31T00:00:00.000Z',
// },

let visitData = {
  status: 200,
  data: {
    data: {
      visit: [
        {
          serviceusersToVisit: [[Object], [Object]],
          _id: '630efa2ebee1820ea0ae9066',
          careruser: '62bc001b2105fc4bd8981d70',
          __v: 0,
          dateOfVisit: '2022-08-31T00:00:00.000Z',
        },
      ],
    },
  },
};

// console.log(visitData.data.data.visit[0]);


// const add = (a=3,b=2)=>{
//   console.log(a)
//   return a+b
// }

// console.log(add())


let x = [
  { type: 'GET_CARERS' },
  { type: 'SET_CARERS', payload: [ [Object], [Object], [Object] ] }
]

console.log(x[1].type)