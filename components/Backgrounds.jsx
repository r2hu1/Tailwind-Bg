import Card from "./Card";

export const prevBg = [
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>,
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>,
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div></div>,
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>,
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>,
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>,
    <div className="absolute inset-0 top-0 -z-10 h-full w-full bg-white flex items-center justify-center"><div className="h-[300px] absolute top-0 left-0 w-[300px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div></div>,
    <div className="absolute inset-0 top-0 -z-10 h-full w-full bg-white flex items-center justify-center"><div className="h-[300px] absolute top-0 right-0 w-[300px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div><div className="h-[300px] absolute bottom-0 left-0 w-[300px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div></div>,
    <div className="absolute inset-0 bg-white -z-10 h-full w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 opacity-80"></div>,
    <div className="absolute inset-0 -z-10 bg-white h-full w-full bg-gradient-to-r from-rose-100 to-teal-100"></div>,
    <div className="absolute inset-0 -z-10 bg-white h-full w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-100 via-violet-200 to-emerald-400"></div>,
    <div className="absolute inset-0 -z-10 bg-white h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-emerald-300 to-indigo-300"></div>
];

export default function Backgrounds() {
    return (
        <div className="py-20 -mt-2 grid grid-cols-1 place-items-center md:grid-cols-3 gap-5 md:gap-3 px-8 md:px-20 lg:px-40">
            {prevBg.map((bg, i) => <Card bg={bg} key={i} />)}
        </div>
    )
}