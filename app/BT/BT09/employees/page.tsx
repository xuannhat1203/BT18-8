"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function page() {
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
  const router = useRouter();
  const detail = (id: any) => {
    localStorage.setItem("id", JSON.stringify(id));
    router.push("/BT/BT09/employees/detail");
  };
  return (
    <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Danh sách nhân viên
      </h2>
      <ul className="list-none p-0 space-y-4">
        {listEmployees.map((person: any) => (
          <li
            key={person.id}
            className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h5 className="text-lg font-medium text-gray-700">
              ID: {person.id}
            </h5>
            <h5 className="text-lg font-medium text-gray-700">
              Tên: {person.name}
            </h5>
            <h5 className="text-lg font-medium text-gray-700">
              Tuổi: {person.age}
            </h5>
            <button
              onClick={() => detail(person.id)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Employee Detail
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
