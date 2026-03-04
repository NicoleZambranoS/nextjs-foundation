import { Suspense } from 'react'

async function DocsContent({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params

    // params.slug is an array of path segments
    const path = slug.join('/')

    return (
        <>
            <p className="mb-2">Full path: /docs/{path}</p>
            <p className="mb-4">Segments: {slug.length}</p>
            <ul className="list-disc pl-6">
                {slug.map((segment, i) => (
                    <li key={i}>
                        Segment {i}: {segment}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default function DocsPage(props: {
    params: Promise<{ slug: string[] }>
}) {
    return (
        <div className="p-8">
            <h1 className="mb-4 text-2xl font-bold">Documentation</h1>
            <Suspense fallback={<p>Loading docs...</p>}>
                <DocsContent params={props.params} />
            </Suspense>
        </div>
    )
}