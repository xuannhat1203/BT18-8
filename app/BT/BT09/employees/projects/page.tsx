"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const listEmployees = [
  {
    id: 1,
    name: "David",
    age: 20,
    project: [
      {
        id: 1,
        nameJob: "Facebook",
      },
      {
        id: 2,
        nameJob: "Lazada",
      },
    ],
  },
  {
    id: 2,
    name: "Linda",
    age: 22,
    project: [
      {
        id: 1,
        nameJob: "Facebook 2",
      },
      {
        id: 2,
        nameJob: "Lazada 2",
      },
    ],
  },
  {
    id: 3,
    name: "Kavin",
    age: 18,
    project: [
      {
        id: 1,
        nameJob: "Facebook 3",
      },
      {
        id: 2,
        nameJob: "Lazada 3",
      },
    ],
  },
];

export default function EmployeeDetailPage() {
  const router = useRouter();
  const [employee, setEmployee] = useState<any>(null);

  useEffect(() => {
    const localId = localStorage.getItem("id");
    if (localId) {
      const id = JSON.parse(localId);
      const findEmployee = listEmployees.find((person) => person.id === id);
      setEmployee(findEmployee);
    }
  }, []);
  const listProject = () => {
    router.push("/BT/BT09/employees/projects");
  };
  const home = () => {
    router.push("/BT/BT09/employees");
  };
  const detail = (id: any) => {
    localStorage.setItem("id", JSON.stringify(id));
    router.push("/BT/BT09/employees/detail");
  };
  return (
    <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Chi tiết dự án</h2>
        <button
          onClick={home}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Home
        </button>
      </div>

      {employee ? (
        <div>
          <h4 className="text-lg font-medium text-gray-600">
            Danh sách dự án của nhân viên có ID = {employee.id}
          </h4>
          <ul className="list-none p-0 mt-4 space-y-2">
            {employee.project.map((proj: any) => (
              <li
                key={proj.id}
                className="bg-gray-200 p-3 rounded-md text-gray-700"
              >
                {proj.nameJob}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Đang tải...</p>
      )}
    </div>
  );
}
