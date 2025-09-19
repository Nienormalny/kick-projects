'use client'
const LoadingComponent = ({loadingText}: {loadingText: string}) => {
    return <div className="flex flex-col w-screen h-screen bg-blue-900 items-center justify-center gap-y-8">
        <span className="w-16 h-16 border-2 border-white animate-spin"/>
        <h1 className="text-white text-4xl font-bold">{loadingText}</h1>
    </div>
}

export default LoadingComponent;