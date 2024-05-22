export default async function useBlogFetch(slug: any) {
  try {
    const req = await fetch(`http://localhost:4000/api/blogs${slug}`, {
      cache: "no-store",
    });
    const data = await req.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
