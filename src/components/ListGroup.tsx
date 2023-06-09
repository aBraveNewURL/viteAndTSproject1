function ListGroup() {
  let items = ["Me", "Myself", "Just I", "Nobody"];

  items = [];

  return (
    <>
      <h1>
        This is <s>Sparta</s> ListGroup
      </h1>
      {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
