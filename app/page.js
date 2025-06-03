import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {

  let linkStyles = "text-cyan-600 underline hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFirstComponent />
      <h2>Class Example Links</h2>
      <ul>
        <li><Link href="./week-2/" className={linkStyles}>Week 2 - Intro to React</Link></li>
        <li><Link href="./week-3/objects" className={linkStyles}>Week 3 - Objects</Link></li>
        <li><Link href="./week-3/props" className={linkStyles}>Week 3 - Props</Link></li>
        <li><Link href="./week-4/functions" className={linkStyles}>Week 4 - Functions</Link></li>
        <li><Link href="./week-4/counter" className={linkStyles}>Week 4 - Counter</Link></li>
        <li><Link href="./week-5/" className={linkStyles}>Week 5 - Controlled Component</Link></li>
      </ul>
    </main>
  );
}

