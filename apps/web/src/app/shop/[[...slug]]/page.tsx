import { Suspense } from 'react'

async function ShopContent({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params

    // params.slug is undefined when no segments present
    const categories = slug || []
    const isRoot = categories.length === 0

    return (
        <>
            <h1 className="mb-4 text-2xl font-bold">
                {isRoot ? 'All Products' : 'Filtered Products'}
            </h1>
            {isRoot ? (
                <p>Showing all categories</p>
            ) : (
                <div>
                    <p className="mb-2">Category path: /{categories.join('/')}</p>
                    <p className="mb-4">Depth: {categories.length}</p>
                    <ul className="list-disc pl-6">
                        {categories.map((category, i) => (
                            <li key={i}>
                                Level {i + 1}: {category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default function ShopPage(props: {
    params: Promise<{ slug?: string[] }>
}) {
    return (
        <div className="p-8">
            <Suspense fallback={<p>Loading shop...</p>}>
                <ShopContent params={props.params} />
            </Suspense>
        </div>
    )
}