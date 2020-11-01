import Main_page from "../components/landing_page/Main";
import { useRouter } from "next/router";
export default function Home({ data }) {
  return (
    <div>
      {/* <h2 className="text-2xl text-teal-500 text-center">hello there people</h2> */}
      <Main_page data={data} />
      {/* <span className="fixed bottom-0 opacity-75 right-0 mx-2 my-2 p-2 rounded text-xs sm:text-sm bg-gray-700 text-gray-300 ">
        Built and maintained by{" "}
        <a
          href="https://twitter.com/Jacksonkitsao5"
          className="text-yellow-600"
        >
          {" "}
          Jackson kitsao
        </a>{" "}
        find me on{" "}
        <a href="https://github.com/jkitsao" className="text-blue-400">
          Github
        </a>
      </span> */}
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const api_link =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/tips"
      : `https://tipjarr.net//api/tips`;
  const res = await fetch(api_link);
  console.log(process.env.NODE_ENV + "there you go mate");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
