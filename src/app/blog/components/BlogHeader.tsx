import Link from "next/link";

export default function BlogHeader(){
    return (
        <div>
        <h2>Techooks Blog</h2>
        <ul>

            <Link href={'/blog'}>My Blog</Link>
        </ul>
        </div>
    )
}