
type ProductDescriptionProps = {
    children: React.ReactNode;
    className?: string;
};

function ProductColorNumbers({ children, className = "text-base mt-2 mb-3" }: ProductDescriptionProps){
    return (
        <p className={className}>{children}</p>
    );
}

export { ProductColorNumbers };