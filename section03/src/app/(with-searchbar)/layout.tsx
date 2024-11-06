import { ReactNode } from "react";
import Searchbar from "../../components/seachbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
