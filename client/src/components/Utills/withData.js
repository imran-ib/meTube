import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { endpoint, prodEndpoint } from "../../config";

// endpoints
const endpoint = `http://localhost:4444`;
const prodEndpoint = `https://imran-ebazar-server.herokuapp.com`;

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? prodEndpoint : prodEndpoint,
    request: operation => {
      //like a middleware that passes credentials and headers to all requests
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

// function createClient({ ctx, headers, initialState }) {
//   return new ApolloClient({
//     uri: process.env.NODE_ENV === "development" ? prodEndpoint : prodEndpoint,
//     // uri: "https://imran-ebazar-client.herokuapp.com",
//     cache: new InMemoryCache().restore(initialState || {}),
//     request: operation => {
//       operation.setContext({
//         // fetchOptions: {
//         //   credentials: "include"
//         // },
//         headers
//       });
//     }
//   });
// }

export default withApollo(createClient);
// credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
