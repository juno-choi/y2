'use client'

const product = {
    name: '부품 공급',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Solution', href: '#' },
    ],
    description: 'Parts supply',
    supply: [
        ['설계 요구사항을 기반으로 정확한 사양의 부품공급 및 안정성 확보', 'Ensure accurate parts supply and stability based on design requirements.'],
        ['부품의 품질, 신뢰성 검증을 통하여 고객사의 평가 환경에 맞는 제품을 공급하고 제조, 양산의 품질 확보', 'By verifying the quality and reliability of parts, we supply products the meet the customer\'s evaluations environment and ensure the quality of manufacturing and mass production.'],
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
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.supply.map((p) => (
                                        <li key={p} className="text-gray-400">
                                            <span className="text-gray-600">{p[0]}</span>
                                            <br/>
                                            <span className="text-gray-600">{p[1]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">사전 '업체 제안 설명회‘ 진행</h3>
                            <h4 className="text-sm font-medium text-gray-900">Proposal briefing session proceeds to advance customers.</h4>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">제품 공급 일정 / 품질확보 대응 등 최적화 방안을 협의</h3>
                            <h4 className="text-sm font-medium text-gray-900">Discuss optimization plans for parts supply schedules and measure to ensure parts quality.</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
