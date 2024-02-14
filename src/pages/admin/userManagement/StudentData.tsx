import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemestersQuery(params);
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button size="small">Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters?.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      //* set params array for filter
      setParams(queryParams);
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
