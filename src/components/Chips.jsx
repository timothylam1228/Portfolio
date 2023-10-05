const Chips = (props) => {
    const { title, color, className,textClassName } = props;
    return (
        <div className={`rounded-xl border-2 flex font-bold text-white border-black hover:bg-gray-400 cursor-pointer transition-all ${className}`}>
            {/* hover enlarge */}

            <div className={` font-mono px-4 py-1 flex-wrap ${textClassName}`}>
                {title}
            </div>
        </div>
    )
}

export default Chips;