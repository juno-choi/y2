'use client'

const product = {
    name: '설계',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Solution', href: '#' },
    ],
    description: 'Design',
    solution: [
        ['기능 안전 표준 ISO26262에 대한 솔루션 및 컨설팅 제공', 'Consulting on functional safety standard ISO 26262.'],
        ['다양한 엔지니어링 기술을 기반으로 차별화된 최적의 솔루션 제공', 'Provide optimal solutions based on various engineering technology know-how.'],
    ],

    flexiblyRespondDesignRequirements: [
        ['그래픽 기반 SCL 파일을 활용한 정합성 자동화 평가', 'Automated evaluation of consistency using SCL graphic-based files'],
        ['사용자의 요구사항에 기반하는 데이터 유효성 검사', 'Validate data based of users needs'],
        ['데이터 유효성 및 Topology 오류검사 기능 제공', 'Provide data validation and Topology checking function'],
        ['CAN(FD), LIN, JI939, 이더넷, TP, Diagnostics를 활용한 평가 수행', 'Evaluations were made using CAN(FD), LIN, JI939, Ethernet and Diagnostic Tools.'],
    ],

    designQuality: [
    ['SCL 파일을 활용한 평가 분석', 'Evaluation analysis using SCL file'],
    ['데이터베이스 연계 및 인터페이스 공유', 'Share interface with database linkage'],
],
}

export default function Design() {
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
                                    {product.solution.map((p) => (
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
                            <h3 className="text-sm font-medium text-gray-900">설계 /초도 품 검증/ 양산까지 전 공정 사용자 요구사항 반영</h3>
                            <h4 className="text-sm font-medium text-gray-900">Reflect the requirements of all process users from design, first article product verification, and mass production.</h4>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.flexiblyRespondDesignRequirements.map((p) => (
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
                            <h3 className="text-sm font-medium text-gray-900">양산 일정 대응 / 설계 품질확보</h3>
                            <h4 className="text-sm font-medium text-gray-900">Support for mass production and ensure / design quality</h4>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.designQuality.map((p) => (
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
                            <h3 className="text-sm font-medium text-gray-900">품질 이슈 발생시 책임 소재 명확화 및 신속 대응</h3>
                            <h4 className="text-sm font-medium text-gray-900">Clarify responsible & clarify the scope of responsibility when a quality problem occurs and respond quickly.</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
