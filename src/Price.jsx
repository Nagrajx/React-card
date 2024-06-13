export default function Price({oldPrice ,newPrice}){

    let styles = {
        textDecorationLine: "line-through",
    }
    let newStyles = {
        fontWeight: "bold",
    }

    let bgColor = {
        backgroundColor:"#e0c367",
        height: "30px",
        
    }
    return(
        <div style={bgColor}>
            <span style={styles}>{oldPrice}</span>
            &nbsp; &nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}