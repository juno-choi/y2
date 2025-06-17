import { PhoneIcon, PrinterIcon, DevicePhoneMobileIcon, MapIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Map from "@/components/common/map";

const features = [
    {
        name: 'tell',
        description:
            '031-213-2924',
        icon: PhoneIcon,
    },
    {
        name: 'fax',
        description:
            '031-213-2025',
        icon: PrinterIcon,
    },
    {
        name: 'phone',
        description:
            '010-9141-2924',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'address',
        description:
            '광교효성해링턴타워\n경기도 수원시 영통구 하동 1016,1716호 Y2 Connect\n'+
            '(1016 Ha-dong, Yeongtong-gu, Suwon-si, Gyengi-do Korea\n' +
            'Hyosung Harrington Tower 1716)',
        icon: MapIcon,
    },
]

export default function MainHome() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Y2 Connect
                    </p>

                    <div className="relative mx-auto h-40 w-40 sm:h-100 sm:w-100 lg:h-100 lg:w-140">
                        <Image
                            src="/home/home.jpeg"
                            alt="y2 logo"
                            fill
                            className="object-contain dark:invert"
                            priority
                        />
                    </div>

                    <p className="mt-6 text-lg/8 text-gray-600">
                        About Y2 Connect & Hana Electronics
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        축적된 설계기술, SMT 실장기술, 생산기술을 기반으로<br/>사용자의 용도에 적합한 최적의 시스템 솔루션을 제공합니다.
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Based on accumulated design technology, SMT mounting technology, and production technology,
                        we provide the optimal system solution for your application.
                    </p>
                </div>
                <Map></Map>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
