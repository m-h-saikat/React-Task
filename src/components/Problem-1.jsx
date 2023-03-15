import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [sortedData, setSortedData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.length === 0
      ? setData((data) => [{ name, status }])
      : setData((data) => [...data, { name, status }]);
    setSortedData(data);
    setName("");
    setStatus("");
  };

  useEffect(() => {
    if (show === "active") {
      setSortedData(data.filter((item) => item?.status === "active"));
    } else if (show === "completed") {
      setSortedData(data.filter((item) => item?.status === "completed"));
    } else {
      const activeData = data.filter((item) => item?.status === "active");
      const completedData = data.filter((item) => item?.status === "completed");
      const restData = data.filter(
        (item) => item?.status !== "active" && item?.status !== "completed"
      );
      setSortedData([...activeData, ...completedData, ...restData]);
    }
  }, [data, show]);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
        <div className='col-6 '>
          <form
            className='row gy-2 gx-3 align-items-center mb-4'
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className='col-auto'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='col-auto'>
            

              <input
                type='text'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='form-control'
                placeholder='Status'
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className='col-8'>
          <ul
            className='nav nav-pills mb-3 justify-content-center '
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item'>
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type='button'
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type='button'
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type='button'
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className='tab-content'></div>
          <table className='table table-striped '>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item) => (
                <tr key={item.name}>
                  <td>{item?.name}</td>
                  <td>
                    {item?.status?.replace(/^\w/, (c) => c.toUpperCase())}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
