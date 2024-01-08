function Container({ children }) {
    return (
        <div>
            <div className="layout-container">
                {children}
            </div>
        </div>
    )
}
export default Container;