
type ProductDescriptionProps = {
    children: React.ReactNode;
    className?: string;
};

function ProductDescription({ children, className = "text-base mt-2 line-clamp-2" }: ProductDescriptionProps){
    return (
        <p className={className}>{children}</p>
    );
}

export { ProductDescription };