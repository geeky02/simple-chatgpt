import Head from "next/head";
import ResultPage from "./organisms/ResultPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatgpt</title>
        <meta
          name="description"
          content="A simple chatbot starter kit for OpenAI's chat model using Next.js, TypeScript, and Tailwind CSS."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <ResultPage/>
    </>
  );
}
