const Chips = (props) => {
    const { title, className, textClassName } = props;
    return (
        <div className={`rounded-xl border-2 flex font-bold text-white border-black cursor-pointer transition-all ${className}`}>
            {/* hover enlarge */}
            <div className={`font-mono px-2 md:px-4 py-1 flex-wrap ${textClassName}`}>
                {title}
            </div>
        </div>
    )
}

export default Chips;