export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Vennila",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "vennila@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Deventhiram",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "deva@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Naveen Kumar SE",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "se@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Theeraj",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "theeraj@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Prasanth",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "prasanth@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Sudharshan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sudhu@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Nanthan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "nan123@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Virat",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "kholi@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Hella",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "hella@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Rocky",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "bhai@gmail.com",
      status: "active",
      age: 65,
    },
  ];