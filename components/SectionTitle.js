const SectionTitle = (props) => {
    return ( 
        <div className="sectionTitleContainer" id={ props.id }>
            <h1 className="sectionTitle">{ props.name }</h1>
            <h1 className="titleShadow">{ props.name }</h1>
        </div>
    );
}
 
export default SectionTitle;