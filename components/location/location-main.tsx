import { PhoneIcon, DevicePhoneMobileIcon, MapIcon, TruckIcon } from '@heroicons/react/24/outline'
import Map from "@/components/common/map";

const features = [
    {
        name: 'tell',
        description:
            '031-213-2924',
        icon: PhoneIcon,
    },
    {
        name: '주차',
        description:
            '사전 연락 주시면 안내드리겠습니다.',
        icon: TruckIcon,
    },
    {
        name: 'phone',
        description:
            '010-9141-2924',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: '주소',
        description:
            '광교효성해링턴타워 경기도 수원시 영통구 하동 1016,1716호 Y2 Connect (1016 Ha-dong, Yeongtong-gu, Suwon-si, Gyengi-do Korea Hyosung Harrington Tower 1716)',
        icon: MapIcon,
    },
]

export default function LocationMain() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
