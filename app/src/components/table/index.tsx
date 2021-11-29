import React from "react"
import { Table } from "antd"
import { SportScheduleTableProps } from "../../interfaces"

export const ScheduleTable = ({ data, columns }: SportScheduleTableProps): JSX.Element => {
    return (
        <Table dataSource={data} columns={columns} />
    )
}