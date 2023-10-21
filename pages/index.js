import Seo from "@/components/Seo";
import Head from "next/head";

export default function Home() {
	return (
    <div>
			<Seo title="Home"/>
      <h1 className="active">Hello</h1>
    </div>
  );      
}