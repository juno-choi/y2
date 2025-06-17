'use client'

const product = {
    name: '부품 공급 업체 개발',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Business', href: '#' },
    ],
    description: 'Parts supplier development',
    flexiblyRespondDesignRequirements: [
        'Active Device',
        'Passive Device',
        'PCB (Rigid/Flexible/Buildup)',
        'Terminal & Connector',
        'Wire harness',
        'TFT LCD',
        'Semiconductors',
    ],
}

export default function Parts() {
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>
                    <div className="py-10 lg:col-span-3 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Flexibly respond design requirements</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.flexiblyRespondDesignRequirements.map((p) => (
                                        <li key={p} className="text-gray-400">
                                            <span className="text-gray-600">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
