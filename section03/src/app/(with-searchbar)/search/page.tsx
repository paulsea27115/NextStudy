export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  console.log(searchParams.q);
  return <div>search page {searchParams.q}</div>;
}
