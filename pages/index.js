import Layout from "../components/layout";
import Body from "../components/Body";
import Post from "../components/Post";
export default function Home({ data }) {
  return (
    <Layout pageTitle="Home">
      {/* {console.log(data.hero?.title)} */}
      <Body banner="true" />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/homepage`);
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }
