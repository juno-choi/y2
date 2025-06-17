'use client'

const product = {
    name: 'PCB 기술지원 서비스',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Solution', href: '#' },
    ],
    description: 'PCB technical support service',
    example: [
        'Automotive Parts',
        'Communication Parts',
        'Consumer Parts',
        'Industrial Parts',
        'Military Parts',
        'Others',
    ],

    integratedCircuit: [
        ['Allegro or Altium Tool을 활용', 'Use Allegro or Altium Tool'],
        ['고밀도 소형화 모듈화 실장을 고려한 통합설계', 'Integrated design considering high-density miniaturization and Modularization'],
        ['신호특성과 열 분포 특성을 고려한 회로 설계 지원', 'Circuit design support considering signal characteristics and heat distribution, characteristics \n'],
    ],

    providers: [
        ['전기적 회로 설계 및 해석 기술지원', 'Electrical circuit design and analysis support'],
        ['접합 및 파손 부 해석 평가 시험 지원', 'Support evaluation test for analysis of join and damaged parts'],
        ['진동 /열 /유체 해석 설계 기술 지원', 'Vibration, heat and fluid analysis design support'],
    ],
}

export default function Support() {
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
                                    {product.example.map((p) => (
                                        <li key={p} className="text-gray-400">
                                            <span className="text-gray-600">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">실장 통합 회로설계</h3>
                            <h4 className="text-sm font-medium text-gray-900">Integrated circuit design</h4>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.integratedCircuit.map((p) => (
                                        <li key={p[0]} className="text-gray-400">
                                            <span className="text-gray-600">{p[0]}</span>
                                            <br/>
                                            <span className="text-gray-600">{p[1]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">IPC 규격기준 PCB 검증 Solution 제공 </h3>
                            <h4 className="text-sm font-medium text-gray-900">Provides PCB Verification solution based on IPC standard.</h4>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.providers.map((p) => (
                                        <li key={p[0]} className="text-gray-400">
                                            <span className="text-gray-600">{p[0]}</span>
                                            <br/>
                                            <span className="text-gray-600">{p[1]}</span>
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
