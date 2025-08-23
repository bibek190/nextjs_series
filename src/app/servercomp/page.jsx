const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  return (
    <devicePixelRatio>
      <h1>Server Comp</h1>

      <ul className="grid grid-cols-3 gap-5">
        {data.map((currElem, index) => {
          return <li key={index}>{currElem.body}</li>;
        })}
      </ul>
    </devicePixelRatio>
  );
};

export default ServerComp;
