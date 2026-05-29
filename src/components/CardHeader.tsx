import StarIcon2 from '@/assets/icons/star.svg';

export const CardHeader = ({ title, description }: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-col" >
            <div className="inline-flex items-center gap-2">
                <StarIcon2 className="size-9 text-emerald-200 stroke-cyan-500 w-8 h-8 hover:text-green-500" />
                <h3 className="font-serif text-3xl" >{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2" >{description}</p>
        </div>
    )
}