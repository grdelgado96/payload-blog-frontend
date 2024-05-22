/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import useBlogFetch from "./hooks/BlogFetch";

export default async function Home() {
  const data = await useBlogFetch("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.docs.map((post: any) => (
        <Card key={post.id}>
          <img
            src={`http://localhost:4000${post.image.url}`}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          ></img>
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="text-sm line-clamp-3 text-gray-600">
              {post.description}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.id}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
