import Image from "next/image";
import { extendedDummyData } from "@/app/lib/interface";
import useBlogFetch from "@/app/hooks/BlogFetch";

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  console.log("slug:---", params.slug);
  const data = await useBlogFetch(`/${params.slug}`);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Answering Legal - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <img
        src={`http://localhost:4000${data.image.url}`}
        width={800}
        height={500}
        alt="Title image"
        className="rounded-lg mt-8 border"
      ></img>
      <div className="mt-16 prose hover:prose-blue prose-lg ">
        <p
          dangerouslySetInnerHTML={{
            __html: data.content[0].children[0].text,
          }}
        ></p>
      </div>
    </div>
  );
}
