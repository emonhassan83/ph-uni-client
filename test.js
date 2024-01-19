// const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: "<AdminDashboard/>",
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: "<CreateAdmin/>",
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: "<CreateFaculty/>",
//       },
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: "<CreateStudent/>",
//       },
//     ],
//   },
// ];

// const newArray = adminPaths2?.reduce((acc, item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: "NavLink",
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: "NavLink",
//       }))
//     });
//   }

//   return acc;
// }, []);

// const newArray = adminPaths2?.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//         acc.push({
//             path: child.path,
//             element: child.element,
//           });
//     })
//   }

//   return acc;
// }, []);


// ? Serializable Object
const person = {
  name: 'John',
  role: "admin",
  age: 34,
}

// ? Non-serializable Object
const person2 = {
  name: 'smith',
  role: "admin",
  age: 24,
  greet: () => {
    return "Hello JOE!";
  }
}

console.log(JSON.stringify(person));
console.log(JSON.stringify(person2));