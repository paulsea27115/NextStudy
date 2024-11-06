import ClientComponent from "@/components/client-component";

export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  console.log(searchParams.q);
  return (
    <div>
      search page {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
