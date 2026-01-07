interface ButtonWithLoadingRootProps {
    children?: React.ReactNode;
    loading: boolean;
}

export function ButtonWithLoadingRoot({ children, loading }: ButtonWithLoadingRootProps) {

    return (
        <div>
            {loading && <span>Loading...</span>}
            {!loading && children}
        </div>
    );
}