
type ProductTitleProps = {
    children: React.ReactNode;
    className?: string;
};

function ProductTitle({ children, className = "font-bold" }: ProductTitleProps){
    return (
        <h3 className={className}>{children}</h3>
    );
}

export { ProductTitle }