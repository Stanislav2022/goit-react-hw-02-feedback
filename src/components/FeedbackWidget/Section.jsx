

const Section = ({ title, children }) => {
    return (
        < div >
            <h2 className="css.title">{ title}</h2>
            {children}
        </div >
    )
}