import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-ap-southeast-2.hygraph.com/v2/clamoshwy37qr01uj10p9b7ih/master", //import.meta.env.VITE_API_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njg3ODcyNzAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbGFtb3Nod3kzN3FyMDF1ajEwcDliN2loL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJlMTRiMzI3NS01NmU2LTRlMzctOWZiYS0wOWFiM2U4YzEzNGQiLCJqdGkiOiJjbGFtb3VxeHozN3N4MDF0YzRmMGtheTE5In0.1QJp81SMsbKcjgjkS9P-tFlBbCH4-7n1sDTwDMYyhdrAhlQPq7d-Quj_ovIsFxFs2mIwxFqCCIcUbTzAl_tyF_Fw4WzLN7_ogJmy47vTNrIIH5atdiNZQm68IZEBY5UjLlmlBwFbSV3UvcumaMnEvjwXKmR_qVPBpc7jBy0u0YiQbbPBTABLdY8-Xt0-Xoues5Vdjd_5j_kiPEHQhl1xAv9KtI8osSt2v6mSD-morC3jy5ySOirUEpLxA2ja4J6xy-LdxwidqM-hhppKXuESAojFqkIUmFRcyd9JlJpntUjM3zR71ErUs4okY0yyfWulJ3Vd1ViQa7YLZU5bWI7Wl8VONZ0lWHvcWteff1RFZr5nh3hq0gDcaRfvPO-pYqPkM3saTCTgySavTRFBVvRG2rxy427RDePfXnKRkssQ8gFi4C0N42PsvXr4Lw60Y0ACgJW3CkTXdT3a-q9jFTz9v8cOvxjM8ubNGfkqWLctDy5iiNEOKRF81lNyfQVYfC1EoVy368fwR0JIT36qtVt1T55WfVPa50GlT0sUF4RTXSqgbjymrglZJM4ElcIsm9kFkpxh7ry92Gv-bWmVEVVLsAs2LINApp-rD3yMQUFXy-uxsYTeyMbHrRvnH2jsDeALdf9pdccqpLeeMcRjNThClHcR6fRwkrfXxqJeNOcuGWI", //`Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache(),
});
