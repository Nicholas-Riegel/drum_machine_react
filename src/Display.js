const Display = ({ note0 }) => {
    return (
        <div id="display">
          <p>{note0 && note0.id}</p>
        </div>
    )
}
export default Display