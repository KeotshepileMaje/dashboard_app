"use client";
import { FaPlus } from "react-icons/fa6";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const monthlyData = [
  { month: "January", income: 15000, expenses: 8000 },
  { month: "February", income: 16000, expenses: 9000 },
  { month: "March", income: 17000, expenses: 8500 },
  { month: "April", income: 18000, expenses: 9500 },
  { month: "May", income: 20000, expenses: 10000 },
  { month: "June", income: 22000, expenses: 11000 },
  { month: "July", income: 21000, expenses: 10500 },
  { month: "August", income: 23000, expenses: 11500 },
  { month: "September", income: 24000, expenses: 12000 },
  { month: "October", income: 25000, expenses: 13000 },
  { month: "November", income: 26000, expenses: 14000 },
  { month: "December", income: 27000, expenses: 15000 },
];

const Reports = () => {
  return (
    <div
      className="grid-common
    grid col-start-1 col-end-3 h-[500px]
    lg:flex
    lg:flex-col
    lg:col-start-3
    lg:col-end-3
    lg:h-full
    "
    >
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Report</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>
      <div className="flex-1">
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={1000}
              height={300}
              data={monthlyData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#8884d8" />
              <Bar dataKey="expenses" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
